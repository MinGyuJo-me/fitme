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

let chatNo = 0;
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
    const [chatNo,setChatNo] = useState();
    const [name,setName] = useState();

    //
    const [chatRoomNo,setChatRoomNo] = useState();
  
    const [chattingRoom,SetChattingRoom] = useState([]);
    const [chatRoomKing,setChatRoomKing] = useState();

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
    
      const toggleModal = () => {
        setIsOpen(!isOpen);
      };

    function chatRoom(e){
        // console.log('채팅방 번호:',e.target.children[0].value);
        // chatNo = e.target.children[0].value;
        e.preventDefault();
        var s = document.getElementById('chatRoomNo');
        // console.log('채팅방',e.target.parentElement.children[0].value);
        s.value = e.target.parentElement.children[0].value;
        
        subscribe(e.target.parentElement.children[0].value); //채팅방 연결 테스트

        setChatRoomKing(e.target.parentElement.children[1].value);
        // console.log('확인:',s.value);
        setChatNo(e.target.parentElement.children[0].value);
        axios.get(`/api/v1/chat/list/room/${e.target.parentElement.children[0].value}`)
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
  
    const publish = (num,chat) => {
        if (!client.current.connected) return;
            // console.log('userId',userId);
        client.current.publish({
            destination: '/pub/chat',
            body: JSON.stringify({
              chattingNo: num,
              accountNo: userId,
              name: name,
              chatComment: chat
            }),
        });
    
        setChat('');
        
        subscribe(num);
    };
  
    const subscribe = (num) => {
      // console.log('num',num);
      setChatRoomNo(num);
      console.log('chatRoomNo',chatRoomNo)
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
        publish(num,chat);
        
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
    },[userId])
    //방추가
    function insertChatRoom(e) {
        e.preventDefault();
        console.log('추가')
    };
    function deleteChatRoom(e){
        e.preventDefault();
        if(e.target.value == '방제거'){
            const myCookieValue = getCookie('Authorization');
            axios.delete(`/api/v1/chat/list/room/${e.target.parentElement.children[0].value}`,{
                headers: {
                    'Authorization' : `${myCookieValue}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            } 
            )
            .then(res=>{
                console.log('제거 결과:',res.data);
            })
        }else{
            console.log(e.target.value,':',e.target.parentElement.children[0].value);
        }

    }
   
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
      <ul className="list">
        {chattingRoom.map((chat)=>(
            <li className="clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
            <div className="about" onClick={chatRoom}>
                <input type='hidden' value={chat.chattingNo}/>
                <input type='hidden' value={chat.accountNo}/>
                <div className="name">{chat.chattingNick}</div>
                <div className="status">
                <i className="fa fa-circle online"></i> {chat.count}명
                </div>
            </div>
            </li>
        ))}
      </ul>
    </div>
    
    <div className="chat">
      <div className="chat-header clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />
        
        <div className="chat-about">
          <div className="chat-with">Chat with Vincent Porter</div>
          <div className="chat-num-messages">already 1 902 messages</div>
        </div>
        <i className="fa fa-plus-square add-friend-icon" onClick={toggleModal}></i>
        {isOpen && (
                
                <Modal
                  open={isOpen}
                  chatRoomNo = {chatRoomNo}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                > 
                <div className="modal-addfood-label">
                  <h2>채팅방에 친구를 추가해 보세요!</h2>
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