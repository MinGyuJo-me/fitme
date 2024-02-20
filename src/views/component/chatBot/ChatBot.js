import React from 'react';
import './Chatbot.css';
import 'material-symbols';

const Chatbot = () => {
  return (
    <div>
      <button className="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <h2>FitMe</h2>
          <span className="close-btn material-symbols-outlined">close</span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>안녕하세요 👋<br />오늘은 어떻게 도와드릴까요?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea placeholder="메시지를 입력하세요..." spellCheck={false} required />
          <span id="send-btn" className="material-symbols-rounded">send</span>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;