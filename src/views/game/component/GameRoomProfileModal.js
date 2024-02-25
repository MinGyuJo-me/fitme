// React 및 useEffect 가져오기
import React, { useEffect } from "react";
import './GameRoomProfileModal.css';
import $ from 'jquery';

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
function GameRoomProfileModal(props) {
  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    disableScroll();
    // modal 닫히면 다시 스크롤 가능하도록 함
    return () => enableScroll();
  }, []);



  const onClickList = (e) =>{
    $(e.target.parentElement.parentElement).find(".community-detail-button-list").slideToggle();
  }

  function closeModal() {
    props.onClose();
  }

  return (
    <div className="Modal" onMouseDown={closeModal}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{width: '400px', height: '440px', overflow:"hidden", backgroundColor:"rgb(24, 24, 24)", boxShadow:"none"}}>
        <div className="ai-image-create">
          <input className="ai-image-input" placeholder="생성할 이미지를 입력하세요"></input>
          <div className="game-profile-modal-edit-button-ai-layout">
            <button className="game-profile-modal-edit-button-ai">Create</button>
            <button className="game-profile-modal-edit-button-ai">Cancel</button>
          </div>
          
        </div>
        <div className="game-profile-edit-image-layout">
        </div>

        <div className="game-profile-edit-button-layout">
          <label htmlFor="file" className='game-profile-modal-edit-button label-line-height'>Images</label>
          <input type="file" id="file" style={{ display: "none" }}/>
          <button className="game-profile-modal-edit-button" onClick={onClickList}>Ai Image</button>

        </div>

        <button onMouseDown={closeModal} style={{position:"absolute", width:"30px" ,right:"5px", top:"5px", border:"1px solid gray", backgroundColor:"white", borderRadius:"5px"}}>
          ✖
        </button>
      </div>
      
    </div>
  );
}

export default GameRoomProfileModal;