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
import GameRoomMakeModal_ from './component/GameRoomMakeModal_';
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
            {/**************************************************************/}
            <div className='webRTC-layout'>

            <div className='webRTC-button-container'>
                <div className="webRTC-button">
                  <img src={require("./images/gamematchchat.png")}/>
                </div>
                <div className="webRTC-button">
                  <img src={require("./images/gamematch_sound.png")}/>
                </div>
                <div className="webRTC-button">
                  <img src={require("./images/gamematch_mic.png")}/>
                </div>
                <div className="webRTC-button">
                  <img src={require("./images/gamematch_video.png")}/>
                </div>
                <div className="webRTC-button">
                  <img src={require("./images/gamematch_quit.png")}/>
                </div>
              </div>



              <div className='webRTC-container'>
                <div className='webRTC-item wi1'>
                  <div className='webRTC-popup'>
                    <div className='div'>
                      1
                    </div>
                    <div className='div'>
                      2
                    </div>
                    <div className='div'>
                      3
                    </div>
                  </div>
                </div>
                <div className='webRTC-item wi2'>
                <div className='webRTC-popup'>
                    <div className='div'>
                      1
                    </div>
                    <div className='div'>
                      2
                    </div>
                    <div className='div'>
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className='webRTC-container'>
                <div className='webRTC-item wi3'>
                <div className='webRTC-popup'>
                    <div className='div'>
                      1
                    </div>
                    <div className='div'>
                      2
                    </div>
                    <div className='div'>
                      3
                    </div>
                  </div>
                </div>
                <div className='webRTC-item wi4'>
                <div className='webRTC-popup'>
                    <div className='div'>
                      1
                    </div>
                    <div className='div'>
                      2
                    </div>
                    <div className='div'>
                      3
                    </div>
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

