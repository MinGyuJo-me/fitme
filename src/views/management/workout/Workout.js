import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';

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

//npm install axios
import axios from 'axios';


//componants ?????
{/*import Modal from "./modal";*/}

var id = null;
var ipAddress = '192.168.0.110';

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data1 = {
	labels,
	datasets: [
	  {
		label: 'Dataset 1',
		data: [100,200,300,400,500,600],
		borderColor: 'rgb(255, 99, 132)',
		backgroundColor: 'rgba(255, 99, 132, 0.5)',
	  },
	  {
		label: 'Dataset 2',
		data: [600,500,400,300,200,100],
		borderColor: 'rgb(53, 162, 235)',
		backgroundColor: 'rgba(53, 162, 235, 0.5)',
	  },
	],
  };
  
  export const options2 = {
	responsive: true,
	plugins: {
	  legend: {
	  },
	  title: {
		display: true,
		text: 'Chart.js Bar Chart',
	  },
	},
  };
  export const data2 = {
	labels,
	datasets: [
	  {
		label: 'Dataset 1',
		data: [100,200,300,400,500,600],
		backgroundColor: 'rgba(255, 99, 132, 0.5)',
	  },
	  {
		label: 'Dataset 2',
		data: [600,500,400,300,200,100],
		backgroundColor: 'rgba(53, 162, 235, 0.5)',
	  },
	],
  };
  //-------------------------------
  
  
  
  
  const options = { //<Doughnut data={data}  options={options}/>에 적용
	maintainAspectRatio: false, // 필요에 따라 조정 //옆에 태그들 무시?
	
	
	plugins: {
	  
	  legend: {
		
		display: true, //범례 표시여부
		align: 'center',
		position: 'right',
		onClick: 0,
	  },
	},
	
	layout: {
	  padding: {
		  left: 0,
		  right: 100,
		  top: 10,
		  bottom: 10
	  }
	}
  };
  //좋아요
  const testLike = (e) => {
	// var btn = document.querySelector(e.target,' > input');
	var btnLike = e.target.children[0].value;
	var dateLike = e.target.children[1].value;
	console.log('dateLike',dateLike.length)
	// console.log('싫어요',btnLike,':',dateLike);
	// console.log('싫어요',new Date(),':',dateLike);
	// console.log('styled',e.target.style.backgroundColor)
	if(dateLike.length <= 0){
	  axios.post(`http://${ipAddress}:5000/calendarLike/`+btnLike, {
		headers: {
		  'Content-Type': 'multipart/form-data',
		}
	  })
	  e.target.children[1].value = new Date();
	  e.target.style.backgroundColor = 'rgb(255, 0, 200)';
	}else{
	  // console.log('delete');
	  axios.delete(`http://${ipAddress}:5000/calendarLike/`+btnLike, {
		headers: {
		  'Content-Type': 'multipart/form-data',
		}
	  })
	  e.target.style.backgroundColor = 'rgb(96, 177, 89)';
	  e.target.children[1].value = '';
	}
  
  }

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


function Workout() {
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
    </div>
  );
}

export default Workout;

