import React, { useEffect, useLayoutEffect, useState } from 'react';
import './GameRoomContainer.css';

function GameRoomContainer() {
  return (
    <div className="gameroom-container">
      <div className="gameroom-icon">
      </div>
      <div className="gameroom-description">
        <div>게임 작성자</div>
        <div>방 제목</div>
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

