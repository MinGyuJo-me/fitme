import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import Image_test from '../../../assets/images/blog-3.jpg';

function Recipe() {
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
                                <h1>Recipe</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html"> Social <i className="fas fa-angle-right"></i><span>Recipe</span></a>
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
        <div className="portfolio-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <div className="sub-title">
                                <h5 style={{fontSize:"40px"}}>찍먹</h5>
                            </div>
                            <div className="main-title">
                                <h2 style={{fontFamily:"Lobster"}}>RECIPE LIST</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="portfolio_nav text-center">
                            <div className="portfolio_menu">
                                <ul className="menu-filtering">
                                    <li className="current_menu_item" data-filter="*">전체</li>
                                    <li data-filter=".physics">카테고리1</li>
                                    <li data-filter=".cemes">카테고리2</li>
                                    <li data-filter=".math">카테고리3</li>
                                    <li data-filter=".maths">카테고리4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row image_load">
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item physics cemes">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/6.jpg')}/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
                                    <h3><a href="blog-details.html">Mula Chash Prokolpo</a></h3>
                                    <span> Vegetable </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item maths cemes math">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/2.jpg')}/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
                                    <h3><a href="blog-details.html">Mula Chash Prokolpo 02</a></h3>
                                    <span> Vegetable </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item math maths">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/3.jpg')} alt=""/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
                                    <h3><a href="blog-details.html">Mula Chash Prokolpo 03</a></h3>
                                    <span> Vegetable </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item math">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/8.jpg')} alt=""/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
                                    <h3><a href="blog-details.html">Mula Chash Prokolpo 04</a></h3>
                                    <span> Vegetable </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item physics maths">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/12.jpg')} alt=""/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
                                    <h3><a href="blog-details.html">Mula Chash Prokolpo 05</a></h3>
                                    <span> Vegetable </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 grid-item cemes maths">
                        <div className="project-single-box">
                            <div className="project-thumb">
                                <img src={require('../../../assets/images/2.jpg')} alt=""/>
                                <div className="project-social-menu">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-photo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-title">
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
        <div className="brand-area">
            <div className="container">
                <div className="row">
                    <div className="owl-carousel brand_list">
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client1.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client5.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
                                    <img src="assets/images/client4.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="single-brand-box">
                                <div className="brand-thumb">
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
        <div className="footer-top-2 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-top-box">
                            <div className="footer-top-title">
                                <h1>Awesome harvest we grow last 10 years</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="single-footer-top-box">
                            <div className="footer-top-button">
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
        <div className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-logo">
                                <img src="assets/images/logo-2.png" alt=""/>
                            </div>
                            <div className="footer-content">
                                <div className="footer-title">
                                    <p>There are many variation of passa Morem Ipsum available, but the in majority have suffered.</p>
                                    <h5>Follow Us:</h5>
                                </div>
                                <div className="footer-icon">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>	
                                        <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>	
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h2>Company Info:</h2>
                                </div>
                                <div className="footer-ico">
                                    <ul>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Our Projects</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>About Us</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Upcoming Events</span></a></li>
                                        <li><a href="#"><i className="fas fa-check"></i><span>Our Services</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h2>Company Info:</h2>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-home"></i>
                                    <p><b>Address</b> <br/> 10 South Building, Dhaka</p>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-phone"></i>
                                    <p><b>Telephone</b> <br/> (922) 3354 2252</p>
                                </div>
                                <div className="footer-icons">
                                    <i className="fa fa-globe"></i>
                                    <p><b>Email:</b> <br/> example@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-box">
                            <div className="footer-content">
                                <div className="footer-title">
                                    <h2>Company Info:</h2>
                                    <p>There are many variation of passa Morem Ipsum available.</p>
                                </div>
                                <form action="https://formspree.io/f/myyleorq" method="POST" id="dreamit-form">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form_box">
                                                <input type="text" name="youe email address" placeholder="youe email address"/>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                            <button type="submit">sign up</button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer-bottom">
                    <div className="col-lg-6 col-md-6">
                        <div className="copy-left-box">
                            <div className="copy-left-title">
                                <h3>Copyright © Agrofarm all rights reserved.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="copy-right-box">
                            <div className="copy-right-title">
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
            <div className="search-popup">
                <button className="close-search style-two"><i className="fa fa-times"></i></button>
                <button className="close-search"><i className="fas fa-arrow-up"></i></button>
                <form method="post" action="#">
                    <div className="form-group">
                        <input type="search" name="search-field" value="" placeholder="Search Here" required=""/>
                        <button type="submit"><i className="fa fa-search"></i></button>
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
        <div className="scroll-area">
            <div className="top-wrap">
                <div className="go-top-btn-wraper">
                    <div className="go-top go-top-button">
                        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        {/*
        <!-- scroll end============  -->
        */}
    </div>
  );
}

export default Recipe;

