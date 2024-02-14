import React, { useState,useEffect,useRef} from 'react';
import {Link, useParams} from 'react-router-dom';


/************************* css 주석처리       ***************************/
/*import './Messenger.css'*/

//헤더
import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

//chat
import * as StompJs from '@stomp/stompjs';
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

function CreateReadChat() {
    const [chatList, setChatList] = useState([]);
    const [chat, setChat] = useState('');
    const [chatNo,setChatNo] = useState();
    const [name,setName] = useState();
  
    const [chattingRoom,SetChattingRoom] = useState([]);
    const [chatRoomKing,setChatRoomKing] = useState();

    const [userId,setUserId] = useState();
  
    // const { apply_id } = useParams();
    const client = useRef({});
    
    const scrollRef = useRef();
    
    const scrollToBottom = () => {
        if (scrollRef.current) {
          // scrollIntoView 옵션을 사용하여 아래로 스크롤합니다.
          scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
        }
      };

    function chatRoom(e){
        // console.log('채팅방 번호:',e.target.children[0].value);
        // chatNo = e.target.children[0].value;
        e.preventDefault();
        var s = document.getElementById('chatRoomNo');
        s.value = e.target.children[0].value
        setChatRoomKing(e.target.children[1].value);
        console.log('확인:',s.value);
        setChatNo(s.value);
        axios.get(`/api/v1/chat/list/room/${s.value}`)
        .then(res=>{
            // console.log('채팅 내용',res.data);
            setChatList(res.data);
            scrollToBottom();
        })
    }



    const connect = () => {
        client.current = new StompJs.Client({
            brokerURL: 'ws://192.168.0.15:8080/ws',
            onConnect: (data) => {
                console.log('success');
                client.current.publish({
                    destination: '/pub/chat/join',
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
        client.current.subscribe(`/sub/chat/${num}`, (body) => {
            try {
                const json_body = JSON.parse(body.body);
                // console.log('>>>', json_body);
                axios.get(`/api/v1/chat/list/room/${num}`)
                .then(res=>{
                    console.log('res.data',res.data);
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
        var num = event.target.children[0].value;
        // console.log('chat',chat);
        scrollToBottom();
        event.preventDefault();
    
        publish(num,chat);
    };
    
    useEffect(() => {
        const myCookieValue = getCookie('Authorization');
    
        // console.log(`Bearer ${myCookieValue}`);
        //자바 스프링
        axios.get(`/api/v1/foodworks/account`, {
            headers: {
            'Authorization' : `${myCookieValue}`,
            'Content-Type' : 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            var proflieData = response.data;
            if(proflieData.accountNo != null) {
            setUserId(proflieData.accountNo);
            setName(proflieData.name);
            }
        })
        .catch(error => console.log('error',error))
            
        connect();
        return () => disconnect();
    }, []);

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
        <div>
            <div>
                <input type='button' onClick={insertChatRoom} value='방추가'/>
                {chattingRoom.map((chat)=>(
                    <div onClick={chatRoom}>
                        <input type='hidden' value={chat.chattingNo}/>
                        <input type='hidden' value={chat.accountNo}/>
                        {chat.chattingNick} : {chat.count}명
                    </div>
                ))}
            </div>
            <div>
                <div class="wrap">
                <input type='hidden' value={chatNo}/>
                {chatRoomKing != null? <input type='button' onClick={deleteChatRoom} value={userId == chatRoomKing? '방제거':'방나가기'}/>:''}
                <div>{chatRoomKing}</div>
                <div class="main-chat"> 
                {chatList.map((chat)=>(
                    chat.accountNo != userId?
                    <div class="friend-chat">
                        {/* <img class="profile-img" src="./pic/default.png" alt="쀼프로필사진"> */}
                        <div class="friend-chat-col">
                            <span class="profile-name">{chat.name}</span>
                            <span class="balloon">{chat.chatComment}</span>
                        </div>
                        <time datetime="07:30:00+09:00">{chat.time.split(' ')[1]}</time>
                    </div>
                    :
                    <div class="me-chat">
                        <div class="me-chat-col">
                            <span class="balloon">{chat.chatComment}</span>
                        </div>
                        <time datetime="07:33:00+09:00">{chat.time.split(' ')[1]}</time>
                    </div>
                ))}
                </div>
            </div>
            <form onSubmit={(event) => handleSubmit(event, chat)}>
                <input id='chatRoomNo' name='chatRoomNo' type='hidden'/>
                <div>
                    <input type={'text'} name={'chatInput'} onChange={handleChange} value={chat} />
                </div>
                <input type={'submit'} value={'의견 보내기'} />
            </form>
        </div>
        </div>
    );
  }


function Messenger() {

    const [accountNo, setAccountNo] = useState();
    const [myCookie, setMyCookie] = useState();

    

    const navigate = useNavigate();

    useEffect(()=>{
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
          
          const myCookieValue = getCookie('Authorization');
        //   setMyCookie(myCookieValue);
        //   console.log('myCookieValue',myCookieValue);
          if(myCookieValue == null){ //로그인 확인
            navigate('/signin');
          }
      
          
          axios.get('/api/v1/foodworks/account', {
            headers: {
              'Authorization' : `${myCookieValue}`,
              'Content-Type' : 'application/json; charset=UTF-8'
            }
          })
          .then(response => {
            console.log('response',response.data);
            setAccountNo(response.data.accountNo);
          })
          .catch(error => console.log(error))

    },[])

    

    return(
        <div>
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
                                <a href="index.html">Diet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <h1>목차</h1>

            
            <div>
                <CreateReadChat/>
            </div>
        </div>
    );
}

export default Messenger;