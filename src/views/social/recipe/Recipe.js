import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import Image_test from '../../../assets/images/blog-3.jpg';
import Wrapper from '../../component/Wrapper/Wrapper';

function Recipe() {
  return (
    <Wrapper>
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
            <div class="breadcumb-area d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breacumb-content">
                                <div class="breadcumb-title">
                                    <h1>Recipe</h1>
                                </div>
                                <div class="breadcumb-content-text">
                                <a href="index.html"> Social <i class="fas fa-angle-right"></i><span>Recipe</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <!--==================================================-->
            <!-- Start  portfolio Area -->
            <!--==================================================-->
            */}
            <div class="portfolio-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <div class="sub-title">
                                    <h5 style={{fontSize:"40px"}}>찍먹</h5>
                                </div>
                                <div class="main-title">
                                    <h2 style={{fontFamily:"Lobster"}}>RECIPE LIST</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <div class="portfolio_nav text-center">
                                <div class="portfolio_menu">
                                    <ul class="menu-filtering">
                                        <li class="current_menu_item" data-filter="*">전체</li>
                                        <li data-filter=".physics">카테고리1</li>
                                        <li data-filter=".cemes">카테고리2</li>
                                        <li data-filter=".math">카테고리3</li>
                                        <li data-filter=".maths">카테고리4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row image_load">
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item physics cemes">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/6.jpg')}/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item maths cemes math">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/2.jpg')}/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo 02</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item math maths">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/3.jpg')} alt=""/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo 03</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item math">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/8.jpg')} alt=""/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo 04</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item physics maths">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/12.jpg')} alt=""/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo 05</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 grid-item cemes maths">
                            <div class="project-single-box">
                                <div class="project-thumb">
                                    <img src={require('../../../assets/images/2.jpg')} alt=""/>
                                    <div class="project-social-menu">
                                        <ul>
                                            <li><a href="#"><i class="fa fa-photo"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="project-content">
                                    <div class="project-title">
                                        <h3><a href="blog-details.html">Mula Chash Prokolpo 02</a></h3>
                                        <span> Vegetable </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <!--==================================================-->
            <!-- Start brand-area -->
            <!--==================================================-->
            */}
            <div class="brand-area">
                <div class="container">
                    <div class="row">
                        <div class="owl-carousel brand_list">
                            <div class="col-lg-12">
                                <div class="single-brand-box">
                                    <div class="brand-thumb">
                                        <img src="assets/images/client1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-brand-box">
                                    <div class="brand-thumb">
                                        <img src="assets/images/client2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-brand-box">
                                    <div class="brand-thumb">
                                        <img src="assets/images/client5.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-brand-box">
                                    <div class="brand-thumb">
                                        <img src="assets/images/client4.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="single-brand-box">
                                    <div class="brand-thumb">
                                        <img src="assets/images/client5.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <!--==================================================-->
            <!-- Start footer-top-area -->
            <!--==================================================-->
            */}
            <div class="footer-top-2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="single-footer-top-box">
                                <div class="footer-top-title">
                                    <h1>Awesome harvest we grow last 10 years</h1>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="single-footer-top-box">
                                <div class="footer-top-button">
                                    <a href="#">Discover More</a>
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

export default Recipe;

