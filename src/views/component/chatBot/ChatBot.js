import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import 'material-symbols';


const Chatbot = () => {
  const [userMessage, setUserMessage] = useState(null);
  const API_KEY = "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"; // 여기에 API 키를 붙여넣으세요
  const inputInitHeight = 40; // 텍스트 영역의 초기 높이를 설정하세요

  const createChatLi = (message, className) => {
    // 전달된 메시지와 클래스 이름으로 채팅 <li> 엘리먼트를 생성합니다
    return (
      <li key={Math.random()} className={`chat ${className}`}>
        {className === "outgoing" ? <p>{message}</p> : <><span className="material-symbols-outlined">smart_toy</span><p>{message}</p></>}
      </li>
    );
  }

  const generateResponse = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
        })
      });

      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("응답 생성 중 오류 발생:", error);
      throw error;
    }
  }

  const handleChat = async () => {
    const trimmedUserMessage = userMessage.trim();
    if (!trimmedUserMessage) return;
  
    // 사용자의 메시지를 채팅 상자에 추가합니다
    setChatbox((prevChatbox) => [...prevChatbox, createChatLi(trimmedUserMessage, "outgoing")]);
    
    // 입력 텍스트 영역을 지웁니다
    setUserMessage("");

    // 응답을 기다리는 동안 "Thinking..." 메시지를 표시합니다
    setChatbox((prevChatbox) => [...prevChatbox, createChatLi("Thinking...", "incoming")]);
    
    try {
      const response = await generateResponse();
  
      // "Thinking..." 메시지를 제거합니다
      setChatbox((prevChatbox) => prevChatbox.slice(0, -1));
  
      // 실제 응답을 표시합니다
      setChatbox((prevChatbox) => [...prevChatbox, createChatLi(response, "incoming")]);
    } catch (error) {
      // 오류 처리, 예를 들어 채팅에 오류 메시지를 표시합니다
      setChatbox((prevChatbox) => [...prevChatbox, createChatLi("이런! 오류가 발생했습니다. 다시 시도해주세요.", "incoming error")]);
    }
  };

  const handleTextareaInput = (e) => {
     // 내용에 따라 입력 텍스트 영역의 높이를 조절합니다
    e.target.style.height = `${inputInitHeight}px`;
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  const handleTextareaKeyDown = (e) => {
    // Shift 키를 누르지 않고 Enter 키가 눌렸을 때 채팅을 처리합니다
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  }

  const [chatbox, setChatbox] = useState([
    createChatLi("안녕하세요 👋\n오늘은 어떻게 도와드릴까요?", "incoming")
  ]);

  useEffect(() => {
    // 채팅 상자가 업데이트될 때 마다 가장 아래로 스크롤합니다
    const chatboxElement = document.querySelector(".chatbox");
    chatboxElement.scrollTo(0, chatboxElement.scrollHeight);
  }, [chatbox]);

  return (
    <div>
      <button className="chatbot-toggler" onClick={() => document.body.classList.toggle("show-chatbot")}>
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
            placeholder="메시지를 입력하세요..."
            spellCheck={false}
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleTextareaKeyDown}
            onInput={handleTextareaInput}
            style={{ height: `${inputInitHeight}px` }}
            required
          />
          <span id="send-btn" className="material-symbols-rounded" onClick={handleChat}>send</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;