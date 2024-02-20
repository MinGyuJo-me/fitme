import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';
import axios from 'axios'; //npm install axios
import { useNavigate } from "react-router-dom";

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import './Workout.css';

//크루셀 npm i react-owl-carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from '../../../../node_modules/counterup/jquery.counterup';

//datepicker사용
//npm install @mui/x-date-pickers
//npm install @mui/material @emotion/react @emotion/styled
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import 'dayjs/locale/ko'

//npm install react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
//npm install dayjs
import dayjs from 'dayjs';
//npm install sweetalert
import swal from 'sweetalert';

//npm i styled-components
import styled from 'styled-components';

//componants
import Modal from "./modal";
import Chatbot from '../../component/chatBot/ChatBot';


export const options = {
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


var id = null;
var ipAddress = '192.168.0.15';

//
//이미지서버 연결 
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
//


//좋아요
const workLike = (e) => {
	var btnLike = e.target.parentElement.children[0].value;
	var dateLike = e.target.parentElement.children[1].value;
	console.log('dateLike : ', dateLike.length);
	if(dateLike.length <= 0){
		axios.post(`http://${ipAddress}:5000/calendarLike/`+btnLike,{
			headers: {
				'Content-Type':'multipart/form-data',
			}
		})
    e.target.src = require('./images/heart.png');
    e.target.parentElement.children[1].value =new Date();
    console.log('e.target.src',e.target.src);
	}else{
		axios.delete(`http://${ipAddress}:5000/calendarLike/`+btnLike,{
			header: {
				'Content-Type':'multipart/form-data',
			}
		})
    e.target.src = require('./images/empty-heart.png');
    e.target.parentElement.children[1].value ='';
	}
}


function Workout() {
	const [mark, setMark] = useState([]);	//
	const [selectedWorkout, setSelectedWorkout] = useState('');	//
	
	//유저 정보
	const [accountData, setAccount ] = useState([]);	//

	//운동 캘린더용
	const [workoutCal,setWorkoutCal] = useState();	//

	//네비게이트 
	const navigate = useNavigate();	//

	//모달창 업데이트 딜리트 출력
	const [isOpen, setIsOpen] = useState();	//
	const [selectOne, setSelect ] = useState();	//

	//하루 데이타
	const [value, onChange] = useState(new Date());	//
	const [data_, setData] = useState();	//
	const [labels_, setLabels] = useState();	//
  const [workout, setWorkout ] = useState([]);	//

	//
	const toggleModal = (e) => {
    id = e.target.parentElement.children[1] != undefined ? e.target.parentElement.children[1].value : true;
    console.log('e.target',e.target.parentElement);
    setIsOpen(id);
  };
	//

	//
	//로그인 확인
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
		// console.log('myCookieValue',myCookieValue);
		if(myCookieValue == null){ //로그인 확인
		navigate('/signin');
		}

		axios.get(`/api/v1/foodworks/account`, {
		headers: {
			'Authorization' : `${myCookieValue}`,
			'Content-Type' : 'application/json; charset=UTF-8'
		}
		})
		.then(response => {
		var proflieData = response.data;
		if(proflieData.accountNo != null) {
			setWorkoutCal(proflieData.accountNo);
		};
		if(proflieData.image!=null){
			imageData(proflieData.image).then((test)=>{
				proflieData.image = test;
				setAccount(proflieData);
			})
		}else{
			imageData(1).then((test)=>{
				proflieData.image = test;
				setAccount(proflieData);
			})
		}
	})
	.catch(error => console.log('error',error))
	},[]);
	//

	//
	//캘린더 부분 추가
	useEffect(()=>{
		//프로필 코드 
		if(workoutCal != null){
      
      callis(workoutCal);
		}
	},[workoutCal])
	//
  function callis(accountNo,date){
    axios.get(`http://${ipAddress}:5000/account/${accountNo}?hobby=workout`)
      .then(response =>{
        //날짜 일정 추가 창
        // console.log(response.data['workout']);
        setMark(response.data['workout']);
        today(accountNo,date != null ? date : new Date());
        return response.data;
      })
  }

	//delete
	const setCalDel = (e) => {
		if(true){ //confirm넣을 자리
		  console.log("delete",e.target.parentElement[0].value);
		  axios.delete(`http://${ipAddress}:5000/workout/${e.target.parentElement[0].value}`,{})
		  .then(response => {
        console.log(response.data);
        setIsOpen(false);
        callis(workoutCal,value);
		  })
		}
	}
	//

	//
	//하루 데이타
	useEffect(() => {
		
		if(workoutCal != null){
      console.log('value',value);
		  today(workoutCal,value)
			
		}
	},[value]);
  function today(accountNo,todaydate){
    setWorkout([]);
    axios.get(`http://${ipAddress}:5000/workout/${accountNo}?date=`+moment(todaydate).format("YYYY-MM-DD"))
    .then(response =>{
      console.log(response.data['workout']);
      setWorkout(response.data['workout']);
      return response.data['chart1'];
    })

    .then(message =>{
      var data1_ =[];
      var labels1_ = [];
      for(let i=0; i<message.length;i++){
        data1_.push(message[i].size);
        labels1_.push(message[i].name);
      } 
      setData(data1_);
      setLabels(labels1_);
    });
  }

	//View
  useEffect(()=>{
		// console.log(isOpen);
    if(isOpen != 'true'){
      setFormData([]);
      var list_ = new Array();
      if(workoutCal != null){
        axios.get(`http://${ipAddress}:5000/workout/${workoutCal}?calId=${isOpen}`)
        .then(response =>{
        console.log(response.data);
        // setSelect(new Array(response.data))
        if(response.data != null){
          for(var i = 0; i < response.data.length; i++){
            list_.push(response.data[i]);
          }
        }
        // console.log('list_',list_);
        setSelect(list_);
        })
      }
    }
	},[isOpen]);

	//
	const handleWorkoutSelect = value => {
		setSelectedWorkout(value);
	  };
	//
	
	//
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData2 = e.target;
		const formData1 = new FormData();
		const workoutData = new Array();

		// 각 폼 필드를 FormData 객체에 추가
		for (const key in formData){
		// if(key == 'WORKOUT' || key == '')
		console.log(key,':',formData[key])
		formData1.append(key, formData[key]);
		}

		if(formData2[formData2.length -2].value == '수정'){
			var endTime = e.target.children[1].children[0].children[0].children[1].children[0].value;
			var accountNo = e.target.children[0].value;
			// console.log(accountNo);
			formData1.append('END_DATE', endTime);
					// console.log(String(formData2[2].value).split()[0])
			axios.put(`http://${ipAddress}:5000/workout/${accountNo}`, formData1, {
				headers:{
				'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				console.log("주소:", response.data);
				swal({title:"입력 성공!",icon:"success"})  
				//서버에 데이터 입력 성공시 모달창 닫기
				console.log('날짜',value);
				callis(workoutCal,value);//새롭게 데이타 추가

				setIsOpen(false);
			})
			.catch(error => {
				console.error('서버 오류:', error);
				swal({title:"입력 실패",icon:"error"})
			});
			console.log("put");
		}else{
			var endTime = e.target.children[0].children[0].children[0].children[1].children[0].value;
			formData1.append('END_DATE', endTime);
			// console.log('end',e.target.children[0].children[0].children[0].children[1].children[0].value);
			// console.log("post",formData['CATEGORY'] == '');

			axios.post(`http://${ipAddress}:5000/workout/${workoutCal}`, formData1, {
				headers:{
				'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {
				console.log("주소:", response.data);
				swal({title:"입력 성공!",icon:"success"})  
				//서버에 데이터 입력 성공시 모달창 닫기
				console.log('날짜',value);
				callis(workoutCal,value);//새롭게 데이타 추가

				setIsOpen(false);
			})
			.catch(error => {
				console.error('서버 오류:', error);
				swal({title:"입력 실패",icon:"error"})
			});
		}
  };
	//

	//
	const [formData, setFormData] = useState({
		DESCRIPTION: '',
		CATEGORY: '',
		ACCURACY: '',
		COUNTS: '',
		MEMO: '',
		WEIGHT: ''
	});
	//
	//
	const handleImageChange = (image) => {
		setFormData({
		...formData,
		CATEGORY: image, // 이미지 정보를 formData에 추가
		});
	};
	//

	//
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
      ...formData,
      [name]: value,
		});
		// console.log(formData);
	};

	//모달창 외부 스크롤 방지
	useEffect(() => {
        // Add or remove the 'no-scroll' class to the html and body elements based on the modal's open state
        if (isOpen) {
          document.documentElement.style.overflow = 'hidden';  // Prevent scrolling on html
          document.body.style.overflow = 'hidden';  // Prevent scrolling on body
        } else {
          document.documentElement.style.overflow = 'auto';  // Allow scrolling on html
          document.body.style.overflow = 'auto';  // Allow scrolling on body
        }
    
        // Cleanup: Remove the added classes when the component unmounts or modal is closed
        return () => {
          document.documentElement.style.overflow = 'auto';  // Ensure scrolling is allowed on html on unmount
          document.body.style.overflow = 'auto';  // Ensure scrolling is allowed on body on unmount
        };
      }, [isOpen]);

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

                {/*
        <!--==================================================-->
        <!-- Start breadcumb-area -->
        <!--==================================================-->
        */}
        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>Management</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html">Workout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-area style-two">
            
	<div className="container">
    <div className="col-lg-12 d-flex justify-content-center">
            <div className="row">
			<div className="col-lg-6 col-md-12" style={{ width: "200px" }}>
				<div className="sidebar-box">
						<div className="profile-image-box">
						<img class="profile-icon" src={accountData.image}
							width="200px" height="200px" alt="profile-icon"/>
						</div>
						<div className="profile-name">{accountData.name}</div>
						<div className="profile-description">
							<div className="profile-description-item">
								<span className="text-style-title">Height</span><br/>
								<span className="text-style-description">{accountData.height}</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Weight</span><br/>
								<span className="text-style-description">{accountData.weight}</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Gender</span><br/>
								<span className="text-style-description">{accountData.gender==='M'?'남성':'여성'}</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Age</span><br/>
								<span className="text-style-description">{accountData.age}</span>
							</div>
						</div>
					</div>
				</div>
            <div className="col-lg-6 col-md-12" style={{ width: "600px" }}>
				<div className="react-calendar-layout">
					{/* <Calendar onChange={handleDateChange} value={value}></Calendar> */}
					<Calendar 
					calendarType='gregory'
					onChange={onChange}
					className="mx-auto w-full text-sm border-b"
					navigationLabel={null}
					showNeighboringMonth={false}
					// onClick={onChange1}
					
					formatDay ={(locale, date) =>{
						return dayjs(date).format('DD')}}

					// minDetail="month" 
					// maxDetail="month" 
					tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
						// 추가할 html 태그를 변수 초기화
						let html = [];
						// 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
						if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
						html.push(<div className="dot"></div>);
						}
						// 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
						return (
						<>
							<div className="flex justify-center items-center absoluteDiv">
							{html}
							</div>
						</>
						);
					}}
					value={value} />
				</div>
            	</div>
				</div>
            </div>

			</div>
			<div className="blog-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-titles">
						<div className="main-titles">
							<h2>WORKOUT DIARY</h2>
							
						</div>
					</div>
				</div>
			</div>
			<OwlCarousel key={workout.length} items={3}  margin={20} autoplay autoplayTimeout={5000} autoplayHoverPause nav navText={["⟪","⟫"]} dots >
				{workout.map((test)=>(
				<div class="item">
					<div class="row">
						<div class="col-lg-12">
							<div class="blog-single-box">
								<div class="blog-thumb">
									<div type="button" className="edit-workout-button" onClick={toggleModal}>
										{/* <img src={test[4]} alt="운동"/> */}
										<div className="major-icon-workout" style={{backgroundImage: `url(${test[test.length-1]})` }} />
										<input type='hidden' value={test[0]} />
									</div>
									{/* <div class="blog-btn">
										<a href="#">{test[3]}</a>
									</div> */}
								</div>
								{/* {console.log("test",test[1])} */}
								<div class="blog-content">
									{/* <div class="blog-left">
										<span>{test[3]}</span>
									</div> */}
									<h2>{test[3]}</h2>
									<p>{test[6]} All counts</p>
									<p>{test[7]} kg</p>
									<div class="blog-button" >
                    <div type="button" className="like-button" onClick={workLike}>
                      <input type='hidden' value={test[0]} />
                      <input type='hidden' value={test[8]} />
                      {
                      test[8] != null?
                        <img src={require('./images/heart.png')} alt="like"/>
                        :
                        <img src={require('./images/empty-heart.png')} alt="like"/>
                      }
                      {/* <img src={require('./images/empty-heart.png')} alt="empty-like"/> */}
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				))}
			</OwlCarousel>
			
			
			{workout.length >= 0 ?						
				<div>
        <button type="button" className="add-siksa-button" onClick={toggleModal}>
        <div className="add-siksa-icon" style={{ backgroundImage: `url(${require('./images/plus6.png')})` }}></div>
        </button>
					{isOpen && (
						<Modal
						open={isOpen}
						onClose={() => {
							setSelectedWorkout('');
							setIsOpen(false);
						}}
						> 
						<div className="modal-addfood-label">
						<h2>운동을 추가/수정해 주세요!</h2>
						</div>
						
						{/* <form onSubmit={console.log("post")}> */}
						<form onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
              {selectOne == '' || selectOne == null ? 
                ''
                : 
                <input type="hidden" value={selectOne[0]}/>
              }
              <div className="date_picker">
							<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko" >
							<DemoContainer components={['DateTimePicker']}>
							<DateTimePicker 

							// value={selectOne != null ? selectOne[5] : ''}
							label="날짜와 시간 설정" 
							value={dayjs(selectOne == '' || selectOne == null ? moment(value).format("YYYY-MM-DD 00:00") : selectOne[5])}
							slotProps={{
							textField: {
								size: "small",
								format: 'YYYY-MM-DD HH:mm'
							},
							}}
							/>
							</DemoContainer>
							</LocalizationProvider>
							</div>
							{/* <div>{moment(value).format("YYYY-MM-DD 01:00")}</div> */}
							<div className="date_picker">
							<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko"></LocalizationProvider>
							</div>
							<div className="modal-workout-list">
							{/* <input type="text" name="DESCRIPTION" placeholder="제목" onChange={handleInputChange} /> */}
							<select name="CATEGORY" onChange={handleInputChange}>
                <option value='' selected={selectOne == null ? "selected" : ''} >-- 운동 종류 --</option>
                <option value="데드리프트" selected={selectOne != null && selectOne[3]=="데드리프트" ? "selected" : ''}>데드리프트(Deadlift)</option>
                <option value="스쿼트" selected={selectOne != null && selectOne[3]=="스쿼트" ? "selected" : ''}>스쿼트(squat)</option>
                <option value="벤치프레스" selected={selectOne != null && selectOne[3]=="벤치프레스" ? "selected" : ''}>벤치프레스(bench press)</option>
                <option value="팔굽혀펴기" selected={selectOne != null && selectOne[3]=="팔굽혀펴기" ? "selected" : ''}>팔굽혀펴기(Push-up)</option>
                <option value="윗몸 일으키기" selected={selectOne != null && selectOne[3]=="윗몸 일으키기" ? "selected" : ''}>윗몸 일으키기(SitUp)</option>
							</select>
							<input type="text" name="DESCRIPTION" 
							value={formData.DESCRIPTION != null ? formData.DESCRIPTION : selectOne != null ? selectOne[1] : ''} 
							placeholder="제목" onChange={handleInputChange} />
							<input type="number" name="COUNTS" min="1" 
							value={formData.COUNTS != null ? formData.COUNTS : selectOne != null ? selectOne[7] : ''} 
							placeholder="횟수" onChange={handleInputChange} />
							<input type="number" name="WEIGHT" step="0.01" min="0" 
							value={formData.WEIGHT != null ? formData.WEIGHT : selectOne != null ? selectOne[8] : ''} 
							placeholder="무게" onChange={handleInputChange} />
							<input type="text" name="MEMO" 
							value={formData.MEMO != null ? formData.MEMO : selectOne != null ? selectOne[2] : ''} 
							placeholder="내용" onChange={handleInputChange} />
							</div>
							<input type="submit" value={selectOne != '' ? "수정": "등록"} className="submit-btn-modal"/>
							{selectOne == '' ? ''
							: 
							<input type="reset" value="삭제" onClick={setCalDel} className="reset-btn-modal"/>
							}
						</form>
						</Modal>
						)}
				</div>      //466
			:''
			}
			<Chatbot/>
	</div>
	</div>
    </div>
	</div>
	
  );
}

export default Workout;

