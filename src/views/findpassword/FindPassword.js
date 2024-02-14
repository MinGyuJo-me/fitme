
import {Link} from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/Register.css';
import './findPassword.css'

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';

const emailRegex = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}';
const passwordRegex = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$';
const pnumRegex = '^\\d{11}$';

function FindPassword() {
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const formData = new FormData();
  const [userEmail, setUserEmail] = useState('');
  const [emailCode, setemailCodeCode] = useState('');
  const [emailCodeMatch, setEmailCodeMatch] = useState(true);
  const [emailButtonDisabled, setemailButtonDisabled] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };  
  let addressChk = 0;
  const handleOpenDaumPost = () => {
    addressChk = 1;
    setPopup(true);
  };

  const handleEmailCode = () => {
    axios.get(`/user/mailCheck?email=${userEmail}`)
      .then(response => {
        console.log('응답:', response.data);
        setemailCodeCode(response.data);
        alert('인증 코드가 전송되었습니다.');
      })
      .catch(error => {
        console.error('에러:', error);
        alert('인증 코드 전송에 실패했습니다.');
      });
  };
  const handleCodeCheck = () => {
    const inputCode = document.getElementById('verificationCodeInput').value;

    if (inputCode === emailCode) {
      setEmailCodeMatch(true);
      alert('인증 코드가 일치합니다!');
      setemailButtonDisabled(true);
    } else {
      setEmailCodeMatch(false);
      alert('인증 코드가 일치하지 않습니다. 다시 시도해주세요.');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(addressChk == 1) return;
    //유효성 체크
    if(e.target.name.value.length == 0){alert('id'); return;}
    if(e.target.email.value.length == 0) {alert('email'); return;}
    if(e.target.password.value.length == 0) {alert('password'); return;}
    if(e.target.passwordchk.value !== e.target.password.value) {alert('passwordchk'); return;}

    // var child = e.target.children;
    //보낼 값
    formData.append('name', e.target.name.value);
    formData.append('username', e.target.email.value);
    formData.append('password', e.target.password.value);    
    axios.post(`/joinMember`, formData, {
      // axios.post(`http://192.168.0.44:3000/joinMember`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert('성공');
        navigate('/signin');
      })
      .catch((error) => {
        console.error('서버 오류:', error);
        alert('에러');
      });
    
    return;


    // 비밀번호 확인
    const passwordChk = formData.get('passwordchk');

    if (password !== passwordChk) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    // FormData 확인
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  };

  return (
    <div >
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
        <div class="breadcumb-area d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breacumb-content">
                            <div class="breadcumb-title">
                                <h1>Community</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html"> Social <i className="fas fa-angle-right"></i><span>Community</span></a>
                            </div>
                        </div>
                    </div>
               
               </div>
            </div>
        </div>
        <form className="login-form lg-f" onSubmit={handleRegister} method='post'>
        <h2 className="login-heading" >비밀번호 찾기</h2>
        <h5 className="login-heading">다양한 서비스를 즐겨보세요!</h5>
        <br />
        <div id="info__email">
          <input
            type="text"
            name="email"
            pattern={emailRegex}
            title="이메일 형식으로 입력하세요."
            className="text-field"
            placeholder="이메일"
          />

          <button id="mail-Check-Btn" 
                  className="verification-button" 
                  onClick={handleEmailCode}
                  disabled={emailButtonDisabled}
                  >인증
          </button>
        </div>

        <div style={{ position: 'relative' }}>
          <input
            type="text"
            id="emailCodeInput"
            className="mail-check-input mci"
            placeholder="인증번호 입력"
            onBlur={handleCodeCheck}
          />
            <button id="mail-Check-submit" 
            className="verification-button-submit mcs">확인</button>
        </div>

        <input
          type="password"
          name="password"
          pattern={passwordRegex}
          title="8~12자 & 숫자,영어,특수문자가 포함되어야 합니다."
          className="text-field"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="password" name="passwordchk" className="text-field" placeholder="비밀번호 확인" />
        {!passwordMatch && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '-10px' }}>비밀번호가 일치하지 않습니다.</p>
        )}
      </form>
    </div>
  );
}
export default FindPassword;