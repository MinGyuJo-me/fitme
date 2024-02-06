import {Link} from 'react-router-dom';
import React, {useEffect} from 'react';
import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import Image_test from '../../../assets/images/blog-3.jpg';
import './Community.css';
import $ from 'jquery';
import Wrapper from '../../component/Wrapper/Wrapper';

function Community() {
    useEffect(()=>{
        $('body').addClass('loaded');
    });

  return (
    <Wrapper>
        <div>
            <HeaderTop/>
            <Header/>

            <div className="loader-wrapper">
                <div className="loader"></div>
                <div className="loder-section left-section"></div>
                <div className="loder-section right-section"></div>
            </div>

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
                                <div class="breadcumb-content-text">
                                <a href="index.html"> Social <i class="fas fa-angle-right"></i><span>Community</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            {/*
            <!--==================================================-->
            <!-- Start blog-area -->
            <!--==================================================-->
            */}
            <div class="blog-area style-two">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12 friendlist">
                            <div class="blog-single-box upper friend-icon-box">
                                <div className='friend-icon-item'>
                                    <div className='blog-icon bi1'>
                                    </div>
                                    <div className='blog-icon-description'>
                                        조동훈
                                    </div>
                                </div>
                                <div className='friend-icon-item'>
                                    <div className='blog-icon bi1'>
                                    </div>
                                    <div className='blog-icon-description'>
                                        조동훈
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-8">


                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-content">
                                    <div class="blog-left bl1">
                                        <div className="blog-icon">
                                        </div>
                                        <div className='blog-description'>
                                            <a href="#">Jo-dong-hun</a>
                                            <a href="#">서울시 강남구 서초동 서초대로</a>
                                            <span>January 27, 2023</span>
                                        </div>

                                        <div className='blog-post-detail'>
                                            <div className='blog-post-description'>
                                                <div className="blog-post-description-title">POST</div>
                                                <div className="blog-post-description-content">2023</div>
                                            </div>
                                            <div className='blog-post-description'>
                                                <div className="blog-post-description-title">Follower</div>
                                                <div className="blog-post-description-content">2023</div>
                                                <button className="blog-post-description-button">친구 추가</button>
                                            </div>
                                            <div className='blog-post-description'>
                                                <div className="blog-post-description-title">Following</div>
                                                <div className="blog-post-description-content">2023</div>
                                                <button className="blog-post-description-button">친구 추가</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-12 col-sm-12">

                            <div class="blog-single-box upper">
                            <div class="blog-left">
                                <div className="blog-icon">
                                </div>
                                    <div className='blog-description'>
                                        <a href="#">Jo-dong-hun</a>
                                        <a href="#">서울시 강남구 서초동 서초대로</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                </div>
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-0.jpg')} alt=""/>
                                    <div class="blog-btn">
                                        <div>1/5</div>
                                    </div>
                                </div>
                                <div class="blog-content">



                                    <h2><a href="blog-details.html">이번에 새로 산 차.</a></h2>
                                    
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat
                                        dsfdsafadsfadsfadsfdasdsfdsafadsfads
                                    </p>



                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                        <div className="blog-button-container">
                                            <div className='blog-button-item'></div>
                                            <div className='blog-button-item'></div>
                                            <div className='blog-button-item'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-1.jpg')} alt=""/>
                                    <div class="blog-btn">
                                        <a href="#">Exercise</a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-left">
                                        <a href="#">agrofarm</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                    <h2><a href="#">Amount of Freak Bread or Other Fruits</a></h2>
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat</p>
                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-2.jpg')} alt=""/>
                                    <div class="blog-btn">
                                        <a href="#">Diet</a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-left">
                                        <a href="#">agrofarm</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                    <h2><a href="blog-details.html">Spicey choose plush amazing</a></h2>
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat</p>
                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-3.jpg')} alt=""/>
                                    <div class="blog-btn">
                                        <a href="#">common</a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-left">
                                        <a href="#">agrofarm</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                    <h2><a href="blog-details.html">Made confident bigger chance as.</a></h2>
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat</p>
                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-4.jpg')}/>
                                    <div class="blog-btn">
                                        <a href="#">exercise</a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-left">
                                        <a href="#">agrofarm</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                    <h2><a href="blog-details.html">Simple and Delicious Keto Salads</a></h2>
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat</p>
                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                            <div class="blog-single-box upper">
                                <div class="blog-thumb">
                                    <img src={require('../../../assets/images/blog-5.jpg')} alt=""/>
                                    <div class="blog-btn">
                                        <a href="#">Exercise</a>
                                    </div>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-left">
                                        <a href="#">agrofarm</a>
                                        <span>January 27, 2023</span>
                                    </div>
                                    <h2><a href="blog-details.html">Simple and Delicious Keto Salads</a></h2>
                                    <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat</p>
                                    <div class="blog-button">
                                        <a href="#">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        
                        <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="sideber-box">
                                <div class="sideber-content">
                                    <div class="sideber-title">
                                        <h3>Friends</h3>
                                    </div>
                                </div>
                                <div class="tag-body">
                                    <ul>
                                        <li>
                                            <div className="friend-icon">
                                                ddd
                                            </div>
                                            <a href="#">Exercise</a>
                                        </li>
                                        <li><a href="#">Diet</a></li>
                                        <li><a href="#">Common</a></li>
                                    </ul>
                                </div>
                            </div>


                            <div class="sideber-search-box">
                                <div className="sidebar-map-box">

                                </div>
                                
                                <div class="sidebar-search">
                                    <input  class="form-control" type="text" name="search" placeholder="Search...."/>
                                    <button class="button" type="submit"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <!--==================================================-->
            <!-- Start footer_section -->
            <!--==================================================-->
            */}
            <div class="footer_section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="single-footer-box">
                                <div class="footer-logo">
                                    <img src="assets/images/logo-2.png" alt=""/>
                                </div>
                                <div class="footer-content">
                                    <div class="footer-title">
                                        <p>There are many variation of passa Morem Ipsum available, but the in majority have suffered.</p>
                                        <h5>Follow Us:</h5>
                                    </div>
                                    <div class="footer-icon">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>	
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>	
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-footer-box">
                                <div class="footer-content">
                                    <div class="footer-title">
                                        <h2>Company Info:</h2>
                                    </div>
                                    <div class="footer-ico">
                                        <ul>
                                            <li><a href="#"><i class="fas fa-check"></i><span>Our Projects</span></a></li>
                                            <li><a href="#"><i class="fas fa-check"></i><span>About Us</span></a></li>
                                            <li><a href="#"><i class="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                            <li><a href="#"><i class="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                            <li><a href="#"><i class="fas fa-check"></i><span>Our Services</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-footer-box">
                                <div class="footer-content">
                                    <div class="footer-title">
                                        <h2>Company Info:</h2>
                                    </div>
                                    <div class="footer-icons">
                                        <i class="fa fa-home"></i>
                                        <p><b>Address</b> <br/> 10 South Building, Dhaka</p>
                                    </div>
                                    <div class="footer-icons">
                                        <i class="fa fa-phone"></i>
                                        <p><b>Telephone</b> <br/> (922) 3354 2252</p>
                                    </div>
                                    <div class="footer-icons">
                                        <i class="fa fa-globe"></i>
                                        <p><b>Email:</b> <br/> example@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="single-footer-box">
                                <div class="footer-content">
                                    <div class="footer-title">
                                        <h2>Company Info:</h2>
                                        <p>There are many variation of passa Morem Ipsum available.</p>
                                    </div>
                                    <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12">
                                                <div class="form_box">
                                                    <input type="text" name="youe email address" placeholder="youe email address"/>
                                                </div>
                                            </div>
                                            <div class="form-button">
                                                <button type="submit">sign up</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div id="status"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row footer-bottom">
                        <div class="col-lg-6 col-md-6">
                            <div class="copy-left-box">
                                <div class="copy-left-title">
                                    <h3>Copyright © Agrofarm all rights reserved.</h3>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="copy-right-box">
                                <div class="copy-right-title">
                                    <ul>
                                        <li><a href="#"><span>Terms & Condition</span></a></li>
                                        <li><a href="#"><span>Privacy Policy</span></a></li>
                                        <li><a href="#"><span>Contact Us</span></a></li>
                                    </ul>															
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            {/*
            <!--==================================================-->
            <!----- Start Search Popup Area ----->
            <!--==================================================-->
            */}
                <div class="search-popup">
                    <button class="close-search style-two"><i class="fa fa-times"></i></button>
                    <button class="close-search"><i class="fas fa-arrow-up"></i></button>
                    <form method="post" action="#">
                        <div class="form-group">
                            <input type="search" name="search-field" value="" placeholder="Search Here" required=""/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            {/*
            <!--==================================================-->
            <!----- Start Search Popup Area ----->
            <!--==================================================-->
            */}

            {/*
            <!-- scroll strat============  -->
            */}
            <div class="scroll-area">
                <div class="top-wrap">
                    <div class="go-top-btn-wraper">
                        <div class="go-top go-top-button">
                            <i class="fa fa-angle-double-up" aria-hidden="true"></i>
                            <i class="fa fa-angle-double-up" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <!-- scroll end============  -->
            */}
        </div>
    </Wrapper>
  );
}

export default Community;

