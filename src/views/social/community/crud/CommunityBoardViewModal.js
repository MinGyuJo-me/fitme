import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';

//npm install axios
import axios from 'axios';



import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CommunityBoardViewModal.css';

function CommunityBoardViewModal(props) {

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
        <div className='row justify-content-md-center' style={{border:"1px solid red", width:"1800px"}}>
            <div className="col-lg-5 col-sm-5">
                <div className="blog-single-box upper" style={{backgroundColor:"#F6F4EC"}}>
                    <div className="blog-left" style={{padding:"60px 0px 40px 20px"}}>
                        <div className="blog-icon bi1">
                        </div>
                        <div className='blog-description'>
                            <a href="#"><i className="fas fa-address-card"></i> {props.writer}</a>
                            <a href="#"><i className="fas fa-map-marker"></i> {props.position}</a>
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
                        <p>
                            {props.comment}
                        </p>
                        <div className="blog-button">
                            <a href="#">read more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 col-sm-5" >
                <div className="blog-single-box upper" style={{height:"97%", backgroundColor:"#F6F4EC"}}>
                    <div className="blog-content" style={{height:"90%"}}>
                        <div className='blog-comment'>
                            <table className="blog-comment-table">
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                                <tr>
                                    <td>조동훈</td>
                                    <td>작성한 댓글 내용</td>
                                    <td>2016.03.05</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-button">
                            <input type="text" style={{width:"70%", height:"45px", borderRadius:"5px", border:"none", boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.1)"}}></input>
                            <button type="submit" style={{position:"absolute", right:"210px", borderRadius:"5px", backgroundColor:"#F6F6F6", border:"none", boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.2)"}}>submit</button>
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
        </div>
    );
  }
  
  export default CommunityBoardViewModal;
  




