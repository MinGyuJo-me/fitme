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
var ipAddress = '192.168.0.44';

//이미지서버 연결 
async function imageData(code){
	return await new Promise((resolve,reject)=>{
	  try{
		axios.get(`http://192.168.0.44:5050/image/${code}`)
		.then((response)=>{
			  // console.log(response.data);
			resolve("data:image/png;base64,"+response.data['image']);
		})
	  }
	  catch(err){reject(err)};
	},2000);
  }



function Workout() {
	const [mark, setMark] = useState([]);
	const [selectedWorkout, setSelectedWorkout] = useState('');
	
	//유저 정보
	const [accountData, setAccount ] = useState([]);

	//다이어트 캘린더용
	const [dietCal,setDietCal] = useState();

	//네비게이트 
	const navigate = useNavigate();

	//모달창 업데이트 딜리트 출력
	const [isOpen, setIsOpen] = useState();
	const [selectOne, setSelect ] = useState();

	//하루 데이타
	const [value, onChange] = useState(new Date());
	const [data_, setData] = useState();
	const [data1_, setData1] = useState();
	const [data2_, setData2] = useState();
	const [labels_, setLabels] = useState();
	const [labels1_, setLabels1] = useState();
	const [labels2_, setLabels2] = useState();
    const [workout, setWorkout ] = useState([]);

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
		if(proflieData.accountNo != null) setDietCal(proflieData.accountNo);
		// console.log('data',proflieData);
		if(proflieData.image!=null){
			imageData(proflieData.image).then((test)=>{
			// console.log('1');
				proflieData.image = test;
				setAccount(proflieData);
			})
		}else{
			imageData(1).then((test)=>{
			// console.log('1');
				proflieData.image = test;
				setAccount(proflieData);
			})
		}
		})
		.catch(error => console.log('error',error))
	},[]);
	
	//캘린더 부분 추가
	useEffect(()=>{
		//프로필 코드 
		if(dietCal != null){
		axios.get(`http://${ipAddress}:5000/account/${dietCal}?hobby=diet`)
		.then(response =>{
			//날짜 일정 추가 창
			// console.log(response.data['diet']);
			setMark(response.data['diet']);
			return response.data;
		})
		}
	},[dietCal])

	//하루 데이타
	useEffect(() => {
		setWorkout([]);
		if(dietCal != null){
		  axios.get(`http://${ipAddress}:5000/diet/${dietCal}?date=`+moment(value).format("YYYY-MM-DD")) //<---머지시 50 을 44로 변경
		  .then(response =>{
			  console.log(response.data['foodDiary']);
			  setWorkout(response.data['foodDiary']);
	  
			  var data1_ =[];
			  var labels1_ = [];
			  var data2_ =[];
			  var labels2_ = [];
			  for(let i=0; i<response.data['chart2'].length;i++){
				data1_.push(response.data['chart1'][i].size);
				labels1_.push(response.data['chart1'][i].name);
				data2_.push(response.data['chart2'][i].size);
				labels2_.push(response.data['chart2'][i].name);
			  } 
			  setData(data1_);
			  setLabels(labels1_);
			  setData1(data2_);
			  setLabels1(labels2_);
	  
			  return response.data['chart3'];
			})
		  .then(message =>{
			var data1_ =[];
			var labels1_ = [];
			for(let i=0; i<message.length;i++){
			  data1_.push(message[i].size);
			  // console.log(message[i].size)
			  labels1_.push(message[i].name);
			} 
			setData2(data1_);
			setLabels2(labels1_);
		  });
		}
	  },[value]);


	const toggleModal = (e) => {
		id = e.target.parentElement.children[0].value != null ? e.target.parentElement.children[0] : -1;
		// console.log(id.value)
		setIsOpen(id.value != null ? id.value : -1);
	};

	const handleWorkoutSelect = value => {
		setSelectedWorkout(value);
	  };
	

	const handleImageChange = (image) => {
		setFormData({
		...formData,
		DIET_IMAGE: image, // 이미지 정보를 formData에 추가
		});
	};
	
	const handleSubmit = (e) => {}

	const [formData, setFormData] = useState({
		DESCRIPTION: '',
		FOOD: '',
		FOOD_WEIGHT: '',
		MEMO: '',
		DIET_IMAGE: ''
	  });

	  
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		...formData,
		[name]: value,
		});
		// console.log(formData);
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
										<img src={test[4]} alt="pizza"/>
										<input type='hidden' value={test[0]} />
									</div>
									<div class="blog-btn">
										<a href="#">아침</a>
									</div>
								</div>
								{console.log("test",test[1])}
								<div class="blog-content">
									<div class="blog-left">
										<span>{test[3]}</span>
									</div>
									<h2>{test[1]}</h2>
									<p>{test[2]}</p>
									<p>{test[5]}</p>
									<div class="blog-button">
										<a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				))}
			</OwlCarousel>

			<div>
			<button type="button" className="add-workout-button" onClick={toggleModal}>
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
                  <h2>운동을 추가해 주세요!</h2>
                </div>
                
                {/* <form onSubmit={console.log("post")}> */}
                <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}>
                  {/* {selectOne == '' || selectOne == null ? ''
                    : 
                    // <input type="hidden" value={selectOne[0]}/>
                  } */}
                  <div className="date_picker">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                    <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker 

                    // value={selectOne != null ? selectOne[5] : ''}
                    label="날짜와 시간 설정" 
                    // value={dayjs(selectOne == '' || selectOne == null ? moment(value).format("YYYY-MM-DD 00:00") : selectOne[5])}
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
                    <select name="CATEGORY" value={selectOne != null ? selectOne[3] : ''} onChange={handleInputChange}>
                      <option value='' selected>-- 운동 종류 --</option>
                      <option value="데드리프트">데드리프트(Deadlift)</option>
                      <option value="스쿼트">스쿼트(squat)</option>
                      <option value="벤치프레스">벤치프레스(bench press)</option>
                      <option value="팔굽혀펴기">팔굽혀펴기(Push-up)</option>
                      <option value="윗몸 일으키기">윗몸 일으키기(SitUp)</option>
                    </select>
                    <input type="text" name="DESCRIPTION" 
                    // value={selectOne != null ? selectOne[1] : ''} 
                    placeholder="제목" onChange={handleInputChange} />
                    <input type="number" name="COUNTS" min="1" 
                    // value={selectOne != null ? selectOne[7] : ''} 
                    placeholder="횟수" onChange={handleInputChange} />
                    <input type="number" name="WEIGHT" step="0.01" min="0" 
                    // value={selectOne != null ? selectOne[8] : ''} 
                    placeholder="무게" onChange={handleInputChange} />
                    <input type="text" name="MEMO" 
                    // value={selectOne != null ? selectOne[2] : ''} 
                    placeholder="내용" onChange={handleInputChange} />
                    </div>
                    <input type="submit"  value="확인"
                    // value={selectOne != '' ? "수정": "등록"} 
                    className="submit-btn-modal"/>
                     {/*  {selectOne == '' ? ''
                        : 
                        <input type="reset" value="삭제" onClick={setCalDel} className="reset-btn-modal"/>
                      } */}
                  </form>
                </Modal>
                )}
				</div>
	</div>
	</div>
    </div>
	</div>

  );
}

export default Workout;

