import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';
//npm install axios
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CommunityBoardWriteModal.css';

function CommunityBoardWriteModal() {

    const options = {
        margin:10,
        loop: true,
        items: 1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };


    return (
        <div className="col-lg-12 col-sm-12">
            <div className="blog-single-box upper" style={{backgroundColor:"#F6F4EC"}}>
                
                <div style={{position:"relative"}}>
                    <button className="blog-image-button">Images</button>
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
                
                <div className="blog-content" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <div>
                        <input type="text" style={{width:"100%", textAlign:"center"}} placeholder='제목을 입력하세요'></input>
                    </div>
                    <div>
                        <textarea style={{width:"100%", height:"200px"}}></textarea>
                    </div>
                    <div style={{display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
                        <button className="community-write-button">Back</button>
                        <button className="community-write-button">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunityBoardWriteModal;
  




