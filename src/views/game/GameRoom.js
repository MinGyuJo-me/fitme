import {Link} from 'react-router-dom';

import React, { useEffect, useLayoutEffect, useState } from 'react';

import Breadcumb from '../component/Breadcumb/Breadcumb';
import Loader from '../component/loader/Loader';
import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import $ from 'jquery';


import GameRoomContainer from './component/GameRoomContainer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import GameRoomSideProfile from './component/GameRoomSideProfile';

import styled from "styled-components";
import GameRoomMakeModal from './component/GameRoomMakeModal';
import './GameRoom.css';

const StyledHeader = styled.div`
  background: black;
`;

function GameRoom() {




  useEffect(()=>{
      $('body').addClass('loaded');
  });

  return (
    <div style={{position:"absolute", width:"100%"} }>
      <div style={{margin:"auto", marginTop:"20px", width:"1500px"}}>
          <div className='col-lg-12 col-md-12 game-match-container'>
          {/******** 카메라 설정 영역 ***********/}
          <select className="camera-select">
            <option value="">1번</option>
            <option value="">2번</option>
            <option value="">3번</option>
          </select>
          {/***********************************/}
            
            <div className='webRTC-layout'>
              

            {/********************* 토글 메뉴 (음소거, 나가기 등등) **********************/}
            <div className='webRTC-button-container'>
                <div className="webRTC-button">
                  {/********************* (소리 음소거 버튼) **********************/}
                  <img src={require("./images/gamematch_sound.png")}/>
                </div>
                <div className="webRTC-button">
                  {/********************* (보이스 음소거 버튼) **********************/}
                  <img src={require("./images/gamematch_mic.png")}/>
                </div>
                <div className="webRTC-button">
                  {/********************* (비디오 그기 버튼) **********************/}
                  <img src={require("./images/gamematch_video.png")}/>
                </div>
                <div className="webRTC-button">
                  {/********************* (나가기 버튼) **********************/}
                  <img src={require("./images/gamematch_quit.png")}/>
                </div>
            </div>
            {/**************************************************************/}



              <div className='webRTC-container'>
                <div className='webRTC-item wi1'>
                  {/******** 화상 영상 넣는 부분(본인)  ***********/}
                  <video muted autoPlay loop>
                    <source src="/videos/main_title.mp4" type="video/mp4"/>
                  </video>
                  {/*********************************************/}
                  <div className='webRTC-popup'>
                    <div className='div'>
                      {/******** 게임 통계 버튼 ***********/}
                      1번
                    </div>
                    <div className='div'>
                      {/******** 게임 통계 버튼 ***********/}
                      2번
                    </div>
                    <div className='div'>
                      {/******** 게임 통계 버튼 ***********/}
                      3번
                    </div>
                  </div>
                </div>


                <div className='webRTC-item wi2'>
                  {/******** 화상 영상 넣는 부분(상대방)  ***********/}
                  <video muted autoPlay loop>
                    <source src="/videos/main_title.mp4" type="video/mp4"/>
                  </video>
                  {/*********************************************/}
                  <div className='webRTC-popup'>
                    <div className='div'>
                        {/******** 게임 통계 버튼 ***********/}
                        1번
                      </div>
                      <div className='div'>
                        {/******** 게임 통계 버튼 ***********/}
                        2번
                      </div>
                      <div className='div'>
                        {/******** 게임 통계 버튼 ***********/}
                        3번
                      </div>
                    </div>


                    <div className='webRTC-footer-bar'>
                      {/******** 상대방 영상 음소거, 카메라 끄기용 버튼 ***********/}
                      <button className='mute'>
                      <img src={require("./images/gamematch_video.png")}/>
                        {/******** 상대방 영상 음소거 버튼 ***********/}
                      </button>
                      <button  className='camera-turn-off'>
                        <img src={require("./images/gamematch_mic.png")}/>
                        {/******** 상대방 영상 끄기/켜기 버튼 ***********/}
                      </button>
                    </div>
                  </div>

                  
              </div>
              



            </div>     
          </div>
      </div>
    </div>
  );
}

export default GameRoom;

