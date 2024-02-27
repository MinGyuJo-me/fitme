// React 및 useEffect 가져오기
import React, { useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './GameRoomMakeModal.css';

// disableScroll 및 enableScroll 함수 정의
const disableScroll = () => {
  // 스크롤 비활성화를 위한 구현
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  // 스크롤 활성화를 위한 구현
  document.body.style.overflow = 'auto';
};

// Modal 컴포넌트
function GameRoomMakeModal(props) {
  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    disableScroll();
    // modal 닫히면 다시 스크롤 가능하도록 함
    return () => enableScroll();
  }, []);

  function closeModal() {
    props.onClose();
  }

  return (
    <div className="Modal" onMouseDown={closeModal}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{width: '700px',
        height: '450px', overflow:"hidden", backgroundColor:"rgba(0,0,0,0)", boxShadow:"none"}}>
        <div className='game-room-modal-layout'>
                <div className="col-lg-12 col-sm-12 game-modal-layout">
                <div className="game-room-modal-container grmc1">

                    <div className='game-room-modal-title'>
                    Game Mode
                    </div>

                    <select className="game-room-modal-select">
                        <option value="">랭킹</option>
                        <option value="">친선</option>
                    </select>

                    <div className='game-room-modal-title'>
                    Peoples
                    </div>
                    <select className="game-room-modal-select">
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>

                <div className="game-room-modal-container grmc2">
                    <OwlCarousel items={4} nav={false} dots={false}>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci1'>
                    </div>
                    <div className='game-mode-card-title'>
                        스쿼트
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci2'>
                    </div>
                    <div className='game-mode-card-title'>
                        윗몸 운동
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci3'>
                    </div>
                    <div className='game-mode-card-title'>
                        팔굽혀 펴기
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci4'>
                    </div>
                    <div className='game-mode-card-title'>
                        랜덤 게임
                    </div>
                    </div>
                    </OwlCarousel>
                </div>

                <div className="game-room-modal-container grmc3">
                    <button className='game-room-modal-button'>게임 생성</button>
                    <button className='game-room-modal-button' onMouseDown={closeModal}>취소</button>
                </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default GameRoomMakeModal;