import {Link} from 'react-router-dom';

import React, { useEffect, useLayoutEffect, useState } from 'react';

import Breadcumb from '../component/Breadcumb/Breadcumb';
import Loader from '../component/loader/Loader';
import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import $ from 'jquery';
import Wrapper from '../component/Wrapper/Wrapper';

import GameRoomSearch from './component/GameRoomSearch';
import './Game.css';


import GameRoomContainer from './component/GameRoomContainer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Game() {
    const options = {
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      margin:10,
      loop: true,
      items: 1,
      dots:false,
      autoplay:true,
      autoplayTimeout: 4500,
      smartSpeed: 4000,
      mouseDrag: false
    };




    useEffect(()=>{
        $('body').addClass('loaded');
    });

  return (
    <div>
        {/*헤더 위*/}
        <HeaderTop/>
        {/*헤더 메인 메뉴*/}
        <Header/>
        {/* 로딩 애니메이션*/}
        <Loader/>

        <Breadcumb title="game" content="game" subContent="room"/>

        <div className="blog-area style-two game-background-style">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8 game-notice-layout" style={{marginRight:"50px"}}>
                    
                      <div className='notice-box'>
                        <OwlCarousel {...options} className='notice-box-item'>
                          <div>공지사항: 내용</div>
                          <div>게임 기록 알림: 내용</div>
                        </OwlCarousel>
                      </div>
                    
                  </div>

                  <div className="col-lg-8 col-md-8 game-layout" style={{marginRight:"50px"}}>
                    <div className="row">
                      <div className='col-lg-11 col-md-11'>
                        <GameRoomSearch/>
                      </div>

                      <div className='col-lg-11 col-md-11 game-room-layout'>
                        <GameRoomContainer/>
                        <GameRoomContainer/>
                        <GameRoomContainer/>
                        <GameRoomContainer/>
                      </div>
                    </div>
                  </div>



                  <div className="col-lg-3 col-md-3 game-profile-layout">
                    <div className="row">
                      <div className='col-lg-10 col-md-10 game-profile'>
                      </div>
                      <div className='col-lg-10 col-md-10 game-profile-name'>
                          프로필 기록 (승패)
                      </div>

                      <div className='col-lg-10 col-md-10 game-play-button-layout'>
                          <button className="game-play-button">일반 게임</button>
                          <button className="game-play-button">랭킹 게임</button>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-box">
                  <div className="footer-logo">
                    <img src="assets/images/logo-2.png" alt=""/>
                  </div>
                  <div className="footer-content">
                    <div className="footer-title">
                      <p>There are many variation of passa Morem Ipsum available, but the in majority have suffered.</p>
                      <h5>Follow Us:</h5>
                    </div>
                    <div className="footer-icon">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>	
                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>	
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-box">
                  <div className="footer-content">
                    <div className="footer-title">
                      <h2>Company Info:</h2>
                    </div>
                    <div className="footer-ico">
                      <ul>
                        <li><a href="#"><i className="fas fa-check"></i><span>Our Projects</span></a></li>
                        <li><a href="#"><i className="fas fa-check"></i><span>About Us</span></a></li>
                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                        <li><a href="#"><i className="fas fa-check"></i><span>Our Services</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-box">
                  <div className="footer-content">
                    <div className="footer-title">
                      <h2>Company Info:</h2>
                    </div>
                    <div className="footer-icons">
                      <i className="fa fa-home"></i>
                      <p><b>Address</b> <br/> 10 South Building, Dhaka</p>
                    </div>
                    <div className="footer-icons">
                      <i className="fa fa-phone"></i>
                      <p><b>Telephone</b> <br/> (922) 3354 2252</p>
                    </div>
                    <div className="footer-icons">
                      <i className="fa fa-globe"></i>
                      <p><b>Email:</b> <br/> example@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-box">
                  <div className="footer-content">
                    <div className="footer-title">
                      <h2>Company Info:</h2>
                      <p>There are many variation of passa Morem Ipsum available.</p>
                    </div>
                    <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form_box">
                            <input type="text" name="youe email address" placeholder="youe email address"/>
                          </div>
                        </div>
                        <div className="form-button">
                          <button type="submit">sign up</button>
                        </div>
                      </div>
                    </form>
                    <div id="status"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row footer-bottom">
              <div className="col-lg-6 col-md-6">
                <div className="copy-left-box">
                  <div className="copy-left-title">
                    <h3>Copyright © Agrofarm all rights reserved.</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="copy-right-box">
                  <div className="copy-right-title">
                    <ul>
                      <li><a href="#"><span>Terms & Condition</span></a></li>
                      <li><a href="#"><span>Privacy Policy</span></a></li>
                      <li><a href="#"><span>Contact Us</span></a></li>
                    </ul>															
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Game;

