import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';

//npm install axios
import axios from 'axios';
import $ from 'jquery';



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

    
    $(function() { 
        var heart = $('.heart-icon')
            // Add class
        
            heart.hover(function(){
            heart.toggleClass('heart-dots');

            heart.click(function(){
            heart.toggleClass('heart-liked');           heart.toggleClass('heart-beating');  
            });
        });
    });

    const onClickList1 = (e) =>{
        $(e.target.parentElement.parentElement).find(".community-detail-button-list").slideToggle();
    }


    return (
        <div className='row justify-content-md-center' style={{borderRadius:"5px", paddingTop:"20px", height:"105%"}}>
            <div className="col-lg-6 col-sm-6 scrolling" style={{height:"95%", overflow:"scroll", backgroundColor:"white", borderRadius:"5px"}}> 
                <div className="community-detail-button" style={{position:"absolute", width:"37px", padding:"3px", marginRight:"15px", borderRadius:"0px", borderRadius:"0px", right:"10px", top:"20px", zIndex:"1"}}  onClick={onClickList1}>
                    <svg viewBox="0 0 29 7">
                        <circle cx="3.5" cy="3.5" r="3.5"></circle>
                        <circle cx="14.5" cy="3.5" r="3.5"></circle>
                        <circle cx="25.5" cy="3.5" r="3.5"></circle>
                    </svg>
                </div>
                {/**************** 버튼 부분 ******************/}
                <div className="community-detail-button-list" style={{display:"none", backgroundColor:"white", position:"absolute", width:"50px", padding:"3px", marginRight:"15px", borderRadius:"0px", borderRadius:"0px", right:"3px", top:"40px", textAlign:"center", zIndex:"2"}}>
                    <div>삭제</div>
                    <div>수정</div>
                    <div>신고</div>
                </div>


                <div className="blog-single-box upper" style={{height:"100%", padding:"0px", backgroundColor:"white"}}>
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
                        <h2 style={{textAlign:"left"}}>{props.title} "제목 위치임"</h2>
                        
                        
                        {/* 내용 넣는 곳 */}
                        <p style={{textAlign:"left"}}>
                            sadasdasdassadasdasdassadasdasdassadasdasdassadasdasdassadasdasdas
                            sadasdasdassadasdasdas
                            sadasdasdas
                            sadasdasdas
                            sadasdasdas
                            sadasdasdassadasdasdassadasdasdas<br/>
                            <br/><br/>

                            sadasdasdassadasdasdassadasdasdassadasdasdas

                            sadasdasdas
                            sadasdasdas<br/>
                            sadasdasdas
                            sadasdasdassadasdasdassadasdasdassadasdasdas<br/>
                            sadasdasdassadasdasdassadasdasdassadasdasdas<br/>
                            sadasdasdassadasdasdassadasdasdassadasdasdas<br/>
                            sadasdasdassadasdasdassadasdasdassadasdasdas<br/>
                        </p>

                        {/** 해시태그 위치 **/}
                        <div className='community-board-hashtag' style={{border:"1px solid red", transform:"translateX(-20px)", width:"100%"}}>
                            <span>#예시용</span>
                            <span>#예시용</span>
                            <span>#예시용</span>
                            <span>#예시용</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-sm-6" style={{height:"95%"}}>
                <div className="blog-single-box upper" style={{height:"100%", backgroundColor:"#F6F4EC"}}>
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
                        <input type="text" style={{width:"80%", height:"45px", borderRadius:"5px", border:"none", boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.1)"}}></input>
                        <button type="submit" style={{position:"absolute", right:"140px", borderRadius:"5px", backgroundColor:"#F6F6F6", border:"none", boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.2)"}}>submit</button>
                        <div className="blog-button-container" style={{width: "90px"}}>
                            <div className='blog-button-item'>
                                <div className="heart-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                                    <path d="M150 57.3C100.2-17.4.7 26.3.7 107.6c0 55 49.7 94.2 87.1 123.8 38.8 30.7 49.8 37.3 62.2 49.8 12.4-12.4 22.8-19.7 62.2-49.8 37.9-29 87.1-69.4 87.1-124.4 0-80.7-99.5-124.4-149.3-49.7z" fill-rule="evenodd" clip-rule="evenodd"/>
                                    </svg>
                                    <span className="i1"></span>
                                    <span className="i2"></span>
                                    <span className="i3"></span>
                                    <span className="i4"></span>
                                    <span className="i5"></span>
                                    <span className="i6"></span>
                                    <span className="i7"></span>
                                    <span className="i8"></span>
                                    <span className="i1"></span>
                                    <span className="i2"></span>
                                    <span className="i3"></span>
                                    <span className="i4"></span>
                                    <span className="i5"></span>
                                    <span className="i6"></span>
                                    <span className="i7"></span>
                                    <span className="i8"></span>
                                    <span className="i1"></span>
                                    <span className="i2"></span>
                                    <span className="i3"></span>
                                    <span className="i4"></span>
                                    <span className="i5"></span>
                                    <span className="i6"></span>
                                    <span className="i7"></span>
                                    <span className="i8"></span>
                                    </div>
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
  




