import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';
//npm install axios
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function CommunityBoard(props) {

    const options = {
        margin:10,
        loop: true,
        items: 1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };

    const onModal = () => {
        props.setIsOpen(true);
    }

    return (
        <div className="col-lg-12 col-sm-12">
            <div className="blog-single-box upper">
                <div className="blog-left" style={{padding:"60px 0px 40px 20px"}}>
                    <div className="blog-icon bi1"  style={{backgroundImage: `url(${props.image})`}}>
                    </div>
                    <div className='blog-description'>
                        <a href="#"><i className="fas fa-address-card"></i> {props.name}</a>
                        <a href="#"><i className="fas fa-map-marker"></i> {props.address}</a>
                        <span><i className="far fa-calendar-alt"></i> {props.postDate}</span>
                    </div>
                </div>
                <div>
                    <OwlCarousel {...options}>
                        <div className="blog-thumb">
                            <img src={require('../../../../assets/images/3.jpg')} alt="" style={{height:600}}/>
                            <div className="blog-btn">
                                <div>1/2</div>
                            </div>
                        </div>
                        <div className="blog-thumb">
                            <img src={require('../../../../assets/images/2.jpg')} alt="" style={{height:600}}/>
                            <div className="blog-btn">
                                <div>2/2</div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                
                <div className="blog-content">
                    <div style={{display:"flex", height:"35px"}}>
                        <button className='blog-content-button' style={{width:"35px", marginRight:"10px"}}>▼</button> <h2><a href="blog-details.html">{props.title}</a></h2>
                    </div>
                
                    
                    <p>{props.comment}
                    </p>
                    <div className="blog-button">
                        <a onClick={onModal}>read more</a>
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
