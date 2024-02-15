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


function FindPassword() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [emailCode, setemailCodeCode] = useState('');
  const [emailCodeMatch, setEmailCodeMatch] = useState('');
  const [emailButtonDisabled, setemailButtonDisabled] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    // setPassword(e.target.value);
    e.preventDefault();

    // 이메일 입력 값 가져오기
    const userEmail = e.target.email.value;

    // 인증 코드 입력 값 가져오기
    const inputCode = e.target.emailCodeMatch.value;

    // 새 비밀번호 입력 값 가져오기
    const newPassword = e.target.passwordchk.value;

    // 이메일과 새 비밀번호가 비어 있는지 확인
    if (!userEmail || !newPassword) {
        alert('이메일과 새 비밀번호를 모두 입력해주세요.');
        return;
    }

    // 서버로 전송할 데이터
    const requestData = {
        username: userEmail,       
        newPassword: newPassword
    };

    // 서버로 데이터 전송
    axios.post('/passwordReset', requestData)
        .then(response => {
            // 서버 응답 처리
            console.log(response.data);
            alert('비밀번호가 성공적으로 변경되었습니다.');
            // 로그인 페이지로 이동 또는 다른 작업 수행
        })
        .catch(error => {
            // 에러 처리
            console.error('에러:', error.response.data);
            alert('비밀번호 변경에 실패했습니다. 재시도해주세요.');
        });
  };  


  const handleEmailCode = (e) => {
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
    if(e.target.email.value.length == 0) {alert('이메일을 입력하세요'); return;}
    return;
  };

  return (
    <div style={{paddingBottom:"80px"}}>
        <HeaderTop/>
        <Header/>

        {/* 제목 배경화면 */}
        <Breadcumb title="findpassword" content="Account" subContent="findpassword"/>



        <form className="login-form" onSubmit={handleRegister} method='post' style={{marginTop:"100px"}}>
        <h2 className="login-heading">비밀번호 찾기</h2>
        <h5 className="login-heading">이메일 인증 후 비밀번호를 찾으세요.</h5>
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
            value={emailCodeMatch}
            className="mail-check-input"
            onChange={e => setEmailCodeMatch(e.target.value)}            
            placeholder="인증번호 입력"
          />
          <button
            id="mail-Check-submit"
            className="verification-button-submit"
            style={{ position: 'absolute', right:'5px', top: '30%', transform: 'translateY(-50%)' }}
            onClick={handleCodeCheck}
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
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />        
          <button 
            id="password-Check-submit" 
            className="verification-button-submit pcs"
            onClick={handlePasswordChange}
            style={{ position: 'absolute', right:'5px', top: '30%', transform: 'translateY(-50%)' }} 
            > 수정 
          </button>         
        </div>
       
        
        <div className=" hs"></div>
                
        <input type="submit" value="확인" className="submit-btn subtn" />
        <div className="links">
          <p>
            비밀번호를 기억하셧나요? <a href="/signin">로그인</a>
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