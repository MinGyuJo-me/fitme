import {Link} from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../signup/Register.css';
import './findPassword.css'

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import Breadcumb from '../component/Breadcumb/Breadcumb';

const emailRegex = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}';
const passwordRegex = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$';
const pnumRegex = '^\\d{11}$';

function FindPassword() {
  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();
  const formData = new FormData();
  const [userEmail, setUserEmail] = useState('');
  const [emailCode, setemailCodeCode] = useState('');
  const [emailCodeMatch, setEmailCodeMatch] = useState(true);
  const [emailButtonDisabled, setemailButtonDisabled] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };  


  const handleEmailCode = () => {
    axios.get(`/mailCheck?email=${userEmail}`)
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
    //유효성 체크
    if(e.target.email.value.length == 0) {alert('email'); return;}
    if(e.target.password.value.length == 0) {alert('password'); return;}
    if(e.target.passwordchk.value !== e.target.password.value) {alert('passwordchk'); return;}

    console.log(document.querySelector('input[name="inter"]:checked') == null);

    // var child = e.target.children;
    //보낼 값
    formData.append('username', e.target.email.value);
    formData.append('password', e.target.password.value);    

    axios.post(`/joinMember`, formData, {
      // axios.post(`http://192.168.0.118:3000/joinMember`, formData, {
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
    <div style={{paddingBottom:"80px"}}>
        <HeaderTop/>
        <Header/>

        {/*
        <div className="loader-wrapper">
            <div className="loader"></div>
            <div className="loder-section left-section"></div>
            <div className="loder-section right-section"></div>
        </div>
        */}

        {/* 제목 배경화면 */}
        <Breadcumb title="findpassword" content="Account" subContent="findpassword"/>



        <form className="login-form" onSubmit={handleRegister} method='post' style={{marginTop:"100px"}}>
        <h2 className="login-heading">비밀번호 찾기</h2>
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
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
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
          />
          <button
            id="mail-Check-submit"
            className="verification-button-submit mcs"
            style={{ position: 'absolute', right:'5px', top: '30%', transform: 'translateY(-50%)' }}
          >
            확인
          </button>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            type="password" 
            name="passwordchk" 
            className="text-field" 
            placeholder="비밀번호 수정" 
          />        
          <button 
            id="password-Check-submit" 
            className="verification-button-submit pcs"
            style={{ position: 'absolute', right:'5px', top: '30%', transform: 'translateY(-50%)' }} 
            > 수정 
          </button>
          {!passwordMatch && (
            <p style={{ color: 'red', fontSize: '14px', marginTop: '-10px' }}>비밀번호가 일치하지 않습니다.</p>
          )}
        </div>
       

       
        
        <div className=" hs"></div>
                
        <input type="submit" value="확인" className="submit-btn subtn" />
        <div className="links">
          <p>
            이미 계정이 있으신가요? <a href="/signin">로그인</a>
          </p>
        </div>
        <p className="agree">
          <span>
            회원 가입 시, FitMe의 <a href="#" target="_blank">이용 약관</a> 및
            <br />
            개인정보 처리 방침에 동의했습니다.<br/> <a href="#" target="_blank">개인정보 처리 방침</a>
          </span>
        </p>
      </form>
    </div>
  );
}
export default FindPassword