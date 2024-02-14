// import {Link} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import './Login.css';

const emailRegex = '[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}';
const passwordRegex = '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$';
const LOGIN_API = '/login';

function SignIn() {
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
        // console.log(myCookieValue == null);
        if(myCookieValue != null){ //로그 아웃 확인
          document.cookie = 'Authorization' + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          navigate('/');
        }
      
    
      },[])
    
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
      const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
      });
    
      const usernameRef = useRef(null);
      const passwordRef = useRef(null); 
    
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const validateForm = () => {
        let valid = true;
        const errors = {};
    
        if (!formData.username) {
          errors.username = '이메일을 입력하세요.';
          usernameRef.current.focus();
          valid = false;
        }
    
        if (!formData.password) {
          errors.password = '비밀번호를 입력하세요.';
          passwordRef.current.focus();
          valid = false;
        }
    
        setFormErrors(errors);
        return valid;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
    
        if (!validateForm()) {
          return;
        }
    //   let data = {
    //       username: e.target.children[0].value,
    //       password: e.target.children[2].value
    //     };
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        };
    
        axios.post(LOGIN_API, JSON.stringify(formData), config)
          .then((res) => {
            
            console.log('res', res.data);
            console.log('headers',res.headers);
            navigate('/');
          })
          .catch(err=>{
            e.target.children[e.target.children.length-2].textContent = "이메일/비밀번호가 맞지 않습니다."
            console.log('로그인 실패!!!',);
          })
          ;
      };
    
      const handleSocialLogin = (provider) => {
        // 각 소셜 로그인 OAuth2 인증임
        window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
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

                {/*
        <!--==================================================-->
        <!-- Start breadcumb-area -->
        <!--==================================================-->
        */}
        <div className="breadcumb-area d-flex align-items-center" style={{marginBottom:"100px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
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

        <div className="login-form">
          <h1 className="login-heading">환영합니다!</h1>
          <h2 className="login-heading">LOGIN</h2>
          <form onSubmit={handleSubmit} method='post'>
            <input type="text"name="username"
              value={formData.username}
              onChange={handleInputChange}
              pattern={emailRegex}
              title='이메일 형식으로 입력 해주세요.'
              className="text-field"
              placeholder="Email"
              ref={usernameRef}/>
            <br />
            {formErrors.username && (
              <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.username}</p>
            )}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              // pattern={passwordRegex}
              title='8~12자 & 숫자,영어,특수문자포함되어야합니다.'
              className="text-field"
              placeholder="Password"
              ref={passwordRef}
            /><br />
            {formErrors.password && (
              <p style={{ color: 'red', fontSize: '14px' }}>{formErrors.password}</p>
            )}
            <p style={{ color: 'red', fontSize: '14px' }}></p>
            <input type="submit" value="로그인" className="submit-btn" />
          </form>
          <label htmlFor="remember-check" className="remember-label">
            <input type="checkbox" id="remember-check" /> 아이디 저장하기
          </label>
          <div className="links">
            {/* <a href="#">비밀번호를 잊어버리셨나요?</a><br /> */}
            <a href="#" onClick={(e) =>{ 
              e.preventDefault();
              navigate('/findPassword')
              }}>비밀번호를 잊어버리셨나요?</a><br />
            <p>계정이 없으신가요? <a href="/SignUp">회원가입</a></p>
          </div>
          <div className="hr-sect">또는</div>
          <h3 className="login-heading">다른 서비스로 로그인</h3>
          <div className="btn-social-login-group">
          
          <button className='btn-social-login btn-social-login-google' onClick={() => handleSocialLogin('google')}>
            <i className="xi-3x xi-google"></i>
          </button>
          <button className='btn-social-login btn-social-login-facebook' onClick={() => handleSocialLogin('facebook')}>
            <i className="xi-3x xi-facebook"></i>
          </button>
          <button className='btn-social-login btn-social-login-naver' onClick={() => handleSocialLogin('naver')}>
            <i className="xi-3x xi-naver"></i>
          </button>
          <button className='btn-social-login btn-social-login-kakaotalk' onClick={() => handleSocialLogin('kakao')}>
            <i className="xi-3x xi-kakaotalk text-dark"></i>
          </button>
          </div>
          <p className="agree">
            <span>
              회원가입 시 FitMe의 <a href="#" target="_blank">서비스약관</a> 및
              <br />
              <a href="#" target="_blank">개인정보 처리방침</a>을 확인하였으며 동의합니다
            </span>
          </p>
        </div>
    </div>
  );
}

export default SignIn;