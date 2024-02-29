import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import Chatbot from '../component/chatBot/ChatBot';
import './MyPage.css';
import Modal from './Pmodal';
import Gmodal from './Gmodal';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

//datepicker사용
//npm install @mui/x-date-pickers
//npm install @mui/material @emotion/react @emotion/styled
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'dayjs/locale/ko'
//npm install dayjs
import dayjs from 'dayjs';
import moment from "moment";


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
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isGameRecordModalOpen, setIsGameRecordModalOpen] = useState(false);


        // 회원 정보 모달 열기 함수
    const openProfileModal = () => {
        setIsProfileModalOpen(true);
    };

    // 회원 정보 모달 닫기 함수
    const closeProfileModal = () => {
        setIsProfileModalOpen(false);
    };

    // 게임 기록 모달 열기 함수
    const openGameRecordModal = () => {
        setIsGameRecordModalOpen(true);
    };

    // 게임 기록 모달 닫기 함수
    const closeGameRecordModal = () => {
        setIsGameRecordModalOpen(false);
    };

    // 회원 정보 수정 이벤트 핸들러
    const handleProfileUpdate = (formData) => {
    // 수정된 회원 정보 전송 로직 추가
    console.log('수정된 회원 정보:', formData);
    // 모달 닫기
    closeProfileModal();
};

    // 게임 기록 수정 이벤트 핸들러
    const handleGameRecordUpdate = (formData) => {
        // 수정된 게임 기록 전송 로직 추가
        console.log('수정된 게임 기록:', formData);
        // 모달 닫기
        closeGameRecordModal();
};

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
        // console.log('myCookieValue',myCookieValue);
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
            // console.log('proflieData',proflieData);
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
        // console.log('accountNo',accountNo);
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

    //해당 일주일을 찾자준다
    function week(startDate){
        // 주어진 날짜가 속한 주의 일요일을 찾습니다.
        const sunday = new Date(startDate);
        sunday.setDate(startDate.getDate() - startDate.getDay());

        // 배열을 초기화합니다.
        const dateArray = [];

        // 일요일부터 토요일까지의 날짜를 배열에 추가합니다.
        for (let i = 0; i < 7; i++) {
            const date = new Date(sunday);
            date.setDate(sunday.getDate() + i);
            dateArray.push(date);
        }
    }


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
                <div className="sideber-box sb-rjm1" style={{ display: 'flex', alignSelf: 'flex-start', position: 'relative' }}>
                    <div className='main-titles' style={{ top: '10px', marginTop: '-30px' }}>
                        <h1>회원 정보</h1>
                        <div className="profile-edit-button-container">
                        <button onClick={openProfileModal} className="profile-edit-button" disabled={isGameRecordModalOpen}>수정</button>
                            {isProfileModalOpen && (
                                <Modal
                                isOpen={isProfileModalOpen}
                                onClose={closeProfileModal}
                                onSubmit={handleProfileUpdate}
                                nickname={accountData.nickname}
                                name={accountData.name}
                                address={accountData.address}
                                hobby={accountData.hobby}
                                height={accountData.height}
                                weight={accountData.weight}
                                age={accountData.age}
                                />
                            )}
                        </div>
                    </div>
                    <div className='sideber-item' style={{overflow:'hidden'}}>
                        <img id='ibox' src={accountData.image} alt="프로필 사진" style={{ maxWidth: 'auto', height: 'auto',objectFit: 'contain' }} />
                        <div className="form_row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">닉네임:</span>
                                    <span className="value" id="username"  style={{fontFamily:"Lobster"}}>JohnDoe123</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">이름:</span>
                                    <span className="value" id="name">{accountData.name}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">주소:</span>
                                    <span className="value" id="address">{accountData.address}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">포인트:</span>
                                    <span className="value" id="point">500</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">성별:</span>
                                    <span className="value" id="gender">{accountData.gender === 'M'? '남성':'여성'}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">키:</span>
                                    <span className="value" id="height">{accountData.height}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">몸무게:</span>
                                    <span className="value" id="weight">{accountData.weight}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">나이:</span>
                                    <span className="value" id="age">{accountData.age}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">취미:</span>
                                    <span className="value" id="interest">{accountData.hobby === 'E'? '운동':'식단'}</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>

        <div className="company-info-section">
            <div className="container">
                <div className="sideber-box sb-rjm1" style={{ display: 'flex', alignSelf: 'flex-start', position: 'relative' }} >
                    <div className='main-titles' style={{ top: '10px', marginTop: '-30px' }}>
                        <h1>게임 기록</h1>
                        <div className="Gprofile-edit-button-container">
                        <button onClick={openGameRecordModal} className="profile-edit-button" disabled={isProfileModalOpen}>수정</button>
                            {/* 모달 */}
                            {isGameRecordModalOpen && (
                                <Gmodal
                                isOpen={isGameRecordModalOpen}
                                onClose={closeGameRecordModal}
                                onSubmit={handleGameRecordUpdate}
                                nickname={accountData.nickname}
                                
                                />
                            )}
                        </div>
                    </div>
                    <div className='sideber-item' style={{overflow:'hidden'}}>
                        <img id='ibox' src={accountData.image} alt="프로필 사진"  style={{ maxWidth: 'auto', height: 'auto',objectFit: 'contain' }} />
                        <div className="form_row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">닉네임:</span>
                                    <span className="value" id="username">JohnDoe123</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">평균 등수:</span>
                                    <span className="value" id="rank">3.5</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">승률:</span>
                                    <span className="value" id="winrate">50%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">승:</span>
                                    <span className="value" id="win">30</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">패:</span>
                                    <span className="value" id="lose">30</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
                                    <span className="label">스쿼트:</span>
                                    <span className="value" id="squat">78%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box"style={{marginBottom:'30px'}}>
                                    <span className="label">윗몸:</span>
                                    <span className="value" id="sit-up">50%</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form_box" style={{marginBottom:'30px'}}>
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
        <div className="date_picker-mp">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                    <DemoContainer components={['DatePicker']}>
                    <DatePicker 
                    // value={selectOne != null ? selectOne[5] : ''}
                    label="날짜 설정" 
                    //value={dayjs(selectOne == '' || selectOne == null ? moment(value).format("YYYY-MM-DD 00:00") : selectOne[5])}
                    slotProps={{
                        textField: {
                        size: "small",
                        format: 'YYYY-MM-DD HH:mm'
                        },
                    }}r
                    />
                    </DemoContainer>
                    </LocalizationProvider>
                    </div>
                    {/* <div>{moment(value).format("YYYY-MM-DD 01:00")}</div> */}
                    <div className="date_picker-mp">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">

                    </LocalizationProvider>
        </div> 
	<div className="title">
		<h1>섭취 칼로리</h1>
	</div>
	<div className="company-info-section">
		<div className="sideber-box">
		    <div className="col-lg-calorie" style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                        <Line options={options} data={data1} />
                    </div>
                <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                        <Line options={options} data={data1} />
                    </div>
                <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                        <Line options={options} data={data1} />
                    </div>
                <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                        <Line options={options} data={data1} />
                    </div>
                <div>맛있는거</div>
                    <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                        <Line options={options} data={data1} />
                    </div>
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
                <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                    <Line options={options} data={data1} />
                </div>
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
                <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                    <Line options={options} data={data1} />
                </div>
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
                <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                    <Line options={options} data={data1} />
                </div>
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
                <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                    <Line options={options} data={data1} />
                </div>
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
        <Chatbot/>
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

