import React, { useEffect, useLayoutEffect, useState } from 'react';
import './GameRoomContainer.css';

function GameRoomContainer() {
  return (
    <div className="gameroom-container">
      <div className='gameroom-people-count'>
          1/5
      </div>
      <div className="gameroom-icon">
      </div>

      <div className="gameroom-description">
        <div style={{fontSize:"20px", fontWeight:"600"}}>같이 게임할 사람 구해요<span>2023.04.12 14:23</span></div>
        <div>플레이 시간: 13 minutes</div>
        <div>방 생성자: 조동훈</div>
      </div>

      <div className='gameroom-button-layout'>
        <div className='gameroom-button'>
        <img src={require('../images/enter.png')}/>
        </div>
        <div className='gameroom-button'>
          <img src={require('../images/report.png')}/>
        </div>
        <div className='gameroom-button'>
          <img src={require('../images/detail.png')}/>
        </div>
      </div>
    </div>
  );
}

export default GameRoomContainer;

