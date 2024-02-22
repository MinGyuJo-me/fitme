import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import 'material-symbols';
import axios from 'axios';

var ipAddress = '192.168.0.110';

function ChatBot() {
  const [userMessage, setUserMessage] = useState(null);
  const inputInitHeight = 40; 
  // const [chatbox, setChatbox] = useState(null);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 초기 메시지 설정
    setChatbox([createChatLi("안녕하세요 👋\nFitme 챗봇 서비스 입니다.\n무엇을 도와드릴까요?😆", "incoming")]);
  }, []);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null); // STT를 위한 SpeechRecognition 객체
  const utteranceRef = useRef(new SpeechSynthesisUtterance()); // TTS를 위한 SpeechSynthesisUtterance 객체

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition(); // STT 객체 초기화
      recognitionRef.current.lang = 'ko-KR'; // 인식 언어를 한국어로 설정
      recognitionRef.current.interimResults = true; // 중간 결과를 반환하도록 설정

      recognitionRef.current.onspeechend = () => { // 음성 입력이 끝났을 때 동작
        recognitionRef.current.stop(); // STT 종료
        setIsListening(false);
      };

      recognitionRef.current.onresult = async (event) => { // 음성 인식 결과가 나왔을 때 동작
        const transcript = Array.from(event.results) // 인식된 음성을 텍스트로 변환
          .map(result => result[0].transcript)
          .join('');
        setUserMessage(transcript); // 인식된 텍스트를 사용자 메시지로 설정
        await handleChat();
      };
    }
  }, []);

  const handleListenClick = () => { // 음성 인식 시작/종료 버튼 클릭 이벤트 처리
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  // 채팅 메시지 생성 함수
const createChatLi = (message, className) => {
  return (
      <li key={Math.random()} className={`chat ${className}`}>
          {className === "outgoing" ? <p>{message}</p> : <><span className="material-symbols-outlined">smart_toy</span><p>{message}</p></>}
      </li>
  );
}

// API를 통해 응답 생성
const generateResponse = async () => {
  const API_URL = `http://${ipAddress}:5000/chatbot`;
  
  try {
      const response = await axios.post(API_URL, {
          message: userMessage,
      });

      return response.data.answer;
  } catch (error) {
      console.error("응답 생성 중 오류 발생:", error);
      throw error;
  }
}

// 채팅 처리 함수
const handleChat = async () => {
  const trimmedUserMessage = userMessage.trim();
  if (!trimmedUserMessage) return;
  // 사용자의 메시지를 채팅 상자에 추가
  setChatbox((prevChatbox) => [...prevChatbox, createChatLi(trimmedUserMessage, "outgoing")]);
  // 입력 텍스트 영역을 제거
  setUserMessage("");
  // 입력 텍스트 영역의 높이를 초기화
  const textareaElement = document.querySelector(".chat-input textarea");
  textareaElement.style.height = `${inputInitHeight}px`;
  // 응답을 기다리는 동안 "Thinking..." 메시지를 표시
  setChatbox((prevChatbox) => [...prevChatbox, createChatLi("Thinking...🤔", "incoming")]);

  try {
      const response = await generateResponse();

      // "Thinking..." 메시지를 제거
      setChatbox((prevChatbox) => prevChatbox.slice(0, -1));

      // 실제 응답을 표시
      setChatbox((prevChatbox) => [...prevChatbox, createChatLi(response, "incoming")]);

      // TTS로 응답 읽어주기
      utteranceRef.current.text = response;
      window.speechSynthesis.speak(utteranceRef.current);
  } catch (error) {
      // "Thinking..." 메시지를 제거하고 오류 메시지를 표시
      setChatbox((prevChatbox) => {
          const updatedChatbox = prevChatbox.slice(0, -1); // "Thinking..." 메시지 제거
          return [...updatedChatbox, createChatLi("이런! 오류가 발생했습니다.다시 시도해주세요.\n오류가 계속될 경우 관리자에게 문의해 주세요.😰", "incoming error")];
      });
  }
};

// 사용자가 메시지를 입력할 때의 동작을 처리하는 함수
const handleUserMessageChange = (event) => {
  const { value } = event.target;
  setUserMessage(value);
};

const handleTextareaInput = (e) => {
  // 내용에 따라 입력 텍스트 영역의 높이를 조절
 e.target.style.height = `${inputInitHeight}px`;
 e.target.style.height = `${e.target.scrollHeight}px`;
 // 입력된 메시지를 자동 줄바꿈
 e.target.style.whiteSpace = 'pre-wrap';
}

const handleTextareaKeyDown = (e) => {
 // Shift 키를 누르지 않고 Enter 키가 눌렸을 때 채팅을 처리
 if (e.key === "Enter" && !e.shiftKey) {
   e.preventDefault();
   handleChat();
 }
}

//챗봇 인사말
const [chatbox, setChatbox] = useState([
  createChatLi("안녕하세요 👋\nFitme 챗봇 서비스 입니다.\n무엇을 도와드릴까요?😆", "incoming")
]);

useEffect(() => {
  // 채팅 상자가 업데이트될 때 마다 가장 아래로 스크롤
  const chatboxElement = document.querySelector(".chatbox");
  chatboxElement.scrollTo(0, chatboxElement.scrollHeight);
}, [chatbox]);

return (
  // 챗봇 UI 구성
  <div>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle('show-chatbot')}>
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>FitBot</h2>
          <span className="close-btn material-symbols-outlined" onClick={() => document.body.classList.remove("show-chatbot")}>close</span>
        </header>
        <ul className="chatbox">
          {chatbox}
        </ul>
        <div className="chat-input">
            <textarea
              className='chat-input-textarea'
              placeholder='메시지를 입력하세요...'
              spellCheck={false}
              value={userMessage}
              // onChange={(e) => setUserMessage(e.target.value)}
              onChange={handleUserMessageChange}
              onKeyDown={handleTextareaKeyDown}
              onInput={handleTextareaInput}
              style={{ height: `${inputInitHeight}px` }}
              required
            />
            <button className="voice-input-button" onClick={handleListenClick}>
                <span className="material-symbols">{isListening ? 'mic' : 'mic_none'}</span>
            </button>
            <button className="chat-send" onClick={handleChat}>
                <span className="material-symbols">send</span>
            </button>
        </div>
      </div>
  </div>
);
}

export default ChatBot;