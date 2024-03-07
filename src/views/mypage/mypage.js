import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Header from '../component/header/Header.js';
import HeaderTop from '../component/headerTop/HeaderTop.js';
import Chatbot from '../component/chatBot/ChatBot.js';
import './MyPage.css';
import Modal from './Pmodal.js';
import Gmodal from './Gmodal.js';
import { useNavigate } from "react-router-dom";
import Chart from './chart/ChartApp.js'
import Swal from 'sweetalert2';
import InbodyP from './inbody/InbodyP.jpeg';


import axios from 'axios';
import $ from 'jquery';

//datepicker사용
//npm install @mui/x-date-pickers
//npm install @mui/material @emotion/react @emotion/styled
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import InbodyModal from './inbody/InbodyModal.js';
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
import MyPageSidebar from '../component/sidebar/MyPageSidebar.js';
  
ChartJS.register(CategoryScale,CategoryScale,LinearScale,BarElement,PointElement,LineElement,ArcElement,Title, Tooltip, Legend);


var ipAddress = '192.168.0.110';

const calculateTotalCaloriesByDateAndExercise = (exercises) => {
    const exerciseCaloriesFactors = {
        "스쿼트": 0.1,
        "데드리프트": 0.15,
        "벤치프레스": 0.1,
        "팔굽혀펴기": 0.3, // 팔굽혀펴기는 무게를 고려하지 않습니다.
        "윗몸 일으키기": 0.2, // 윗몸일으키기는 무게를 고려하지 않습니다.
    };

    const totalCaloriesByDateAndExercise = {};

    exercises.forEach(exercise => {
        const date = exercise.endPostdate;
        const calories = calculateCalories(exercise, exerciseCaloriesFactors);

        if (!totalCaloriesByDateAndExercise[date]) {
            totalCaloriesByDateAndExercise[date] = {};
            for (const category in exerciseCaloriesFactors) {
                totalCaloriesByDateAndExercise[date][category] = { kcal: 0, counts: 0 };
            }
        }

        totalCaloriesByDateAndExercise[date][exercise.category] = {
            kcal: calories,
            counts: exercise.counts
        };
    });

    return totalCaloriesByDateAndExercise;
};

const calculateCalories = (exercise, factors) => {
    if (exercise.category === "팔굽혀펴기" || exercise.category === "윗몸 일으키기") {
        return exercise.counts * factors[exercise.category];
    } else {
        return exercise.weight * exercise.counts * factors[exercise.category];
    }
};




async function imageData(code){
    return await new Promise((resolve,reject)=>{
        try{
            axios.get(`http://192.168.0.53:5050/image/${code}`)
            .then((response)=>{
                resolve("data:image/png;base64,"+response.data['image']);
            })
        }
        catch(err){reject(err)};
    },2000);
}

async function dietData(accountNo,dietCal){
    return await new Promise((resolve,reject)=>{
        try{
            axios.get(`http://${ipAddress}:5000/diet/${accountNo}?date=`+dietCal) //<---머지시 50 을 44로 변경
            .then(response =>{
                resolve(response.data['chart2']);
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

    const [weekDate,setWeekDate] = useState([]);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isGameRecordModalOpen, setIsGameRecordModalOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState(null)//파일 미리보기 저장할 상태 추가
    const [isExampleImageOpen, setIsExampleImageOpen] = useState(true);//예시 사진을 저장할 상태 추가
    const [ocrData, setOcrData] = useState([]); //OCR데이터 상태관리

    //식단 데이타
    const [weekFoodChartData,setWeekFoodChartData] = useState([]);

    //운동 데이타 전부 가져오기
    const [workData,setWorkData] = useState();
    const [workChartData,setWorkChartData] = useState();

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

    const getCategoryData = (category, workChartData) => {
        return weekDate.map(date => {
            if (workChartData) {
                return workChartData[date] && workChartData[date][category].kcal ? workChartData[date][category].kcal : 0;
            } else {
                return 0;
            }
        });
    };
    const getCategoryCountData = (category, workChartData) => {
        return weekDate.map(date => {
            if (workChartData) {
                return workChartData[date] && workChartData[date][category].counts ? workChartData[date][category].counts : 0;
            } else {
                return 0;
            }
        });
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
            if(proflieData.gameImage!=null){
                imageData(proflieData.gameImage).then((test)=>{
                    
                    proflieData.gameImage = test;
                    setAccount(proflieData);
                })
            }else{
                imageData('1').then((test)=>{
                    proflieData.gameImage = test;
                    setAccount(proflieData);
                })
            }
        })
        .catch(error => console.log(error))
    },[])

    useEffect(()=>{
        if(accountNo != null){
            axios.get(`http://${ipAddress}:5000/account/${accountNo}?hobby=diet`)

            .then(response =>{

                setMark(response.data['diet']);
                return response.data;
            })
            axios.get(`/api/v1/mypages/work/${accountNo}`, {
                headers: {
                    'Authorization' : `${myCookie}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                setWorkData(response.data);
            })
            .catch(error => console.log(error));
            axios.get(`/api/v1/chat/list/${accountNo}`,{
                headers: {
                    'Authorization' : `${myCookie}`,
                    'Content-Type' : 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
            })
            .catch(error => console.log('/chat/list',error));
            
            const date = new Date() 
        }
    },[accountNo]);

    const [isInbodyModalOpen, setIsInbodyModalOpen] = useState(false); // 상태 변수 추가
    // 인바디 정보 모달 열기 함수
    const openInbodyModal = () => {
        setIsInbodyModalOpen(true);
    };

    // 인바디 정보 모달 닫기 함수
    const closeInbodyModal = () => {
        setIsInbodyModalOpen(false);
    };

    // 인바디 정보 수정 이벤트 핸들러
    const handleInbodyUpdate = (formData) => {
        // 수정된 인바디 정보 전송 로직 추가
        console.log('수정된 인바디 정보:', formData);
        // 모달 닫기
        closeInbodyModal();
    };


    
    //차트
    const dataFood = {
        labels:['에너지(kcal)','수분(g)','단백질(g)','지방(g)','회분(g)','탄수화물(g)'],
        datasets: [
            {
              fill: true,
              label: '일주일 평균 영향소',
              data: weekFoodChartData.map(item=>item.size),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        };

    //소모칼로리
    const workCharKacltData = {
        labels: weekDate,
        datasets: [
            {
                fill: true,
                label: '데드리프트',
                data: getCategoryData('데드리프트', workChartData),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                fill: true,
                label: '벤치프레스',
                data: getCategoryData('벤치프레스', workChartData),
                borderColor: 'rgb(123, 211, 234)',
                backgroundColor: 'rgba(123, 211, 234, 0.5)',
            },
            {
                fill: true,
                label: '스쿼트',
                data: getCategoryData('스쿼트', workChartData),
                borderColor: 'rgb(161, 238, 189)',
                backgroundColor: 'rgba(161, 238, 189, 0.5)',
            },
            {
                fill: true,
                label: '윗몸 일으키기',
                data: getCategoryData('윗몸 일으키기', workChartData),
                borderColor: 'rgb(246, 247, 196)',
                backgroundColor: 'rgba(246, 247, 196, 0.5)',
            },
            {
                fill: true,
                label: '팔굽혀펴기',
                data: getCategoryData('팔굽혀펴기', workChartData),
                borderColor: 'rgb(246, 214, 214)',
                backgroundColor: 'rgba(246, 214, 214, 0.5)',
            },
        ],
    };
    const workCharCountData = {
        labels: weekDate,
        datasets: [
            {
                fill: true,
                label: '데드리프트',
                data: getCategoryCountData('데드리프트', workChartData),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                fill: true,
                label: '벤치프레스',
                data: getCategoryCountData('벤치프레스', workChartData),
                borderColor: 'rgb(123, 211, 234)',
                backgroundColor: 'rgba(123, 211, 234, 0.5)',
            },
            {
                fill: true,
                label: '스쿼트',
                data: getCategoryCountData('스쿼트', workChartData),
                borderColor: 'rgb(161, 238, 189)',
                backgroundColor: 'rgba(161, 238, 189, 0.5)',
            },
            {
                fill: true,
                label: '윗몸 일으키기',
                data: getCategoryCountData('윗몸 일으키기', workChartData),
                borderColor: 'rgb(246, 247, 196)',
                backgroundColor: 'rgba(246, 247, 196, 0.5)',
            },
            {
                fill: true,
                label: '팔굽혀펴기',
                data: getCategoryCountData('팔굽혀펴기', workChartData),
                borderColor: 'rgb(246, 214, 214)',
                backgroundColor: 'rgba(246, 214, 214, 0.5)',
            },
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

    //해당 일주일을 찾아준다
    function week(startDate){
        
        setWeekDate([]);
        
        // // 주어진 날짜가 속한 주의 일요일을 찾습니다.
        const sunday = new Date(startDate.$d);
        sunday.setDate((startDate.$d).getDate() - (startDate.$d).getDay());

        // 배열을 초기화합니다.
        const dateArray = [];
        // date.setDate(sunday.getDate() + 7);
        // dateArray.push(date);
        for (let i = 0; i < 7; i++) {
            const date = new Date(sunday);
            date.setDate(sunday.getDate() + i);
            dateArray.push(moment(date).format("YYYY-MM-DD"));
        }
        setWeekDate(dateArray);
        
    }

    //날짜에 맞춰서 데이타 필터링
    useEffect(() => {
        if (workData) {
            const arr = workData.filter(item => new Date(item.endPostdate) >= new Date(weekDate[0]) && new Date(item.endPostdate) <= new Date(weekDate[weekDate.length - 1]));
            setWorkChartData(calculateTotalCaloriesByDateAndExercise(arr));
    
            // 비동기 호출을 모두 기다릴 프로미스 배열 생성
            const promises = weekDate.map(date => dietData(accountNo, date));
    
            // 모든 비동기 호출이 완료되면 sumSizes 함수 호출
            Promise.all(promises)
                .then(results => {
                    // console.log('sumSizes', sumSizes(results));
                    const processedData = sumSizes(results);
                    const normalizedData = processedData.map(item => ({ ...item, size: (item.size / results.length).toFixed(2) }));

                    setWeekFoodChartData(normalizedData);
                })
                .catch(error => {
                    console.error('Error while fetching diet data:', error);
                });
        }
    }, [weekDate]);
    

    function sumSizes(data) {
        const result = {};
      
        // 데이터를 순회하며 name 별로 size를 더합니다.
        data.forEach(arr => {
            arr.forEach(obj => {
                const { name, size } = obj;
                if (result[name]) {
                result[name] += size;
                } else {
                result[name] = size;
                }
            });
        });
      
        // 결과를 배열로 변환합니다.
        const finalResult = Object.entries(result).map(([name, size]) => ({ name, size }));
      
        return finalResult;
    }

    

    //인바디 파일 등록란 클릭 시 나타나는 알림 창
    const openFilePicker = () => {
        Swal.fire({
            title: '',
            imageUrl: InbodyP, // 커스텀 이미지 설정
            imageAlt: 'Custom Image', // 이미지 대체 텍스트
            text: '위처럼 명확한 이미지를 등록해주세요',
            showCancelButton: true,
            confirmButtonText: '파일 선택',
            imageWidth: 500, // 이미지 너비 조절
            imageHeight: 500, // 이미지 높이 조절
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById('fileInput').click();
            }
        });
    };

    // // 파일 선택 후 모달 닫기
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setPreviewImage(reader.result);
    //         // 파일 선택 후 알람창 닫기
    //         Swal.close();
    //     };
    //     reader.readAsDataURL(file);
    // };

     $('.datepicker').css("background-color","red");
    
     const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const response = await axios.post('http://localhost:5000/ocr', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setOcrData(response.data); // OCR 결과 상태 업데이트
            Swal.fire('성공!', '이미지가 성공적으로 처리되었습니다.', 'success');
        } catch (error) {
            console.error('Error uploading and processing image:', error);
            Swal.fire('오류', '이미지 처리 중 오류가 발생했습니다.', 'error');
        }
    };
    
  


    return (
    <div style={{position:"absolute", height:"100%", width:"100%", display:"flex", flexDirection:"column"}}>
        <div style={{width:"100%", display:"flex", flexDirection:"row-reverse"}}>
            <div className="mypage-menu-bar" style={{backgroundColor:"whitesmoke", width:"830px", marginLeft:"100px" , borderRadius:"50px 0px 0px 50px", border:"1px solid rgba(0,0,0,0.2)", backgroundColor:"#3a3f48"}}>
                <Header/>
            </div>
        </div>

        
        <div style={{display:"flex",position:"relative"}}>
            <MyPageSidebar week={(e) => week(e)}/>
            <div className='mypagesidebar-scroll-event'>
            </div>
            
            {/* width 추가됨 */}
            <div style={{width:"100%", height:"100%"}}>
            <div className="company-info-section">
                <div style={{display:"flex", width:"100%", gap:"80px", placeItems:"center", justifyContent:"center", height:"950px"}}>



                    <div className="sideber-box sb-rjm1" style={{ display: 'flex', alignSelf: 'flex-start', position: 'relative', width:"520px", backgroundColor:"#e8ebec"}}>
                        <div className='main-titles'>
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
                        <div className='sideber-item' style={{overflow:'hidden', display:"flex", flexDirection:"column"}}>
                            <img id='ibox' src={accountData.image} alt="프로필 사진" style={{ maxWidth: 'auto', height: 'auto',objectFit: 'contain' }}/>
                            <div className="form_row" style={{width:"80%", margin:"0px"}}>
                                <div>
                                    <span className="label">닉네임</span>
                                    <span className="value" id="username">JohnDoe123</span>
                                </div>
                                <div>
                                    <span className="label">이름</span>
                                    <span className="value" id="name">{accountData.name}</span>
                                </div>
                                <div>
                                    <span className="label">주소</span>
                                    <span className="value" id="address">{accountData.address}</span>
                                </div>
                                <div>
                                    <span className="label">포인트</span>
                                    <span className="value" id="point">500</span>
                                </div>
                                <div>
                                    <span className="label">성별</span>
                                    <span className="value" id="gender">{accountData.gender === 'M'? '남성':'여성'}</span>
                                </div>
                                <div>
                                    <span className="label">키</span>
                                    <span className="value" id="height">{accountData.height}</span>
                                </div>
                                <div>
                                    <span className="label">몸무게</span>
                                    <span className="value" id="weight">{accountData.weight}</span>
                                </div>
                                <div>
                                    <span className="label">나이</span>
                                    <span className="value" id="age">{accountData.age}</span>
                                </div>
                                <div>
                                    <span className="label">취미</span>
                                    <span className="value" id="interest">{accountData.hobby === 'E'? '운동':'식단'}</span>
                                </div>
                            </div>
                        </div>    
                    </div>



                    <div className="sideber-box sb-rjm1" style={{ display: 'flex', alignSelf: 'flex-start', position: 'relative', width:"520px", backgroundColor:"#e8ebec"}} >
                        <div className='main-titles'>
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
                        <div className='sideber-item' style={{overflow:'hidden', display:"flex", flexDirection:"column"}}>
                            <img id='ibox' src={accountData.game_image} alt="프로필 사진"  style={{ maxWidth: 'auto', height: 'auto',objectFit: 'contain' }} />
                            <div className="form_row" style={{width:"80%", margin:"0px"}}>
                                <div>
                                    <span className="label">닉네임</span>
                                    <span className="value" id="username">JohnDoe123</span>
                                </div>
                                <div>
                                    <span className="label">평균 등수</span>
                                    <span className="value" id="rank">3.5</span>
                                </div>
                                <div>
                                    <span className="label">승률</span>
                                    <span className="value" id="winrate">50%</span>
                                </div>
                                <div>
                                    <span className="label">승</span>
                                    <span className="value" id="win">30</span>
                                </div>
                                <div>
                                    <span className="label">패</span>
                                    <span className="value" id="lose">30</span>
                                </div>
                                <div>
                                    <span className="label">스쿼트</span>
                                    <span className="value" id="squat">78%</span>
                                </div>
                                <div>
                                    <span className="label">윗몸</span>
                                    <span className="value" id="sit-up">50%</span>
                                </div>
                                <div>
                                    <span className="label">팔굽</span>
                                    <span className="value" id="push-ups">44%</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            



            <div className="company-info-section">
                
            </div>
            
        
                        
        <div style={{width:"1110px", margin:"auto"}}>
            <div className="date_picker-mp" style={{transform:"translateY(65px) translateX(-30px)"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <DemoContainer components={['DatePicker']}>
            <DatePicker
                // value={selectOne != null ? selectOne[5] : ''}
                label="날짜 설정" 
                onChange={(e) => week(e)} // 변경값을 콘솔에 출력
                //value={dayjs(selectOne == '' || selectOne == null ? moment(value).format("YYYY-MM-DD 00:00") : selectOne[5])}
                slotProps={{
                    textField: {
                        size: "small",
                        format: 'YYYY-MM-DD HH:mm',
                        style:{backgroundColor:'white'},
                    },
                    }
                }
            />
            </DemoContainer>
            </LocalizationProvider>
            </div>
            {/* <div>{moment(value).format("YYYY-MM-DD 01:00")}</div> */}
            <div className="date_picker-mp">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">

                </LocalizationProvider>
            </div> 
        </div>

    
        

        <div className="container">
            <div className="title">
                <h1>인바디</h1>
            </div>
            <div className="company-info-section">
                <div className="sideber-box" style={{boxShadow:"0px 0px 5px 1px rgba(0,0,0,0.5)", backgroundColor:"#e8ebec"}}>
                    <div className='inbody-box-sid'>


                        <div className="inbody-flex-style">
                            <div className="inbody-img-container" onClick={openFilePicker}>
                                <input type="file" id="fileInput" onChange={handleFileChange} />
                                {previewImage ? (
                                    <img src={previewImage} alt="인바디 사진" className="inbody-picture" />
                                ) : (
                                    <div>
                                        <span className="inbody-message">인바디 사진을 등록해 주세요</span>
                                        <br />
                                        <span>등록하기</span>
                                    </div>
                                )}
                            </div>
                            <button className='inbody-U-button' onClick={openInbodyModal}>직접 수정하기</button>
                        </div>
                        <div className="chart-container cc1">
                           <Chart/>
                        </div>
                    </div>
                </div>
            </div>
            {/* 인바디 정보 모달 */}
            {isInbodyModalOpen && (
                <InbodyModal
                    isOpen={isInbodyModalOpen}
                    onClose={closeInbodyModal}
                    onSubmit={handleInbodyUpdate}
                    ocrData={ocrData} // OCR 데이터를 모달로 전달
                    // 필요한 props 추가
                />
            )}
        </div>    

            <div className="container">
                <div className="title">
                    <h1>식단 통계</h1>
                </div>
                <div className="company-info-section">
                    <div className="sideber-box" style={{boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.5)", backgroundColor:"#e8ebec"}}>

                    <div className="sub-mypage-title">맛있는거</div>

                    <div className="sub-mypage-title">해당주차 영양소 통계</div>

                        <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                            <Bar options={options} data={dataFood} />
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
                    <div className="sideber-box" style={{boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.5)", backgroundColor:"#e8ebec"}}>
                        <div className="sub-mypage-title">운동 날짜별 소모 칼로리</div>
                        <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                            <Bar options={options} data={workCharKacltData} />
                        </div>
                        <div className="col-lg-inbody">
                            <div id="status-workout-statistics"></div>
                        </div>
                        <div className="sub-mypage-title">날짜별 운동 횟수</div>
                        <div id="status" style={{backgroundColor:'white', borderRadius:"5px", height:300}}>
                            <Bar options={options} data={workCharCountData} />
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

                <div className="sideber-box" style={{boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.5)", backgroundColor:"#e8ebec"}}>
                    {/*스크랩한 게시물*/}
                    <MypageBulletinBoardLayout/>       
                </div>

            </div>

            <div className="container">
                <div className="title">
                    <h1>저장한 유튜브</h1>
                </div>

                <div className="sideber-box" style={{boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.5)", backgroundColor:"#e8ebec"}}>
                {/*마이페이지 유튜브*/}
                <MypageYoutubeLayout/>
                </div>
                <Chatbot/>
            </div>
            
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
        <div className="mypage-bulletinBoard-item mbi2">제목</div>
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