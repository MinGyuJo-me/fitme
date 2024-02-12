import {Link} from 'react-router-dom';
import React from 'react';

function Header() {
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

                                    <li><Link to="/signin">Login</Link></li>
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
  




