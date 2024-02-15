import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import './MyPage.css';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import { Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement, 
    Tooltip, 
    Legend } from 'chart.js';
import { Doughnut,Bar,Line } from 'react-chartjs-2';
  
ChartJS.register(CategoryScale,CategoryScale,LinearScale,BarElement,PointElement,LineElement,ArcElement,Title, Tooltip, Legend);



var ipAddress = '192.168.0.15';

async function imageData(code){
    return await new Promise((resolve,reject)=>{
        try{
            axios.get(`http://192.168.0.15:5050/image/${code}`)
            .then((response)=>{
                // console.log(response.data);
                resolve("data:image/png;base64,"+response.data['image']);
            })
        }
        catch(err){reject(err)};
    },2000);
}

function MyPage() {
    const [accountData, setAccount ] = useState([]);
    const [accountNo, setAccountNo] = useState();
    const [myCookie, setMyCookie] = useState();

    const [mark, setMark] = useState([]);

    const [data1_, setData1] = useState();
    const [data2_, setData2] = useState();
    const [labels1_, setLabels1] = useState();
    const [labels2_, setLabels2] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        function getCookie(name) { //로그인 여부 확인
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
          }
          return null;
        }
        
        const myCookieValue = getCookie('Authorization');
        setMyCookie(myCookieValue);
        console.log('myCookieValue',myCookieValue);
        if(myCookieValue == null){ //로그인 확인
            navigate('/signin');
        }
    
        
        axios.get('/api/v1/mypages/account', {
            headers: {
                'Authorization' : `${myCookieValue}`,
                'Content-Type' : 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            var proflieData = response.data;
            console.log('proflieData',proflieData);
            setAccountNo(proflieData.accountNo);
            if(proflieData.image!=null){
                imageData(proflieData.image).then((test)=>{
                    proflieData.image = test;
                    setAccount(proflieData);
                })
            }else{
                imageData('1').then((test)=>{
                    proflieData.image = test;
                    setAccount(proflieData);
                })
            }
            if(proflieData.game_image!=null){
                imageData(proflieData.game_image).then((test)=>{
                    proflieData.image = test;
                    setAccount(proflieData);
                })
            }else{
                imageData('1').then((test)=>{
                    proflieData.game_image = test;
                    setAccount(proflieData);
                })
            }
        })
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        console.log('accountNo',accountNo);
        if(accountNo != null){
            axios.get(`http://${ipAddress}:5000/account/${accountNo}?hobby=diet`)
                .then(response =>{
                //날짜 일정 추가 창
                console.log('diet',response.data);
                setMark(response.data['diet']);
                return response.data;
            })
            axios.get(`/api/v1/mypages/workAccuracy/${accountNo}`, {
                headers: {
                    'Authorization' : `${myCookie}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log('workAccuracy',response.data);
            })
            .catch(error => console.log(error));
            axios.get(`/api/v1/mypages/workBigThree/${accountNo}`, {
                headers: {
                    'Authorization' : `${myCookie}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log('workBigThree',response.data);
            })
            .catch(error => console.log(error));
            axios.get(`/api/v1/chat/list/${accountNo}`,{
                headers: {
                    'Authorization' : `${myCookie}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log('chat/list',response.data);
            })
            .catch(error => console.log('/chat/list',error));
            
            const date = new Date() 
            // console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`);
        }
    },[accountNo]);
    
    //차트
    const data1 = {
        labels:labels1_,
        datasets: [
            {
              fill: true,
              label: '하루 영양소 섭취량',
              data: data1_,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                fill: true,
                label: 'Dataset 2',
                data: [600,500,400,300,200,100],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
          ],
        };
    const data2 = {
        labels:labels2_,
        datasets: [
        {
            label: '섭취 시간',
            data: data2_,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        // {
        //   label: 'Dataset 2',
        //   data: [600,500,400,300,200,100],
        //   borderColor: 'rgb(53, 162, 235)',
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
        ],
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
            },
            title: {
            display: true,
            text: '',
            },
        },
    };



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
                        <img id='ibox' src={accountData.image} /*src={require('../../../assets/images/blog-0.jpg')}*/ alt="프로필 사진" style={{ width: '50%', height: '70%' }} />
                        <div className="form_row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">닉네임:</span>
                                    <span className="value" id="username"  style={{fontFamily:"Lobster"}}>JohnDoe123</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">이름:</span>
                                    <span className="value" id="name">{accountData.name}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">주소:</span>
                                    <span className="value" id="address">{accountData.address}</span>
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
                                    <span className="value" id="gender">{accountData.gender === 'M'? '남성':'여성'}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box">
                                    <span className="label">취미:</span>
                                    <span className="value" id="interest">{accountData.hobby === 'E'? '운동':'식단'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sideber-item'>
                        <img id='ibox' src="dog.jpg" alt="게임 프로필 사진" style={{ width: '50%', height: '70%' }} />
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
            <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란1</div>
            <div>맛있는거</div>
            <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                <Line options={options} data={data1} />
            </div>
            <div>맛있는거</div>
            <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란3</div>
            <div>맛있는거</div>
            <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란4</div>
            <div>맛있는거</div>
            <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>차트가 들어갈 란5</div>
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
                <div className="col-lg-inbody">
                <div id="status-inbody"></div>
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
                <div className="col-lg-inbody">
                    <div id="status-workout-progress"></div>
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
                <div className="col-lg-inbody">
                    <div id="status-meal-statistics"></div>
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
                <div className="col-lg-inbody">
                    <div id="status-workout-statistics"></div>
                </div>
            </div>
        </div>
    </div>

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

