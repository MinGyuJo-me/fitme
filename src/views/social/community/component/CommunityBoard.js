import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';
//npm install axios
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function CommunityBoard() {
    return (
        <div class="col-lg-12 col-sm-12">
        <div class="blog-single-box upper">
            <div class="blog-left" style={{padding:"60px 0px 40px 0px"}}>
                <div className="blog-icon bi1">
                </div>
                <div className='blog-description'>
                    <a href="#"><i className="fas fa-address-card"></i> Jo-dong-hun</a>
                    <a href="#"><i className="fa fa-home"></i> 서울시 강남구 서초동 서초대로</a>
                    <span><i className="far fa-calendar-alt"></i> January 27, 2023</span>
                </div>
            </div>
            <div class="blog-thumb">
                <img src={require('../../../../assets/images/3.jpg')} alt="" style={{height:600}}/>
                <div class="blog-btn">
                    <div>1/5</div>
                </div>
            </div>
            <div class="blog-content">
                <h2><button className='blog-content-button'>▼</button><a href="blog-details.html">이번에 새로 산 차.</a></h2>
                
                <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat
                    dsfdsafadsfadsfadsfdasdsfdsafadsfads
                </p>
                <div class="blog-button">
                    <a href="#">read more</a>
                    <div className="blog-button-container">
                        <div className='blog-button-item'>
                            <img src={require('../images/chat_bubble.png')}/>
                        </div>
                        <div className='blog-button-item'>
                            <img src={require('../images/heart.png')}/>
                        </div>
                        <div className='blog-button-item'>
                            <img src={require('../images/scrap.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default CommunityBoard;
  




