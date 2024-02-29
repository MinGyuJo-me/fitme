import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import './MyPageSidebar.css';
import $ from 'jquery'

function MyPageSidebar() {

    const MenuSlide = (e) =>{
        if($(e.target).hasClass("active")){
        }
        else{
            $(".sidebar-submenu").slideUp();
            $(".sidebar-dropdown").removeClass("active");
            $(e.target).addClass("active");
            $(e.target).find(".sidebar-submenu").slideDown();
        }
    }

    $("#close-sidebar").on("click",function() {
            $(".page-wrapper").removeClass("toggled");
            $(".page-wrapper").css("width","0px");
        });

        $("#show-sidebar").on("click",function() {
            $(".page-wrapper").addClass("toggled");
            $(".page-wrapper").css("width","260px");
    });



    return (
        <div className='sidebar-toggle-mode'>
            <div className="page-wrapper chiller-theme">
                <a id="show-sidebar" className="btn btn-sm btn-dark">
                <i className="fas fa-bars"></i>
                </a>
            <nav id="sidebar" className="sidebar-wrapper">
                <div className='absolute-position-menu'>

                
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                    {/*-- 메인화면으로 이동 링크 걸 예정 --*/}
                    <Link to="/">FITME</Link>
                    
                    {/*-- 사이드바 토글 jquery --*/}
                    <div id="close-sidebar">
                        <i className="fas fa-times"></i>
                    </div>
                    </div>
                    <div className="sidebar-header">
                    {/*-- 사용자 프로필 --*/}
                    <div className="user-pic">
                        <img className="img-responsive img-rounded" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="User picture"/>
                    </div>
                    {/*-- 사용자 이름 정보 --*/}
                    <div className="user-info">
                        <span className="user-name">Jo
                        <strong>Dong-hun</strong>
                        </span>
                        <span className="user-status">
                        <i className="fa fa-circle"></i>
                        <span>Online</span>
                        </span>
                    </div>
                    </div>
                    {/*-- sidebar-header --*/}
                    <div className="sidebar-search" style={{padding:"0px"}}>
                        <div className="input-group">
                            <input type="text" className="form-control search-menu" placeholder="Search..."/>
                            <button className="sidebar-button-style">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    {/*-- sidebar-header --*/}
                    <div className="sidebar-menu">
                    <ul>
                        <li className="sidebar-header-menu">
                        <span>Menu</span>
                        </li>
                        {/*-- 대메뉴 영역  --*/}
                        <li className="sidebar-dropdown"  onClick={MenuSlide}>
                        <a>
                            <i className="fa-solid fa-user"></i>
                            <span>User</span>
                        </a>
                        <div className="sidebar-submenu">
                            <ul>
                            <li>
                                <span>
                                    Profile
                                </span>
                            </li>
                            <li>
                                <span>
                                    Inbody
                                </span>
                            </li>
                            </ul>
                        </div>
                        </li>


                        {/*--------- 대메뉴 영역  ---------*/}
                        <li className="sidebar-dropdown"  onClick={MenuSlide}>
                            <a>
                                <i className="fa-solid fa-chart-pie"></i>
                                <span>Statistic</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <span>
                                            Game
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Workout
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Diet
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Calories
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/*---------------------------------------------------*/}



                        {/*--------- 대메뉴 영역  ---------*/}
                        <li className="sidebar-dropdown" onClick={MenuSlide}>
                            <a>
                                <i className="fa-solid fa-box"></i>
                                <span>MyBox</span>
                            </a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li>
                                        <span>
                                            Bulletin Board
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Youtube
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/*---------------------------------------------------*/}
                        
                        
                        
                        <li className="sidebar-header-menu">
                        <span>Extra</span>
                        </li>
                        <li>
                        <a href="#">
                            <i className="fa fa-book"></i>
                            <span>Documentation</span>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>


            {/*----------------- 사이드바 밑 아이콘 부분들 --------------*/}
            <div className="sidebar-footer">
                <a href="#">
                <i className="fa fa-bell"></i>
                {/*----------------- 사이드바 밑 아이콘 (알람) --------------*/}
                <span className="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                <i className="fa fa-envelope"></i>
                {/*----------------- 사이드바 밑 아이콘 (메세지) --------------*/}
                <span className="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                <i className="fa fa-cog"></i>
                {/*----------------- 사이드바 밑 아이콘 (다크모드 설정) --------------*/}
                <span className="badge-sonar"></span>
                </a>
            </div>
            </nav>
            </div>
        </div>
    );
  }
  
  export default MyPageSidebar;
  




