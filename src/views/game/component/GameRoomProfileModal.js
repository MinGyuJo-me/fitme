// React 및 useEffect 가져오기
import React, { useEffect, useState } from "react";
import './GameRoomProfileModal.css';
import $ from 'jquery';
import { display } from "@mui/system";

import axios from 'axios';
import AI_Image_Loading from "./AI_Image_Loading";


var ipAddress = '//';

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

  //input에 입력된 텍스트를 저장할 state 추가
  const [inputText, setInputText] = useState('');
  //이미지 URL을 저장할 state 추가
  const [imageUrl, setImageUrl] = useState('');
  // 로딩 상태를 저장할 state 추가
  const [loading, setLoading] = useState(false);  


  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    disableScroll();
    // modal 닫히면 다시 스크롤 가능하도록 함
    return () => enableScroll();
  }, []);


  function closeModal() {
    props.onClose();
  }

  const editCancel = (e) =>{
    $(e.target.parentElement.parentElement.parentElement).find(".ai-image-create").fadeToggle();
  }

  const editPopup = (e) =>{
    $(e.target.parentElement.parentElement).find(".ai-image-create").fadeIn();
  }


  const [pacManLoadingisOpen, setPacManLoadingisOpen] = useState(false);


  const createImage = async (e) => {
    try{
      $(e.target.parentElement.parentElement.parentElement).find(".ai-image-create").fadeToggle();
      setLoading(true); //로딩 시작

      {/***** 로딩 화면 추가*******/}
      setPacManLoadingisOpen(true);

      //POST 요청을 보내 이미지를 생성
      const res = await axios.post(`http://${ipAddress}:5000/chatImage`, { message: inputText });
        //응답에서 이미지 URL을 가져와 state에 저장
        setImageUrl(res.data.image_url);
    } catch(err) {
      console.error(err);
    } finally {
      setLoading(false); //로딩 종료
      {/***** 로딩 화면 추가*******/}
      {/*setPacManLoadingisOpen(false);*/}
      
    }
  };

  


  return (
    <div className="Modal" onMouseDown={closeModal}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{width: '512px', height: '512px', overflow:"hidden", backgroundColor:"rgb(24, 24, 24)", boxShadow:"none"}}>
        <div className="ai-image-create" style={{display:"none"}}>
          <input className="ai-image-input" placeholder="생성할 이미지를 입력하세요"
          onChange={(e) => setInputText(e.target.value)}  // 입력된 텍스트를 state에 저장
          ></input>
          <div className="game-profile-modal-edit-button-ai-layout">
            <button className="game-profile-modal-edit-button-ai" onClick={createImage}>Create</button>
            <button className="game-profile-modal-edit-button-ai" onClick={editCancel}>Cancel</button>
          </div>
        </div>

        {/* 로딩 모달 */}
        {loading && <div className="loading-modal">이미지 생성 중...</div>}
        <div className="game-profile-edit-image-layout">
          {/*게임 프로필 이미지 생성 부분 */}
          {imageUrl && <img src={imageUrl} alt=""/>}
        </div>

        <div className="game-profile-edit-button-layout">
          {/* <label htmlFor="file" className='game-profile-modal-edit-button label-line-height'>Images</label> */}
          <input type="file" id="file" style={{ display: "none" }}/>
          {/*게임 프로필 이미지 사용자가 가져오는 부분 */}
          <button className="game-profile-modal-edit-button" onClick={editPopup}>Ai Image</button>
          {/*게임 프로필 AI가 생성하는 버튼 */}
        </div>

        <button onMouseDown={closeModal} style={{position:"absolute", width:"30px" ,right:"5px", top:"5px", border:"1px solid gray", backgroundColor:"white", borderRadius:"5px", zIndex:"2"}}>
          ✖
        </button>

        {pacManLoadingisOpen && (
        <AI_Image_Loading>
        </AI_Image_Loading>
        )}


      </div>
      
    </div>
  );
}

export default GameRoomProfileModal;