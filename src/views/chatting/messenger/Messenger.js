import {Link} from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import './Messenger.css';
//chat
import * as StompJs from '@stomp/stompjs';
//componants
import Modal from "./modal";
import ChatBot from '../../component/chatBot/ChatBot';

import DropDown from './dropDown';

function getCookie(name) { //로그인 여부 확인
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
}
function Messenger() {

    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState('');
    const [name,setName] = useState();

    //방추가인지 확인
    const [addChattingRoom,setAddChattingRoom] = useState();
    //채팅방 이름 변경
    const [editChattingRoom,setEditChattingRoom] = useState();
    const [editRoomName,setEditRoomName] = useState();
    //
    const [chatRoomNo,setChatRoomNo] = useState();
  
    const [chattingRoom,SetChattingRoom] = useState([]);

    const [userId,setUserId] = useState();
  
    // const { apply_id } = useParams();
    const client = useRef();
    
    const scrollRef = useRef();
    
    const scrollToBottom = () => {
        if (scrollRef.current) {
          // scrollIntoView 옵션을 사용하여 아래로 스크롤합니다.
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
      };
    //모달창 업데이트 딜리트 출력
    const [isOpen, setIsOpen] = useState();

    useEffect(() => {
        // Add or remove the 'no-scroll' class to the html and body elements based on the modal's open state
        if (isOpen) {
          document.documentElement.style.overflow = 'hidden';  // Prevent scrolling on html
          document.body.style.overflow = 'hidden';  // Prevent scrolling on body
        } else {
          document.documentElement.style.overflow = 'auto';  // Allow scrolling on html
          document.body.style.overflow = 'auto';  // Allow scrolling on body
        }
    
        // Cleanup: Remove the added classes when the component unmounts or modal is closed
        return () => {
          document.documentElement.style.overflow = 'auto';  // Ensure scrolling is allowed on html on unmount
          document.body.style.overflow = 'auto';  // Ensure scrolling is allowed on body on unmount
        };
      }, [isOpen]);
    
      const toggleModal = (e) => {
        setAddChattingRoom();
        console.log('sdada',);
        setAddChattingRoom(e.currentTarget.querySelector('#addChattingRoom'));
        setIsOpen(!isOpen);
      };

    function chatRoom(e){
        // console.log('채팅방 번호:',e.target.children[0].value);
        // chatNo = e.target.children[0].value;
        e.preventDefault();

        const chatChattingNoValue = e.currentTarget.querySelector('#chatChattingNo').value;

        var s = document.getElementById('chatRoomNo');
        // console.log('채팅방',chatChattingNoValue);
        s.value = chatChattingNoValue;
        
        subscribe(chatChattingNoValue); //채팅방 연결 테스트
        // console.log('확인:',s.value);
        axios.get(`/api/v1/chat/list/room/${chatChattingNoValue}`)
        .then(res=>{
            // console.log('채팅 내용',res.data);
            setChatList(res.data);
            scrollToBottom();
        })
    }

    //엔터키 막기
    const onEnterSubmit = (e) => {
      try {
        if (e.isComposing || e.keyCode === 229) return;
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          const form = e.target.closest('.chat-message');
          const sendButton = form.querySelector('button');
          if (!sendButton) {
            console.error("Button not found inside the form:", form);
            return;
          }
          sendButton.click();
        }
      } catch (error) {
        console.error("Error in onEnterSubmit:", error);
      }
    };

    //스크롤
    const chatHistoryRef = useRef();

    useEffect(() => {
      if (chatHistoryRef.current) {
        chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
      }
    }, [chatList]);

    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: 'ws://192.168.0.15:8080/ws',
            onConnect: (data) => {
                console.log('success');
                client.current.publish({
                    destination: '/pub/join',
                    body: JSON.stringify({
                        chattingNo: 0,
                        accountNo: userId,
                        name: name
                    }),
                });
            },
        });
        client.current.activate();
    };
  
    const publish = (num,chat,check) => {
        if (!client.current.connected) return;
            // console.log('userId',userId);
          client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
              chattingNo: num,
              accountNo: check == null ? userId : 1,
              name: name,
              chatComment: check== 'in'? `${name}님이 입장하셨습니다.` :check== 'out' ? `${name}님이 퇴장하셨습니다.` : chat
            }),
        });
    
        setChat('');
        
        subscribe(num);
    };
  
    const subscribe = (num) => {
      // console.log('num',num);
      setChatRoomNo(num);

      client.current.subscribe(`/sub/chat/${num}`, (body) => {
        try {
            const json_body = JSON.parse(body.body);
            // console.log('>>>', json_body);
            axios.get(`/api/v1/chat/list/room/${num}`)
            .then(res=>{
              setChatList(res.data); //웹소켓은 아니지만 대충 속이기
                
            })
        } catch (error) {
        console.error('Error processing message:', error);
        }
      });
    };
  
    const disconnect = () => {
        client.current.deactivate();
    };
  
    const handleChange = (event) => { // 채팅 입력 시 state에 값 설정
        setChat(event.target.value);
    };
  
    const handleSubmit = (event, chat) => { // 보내기 버튼 눌렀을 때 publish
        // console.log('event',event.target.children[0].value);
        var num = event.target.children[1].value;
        event.target.children[0].value = '';
        // setChatRoomNo(num)
        publish(num,chat,null);
        
        // console.log('chat',chat);
        // console.log('num',num); //채팅방 일련번호?
        // scrollToBottom();
        event.preventDefault();
        
    };
    
    useEffect(() => {
        const myCookieValue = getCookie('Authorization');
        
        axios.get(`/api/v1/foodworks/account`, {
          headers: {
            'Authorization': `${myCookieValue}`,
            'Content-Type': 'application/json; charset=UTF-8'
          }
        })
        .then(response => {
          var profileData = response.data;
          if (profileData.accountNo != null) {
            setUserId(profileData.accountNo);
            setName(profileData.name);
          }
        })
        .catch(error => console.log('error', error))
            
        connect();
        return () => disconnect();
      }, []);
      
      // handleSubmit 함수를 모달이 열릴 때 호출되는 이벤트 리스너에 연결
      useEffect(() => {
        if (isOpen) {
          const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleSubmit(event, chat);
            }
          };
      
          document.addEventListener('keydown', handleKeyDown);
      
          return () => {
            document.removeEventListener('keydown', handleKeyDown);
          };
        }
      }, [isOpen]);

    useEffect(()=>{
        if(userId != null){
            console.log("gdgd");
            chattingList();
        }
    },[userId])

    //채팅방 리스트
    function chattingList(){
      axios.get(`/api/v1/chat/list/${userId}`,{
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
        })
        .then(response => {
            console.log('chat/list',response.data);
            SetChattingRoom(response.data);
        })
        .catch(error => console.log('/chat/list',error));
    }

    //상태값 확인
    function setCheck(e){
      if(e[0] == '제거' || e[0] == '나가기'){
        setChatRoomNo(null);
        chattingList();
        publish(e[1],'','out')
        // chattingLog(e[1]);
        setChatList([]);
      }
      else{
        setEditChattingRoom(e[1]);
      }
    }
    function editChattingRoomName(e){
      e.preventDefault();
      setEditChattingRoom();
      setEditRoomName();
      if(e.currentTarget.querySelector('input').value == '' || e.currentTarget.querySelector('input').value.length >= 20){
        alert('공백은 20자 이상은 입력불가');
        return;
      }
      //채팅방 닉네임 수정 
      const myCookieValue = getCookie('Authorization'); //쿠키 받아주기
      const data = new FormData();
      data.append('chattingNick',e.currentTarget.querySelector('input').value);
      data.append('chattingNo',e.target.parentElement.querySelector('#chatChattingNo').value);
      // console.log(e.target.parentElement.querySelector('#chatChattingNo').value,e.currentTarget.querySelector('input').value);
      axios.put(`/api/v1/chat/list/room`,data
        ,{
          headers: {
              'Authorization' : `${myCookieValue}`,
              'Content-Type' : 'application/json; charset=UTF-8'
          }
        })
        .then(res=>{
          // alert(res.data);
          chattingList();
        });


      
    }

    //채팅방 이름 압력 함수
    const handleInputChange = (e) => { 
      setEditRoomName(e.target.value);
    };
   
  return (
    <div style={{paddingBottom:"80px"}}>
        <HeaderTop/>
        <Header/>

        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>Management</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html">chat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-area style-two"></div>


        <div className="c_container clearfix">
    <div className="people-list" id="people-list">
      <div className="search">
        <input type="text" placeholder="search" />
        <i className="fa fa-search"></i>
      </div>
      <div>
        <div>방추가</div>
        <i className="fa fa-plus-square add-friend-icon" onClick={toggleModal}>
          <input id='addChattingRoom' type='hidden' value='0'/>
        </i>
        
      </div>
      <ul className="list">
        {chattingRoom.map((chat)=>(
          
            <li className="clearfix" onClick={chatRoom}>
              <img src="" alt="avatar" />
              <div className="about" >
                  <input id='chatChattingNo' type='hidden' value={chat.chattingNo}/>
                  <input id='chatChattingUserNo' type='hidden' value={chat.accountNo}/>
                  {editChattingRoom == chat.chattingNo ? 
                    <form onSubmit={editChattingRoomName}>
                      <input value={editRoomName == null ? chat.chattingNick: editRoomName} onChange={handleInputChange}/>
                    </form>
                  :
                    <div className="name">{chat.chattingNick}</div>
                  }
                  <div className="status">
                    <i className="fa fa-circle online"></i> {chat.count}명
                  </div>
              </div>
              <DropDown kingNo={chat.accountNo} accountNo={userId} onCheck={setCheck} chatringNo={chat.chattingNo} />
            </li>
        ))}
      </ul>
    </div>
    
    <div className="m-chat">
      <div className="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div className="chat-about">
          <div className="chat-with">{userId}</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
        <i className="fa fa-plus-square add-friend-icon" onClick={toggleModal}></i>
        {isOpen && (
                
          <Modal
            open={isOpen}
            onCheck={setCheck}
            chatRoomNo = {chatRoomNo}
            addChattingRoom = {addChattingRoom}
            onClose={() => {
              setIsOpen(false);
            }}
          > 
          <div className="modal-addfood-label">
            <h2>{addChattingRoom == null ? '채팅방에 친구를 추가해 보세요!' :'채팅방을 추가해보세요!'}</h2>
          </div>
          
          {/* <form onSubmit={console.log("post")}> */}
          <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
            
          </form>
          </Modal>
        )}
        </div>
      
      <div className="chat-history" ref={chatHistoryRef}>
        <ul>
            {chatList.map((chat)=>(
                chat.accountNo == userId?
                    <li className="clearfix">
                        <div className="message-data align-right">
                        <span className="message-data-time" >{chat.time.split(' ')[1]}</span> &nbsp; &nbsp;
                        <span className="message-data-name" >{chat.name}</span> <i className="fa fa-circle me"></i>
                        
                        </div>
                        <div className="message other-message float-right">
                            {chat.chatComment}
                        </div>
                    </li>
                :
                chat.accountNo ==1?
                <h4><small>{chat.chatComment}</small></h4>
                :
                    <li>
                        <div className="message-data">
                        <span className="message-data-name"><i className="fa fa-circle online"></i>{chat.name}</span>
                        <span className="message-data-time">{chat.time.split(' ')[1]}</span>
                        </div>
                        <div className="message my-message">
                            {chat.chatComment}
                        </div>
                    </li>
            ))}
          
        </ul>
        
      </div> 
      
      <form className="chat-message clearfix" onSubmit={(event) => handleSubmit(event, chat)} onKeyDown={onEnterSubmit}>
            <textarea name="message-to-send" id="message-to-send" placeholder ="메시지를 입력해 주세요" onChange={handleChange} rows="3"></textarea>
            <input id='chatRoomNo' name='chatRoomNo' type='hidden'/>      
            <button>Send</button>
        </form> 
      
    </div> 
    
  </div> 

    <script id="message-template" type="text/x-handlebars-template">
    <li className="clearfix">
        <div className="message-data align-right">
        <span className="message-data-time" >{/*{{time}}*/}, Today</span> &nbsp; &nbsp;
        <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
        {/*{{messageOutput}}*/}
        </div>
    </li>
    </script>

    <script id="message-response-template" type="text/x-handlebars-template">
    <li>
        <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
        <span className="message-data-time">{/*{{time}}*/}, Today</span>
        </div>
        <div className="message my-message">
        {/*{{response}}*/}
        </div>
    </li>
    </script>
    <ChatBot/>
    </div>
  );
}


export default Messenger;