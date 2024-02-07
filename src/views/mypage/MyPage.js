import {Link} from 'react-router-dom';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import './MyPage.css';

function MyPage() {
  return (
    <div>
        <HeaderTop/>
        <Header/>

        {/*
        <div className="loader-wrapper">
            <div className="loader"></div>
            <div className="loder-section left-section"></div>
            <div className="loder-section right-section"></div>
        </div>
        */}

        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>Mypage</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html">mypage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


                <div className="company-info-section">
            <div className="container">
                <div className="sideber-box sb-rjm1" style={{ height: 500, display: 'flex', gap: 20, alignSelf: 'flex-start', position: 'relative' }}>
                    <div className='main-titles' style={{ marginTop: '-30px' }}>
                        <h3>회원 정보</h3>
                    </div>
                    <div className='sideber-item'>
                        <img src={require('../../assets/images/testi1.jpg')} alt="프로필 사진" style={{ width: '50%', height: '70%' }} />
                        <div className="form_row" style={{marginBottom:'82px'}}>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">닉네임:</span>
                                    <span className="value" id="username"  /* 폰트 바꾸는 방법 style={{fontFamily:"Lobster"}}*/>JohnDoe123</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">이름:</span>
                                    <span className="value" id="name">John Doe</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">주소:</span>
                                    <span className="value" id="address">123 Main St</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">포인트:</span>
                                    <span className="value" id="point">500</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">성별:</span>
                                    <span className="value" id="gender">남성</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">취미:</span>
                                    <span className="value" id="interest">운동</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sideber-item'>
                        <img id='ibox' src={require('../../assets/images/testi2.jpg')} alt="게임 프로필 사진" style={{ width: '50%', height: '70%' }} />
                        <div className='main-titles' style={{ marginTop: '-30px' ,top: '50%', left: '50%', marginTop: '-265px', marginLeft: '-10px'}}>
                            <h3>게임 기록</h3>
                        </div>
                        <div className="form_row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">닉네임:</span>
                                    <span className="value" id="username">JohnDoe123</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">평균 등수:</span>
                                    <span className="value" id="rank">3.5</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">승률:</span>
                                    <span className="value" id="winrate">50%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">승:</span>
                                    <span className="value" id="win">30</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">패:</span>
                                    <span className="value" id="lose">30</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">스쿼트:</span>
                                    <span className="value" id="squat">78%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">윗몸:</span>
                                    <span className="value" id="sit-up">50%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">팔굽:</span>
                                    <span className="value" id="push-ups">44%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <div className="container">
	<div className="title">
		<h1>섭취 칼로리</h1>
	</div>
	<div className="company-info-section">
		<div className="sideber-box">
                <div className="col-lg-calorie" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                </div>
            </div>
        </div>
    </div>
  

    <div className="container">
        <div className="title">
            <h1>인바디</h1>
        </div>
        <div className="company-info-section">
            <div className="sideber-box">
                <div className="col-lg-inbody" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div>건강</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>건강</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>건강</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                </div>               
            </div>
        </div>
    </div>


    <div className="container">
        <div className="title">
            <h1>운동 진척도</h1>
        </div>
        <div className="company-info-section">
            <div className="sideber-box">
                <div className="col-lg-workout-progress" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div>운동</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>운동</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>운동</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                </div> 
            </div>
        </div>
    </div>


    <div className="container">
        <div className="title">
            <h1>식단 통계</h1>
        </div>
        <div className="company-info-section">
            <div className="sideber-box">
                <div className="col-lg-meal-statistics" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div>음식</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>음식</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>음식</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                </div>
            </div>
        </div>
    </div>


    <div className="container">
        <div className="title">
            <h1>운동 통계</h1>
        </div>
        <div className="company-info-section">
            <div className="sideber-box">
                <div className="col-lg-workout-statistics" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                        <div>운동부위</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>운동부위</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                        <div>운동부위</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란</div>
                </div>
            </div>
        </div>
    </div>

    <div id="status-workout-statistics"></div>

    <div className="container">       
        <div className="title">
            <h1>저장한 게시글</h1>
        </div> 

        <div className="sideber-box">
            {/*스크랩한 게시물*/}
            <MypageBulletinBoardLayout/>       
        </div>

    </div>

    <div className="container">
        <div className="title">
            <h1>저장한 유튜브</h1>
        </div>

        <div className="sideber-box">
          {/*마이페이지 유튜브*/}
          <MypageYoutubeLayout/>
        </div>

    </div>
    </div>
  );
}
/*게시물 스크랩 부문 */
function MypageBulletinBoardLayout(){
    return(
        <div className="mypage-bulletinBoard-layout">
          <MypageBulletinBoardContainer/>
          <MypageBulletinBoardContainer/>
          <MypageBulletinBoardContainer/>
          <MypageBulletinBoardContainer/>
          <MypageBulletinBoardContainer/>
          <MypageBulletinBoardContainer/>
          <button 
          className='detail-button' 
          style={{marginTop: '-1160px', left:'880px', border:'none' , background:'none' }}>
            <FontAwesomeIcon icon={faEllipsisV} />
          </button>
        </div>
    );
  }
  
  
  {/* 저장된 게시판에 들어갈 컨테이너 */}
  function MypageBulletinBoardContainer(){
    return(
      <div className='mypage-bulletinBoard-container'>
        {/*이미지 부분*/}
        <div className="mypage-bulletinBoard-item mbi1"></div>
        <div className="mypage-bulletinBoard-item mbi2">제목 부분</div>
        <div className="mypage-bulletinBoard-item mbi3">내용 부분</div>
      </div>
    );
  }
  /*게시물 스크랩 부문 끝*/
  /*유튜브 부문*/
  function MypageYoutubeLayout(){
    return(
        <div className="mypage-youtubeBoard-layout">
            <MypageYoutubeContainer/>
            <MypageYoutubeContainer/>
            <MypageYoutubeContainer/>
            <MypageYoutubeContainer/>
            <MypageYoutubeContainer/>
            <MypageYoutubeContainer/>
            <button className='detail-button' 
            style={{ marginTop: '-800px', left:'880px', border:'none' , background:'none'}}>
                <FontAwesomeIcon icon={faEllipsisV} />
            </button>
            
          </div>
    );
  }
  
  
  
  {/* 저장된 유튜브 컨테이너 */}
  function MypageYoutubeContainer(){
    return(
      <div className='mypage-youtube-container'>
        {/* 저장된 유튜브 링크들*/}
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tBTNMo77h2Q"></iframe>
      </div>
    );
  }
/*유튜브 부문 끝*/

export default MyPage;

