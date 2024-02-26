import {Link} from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Header() {

    //로그아웃 처리 로직
    function getCookie(name) {
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

    useEffect(()=>{
        
    },[myCookieValue])

    const handleLogout = () => {

        //로그아웃시 파이어베이스에서 발급한 토큰 삭제
        axios.delete('http://192.168.0.104:8080/api/v1/notifications', {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })

        //로그아웃 시 쿠키에 저장된 토큰 값 삭제 후 로그인 페이지로 이동
        document.cookie = 'Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/signin';
    };

    return (
        <header className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="sticky-header" className="nav-menu">
                            <div className="header-logo">
                                <a href="index.html"><img src="assets/images/logo.png" alt=""/></a>
                                <a className="main_sticky" href="index.html"><img src="assets/images/logo-2.png" alt=""/></a>
                            </div>
                            <div className="header-menu">
                                <ul>
                                    <li>
                                        <Link to="/">Fitme</Link>
                                    </li>

                                    <li>
                                        <Link to="/game">Game</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/game/ranking">Ranking</Link></li>
                                            <li><Link to="/game/room">Room</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link to="/diet">Management</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/diet">Diet</Link></li>
                                            <li><Link to="/workout">Workout</Link></li>
                                        </ul>
                                    </li>


                                    <li><Link to="/community">Social</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/community">Community</Link></li>
                                            <li><Link to="/recipe">찍먹</Link></li>
                                        </ul>
                                    </li>


                                    <li><Link to="/mypage">MyPage</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/mypage">Profile</Link></li>
                                            <li><Link to="/mypage">exercise</Link></li>
                                            <li><Link to="/mypage">diet</Link></li>
                                            <li><Link to="/mypage">Bulletin Board</Link></li>
                                            <li><Link to="/mypage">Youtube Board</Link></li>
                                        </ul>
                                    </li>

                                                                        
                                    <li><Link to="/">chatting</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/">GPT chat</Link></li>
                                            <li><Link to="/messenger">messenger</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/">Alarm</Link>
                                    </li>
                                    {myCookieValue == null ? <li><Link to="/signin">Login</Link></li> : <li><button  onClick={handleLogout}>Logout</button></li>}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;
  




