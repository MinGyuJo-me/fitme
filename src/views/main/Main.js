import {Link} from 'react-router-dom';

import React, { useEffect, useLayoutEffect, useState } from 'react';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import $ from 'jquery';
import Wrapper from '../component/Wrapper/Wrapper';

function Main() {
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
        <!-- ============================================================== -->
        <!-- Start - Mobile-Menu- Section -->
        <!-- ============================================================= -->
        */}


    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
            <nav className="itsoft_menu">
                <ul className="nav_scroll">
                    <li><a href="">home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">DEMO 01</a></li>
                            <li><a href="index-2.html">DEMO 02</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">about</a>
                        <ul className="sub-menu">
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="service.html">service</a></li>
                    <li><a href="portfolio.html">gallery</a></li>
                    <li><a href="gallery.html">pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">about us</a></li>
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="#">blog</a>
                        <ul className="sub-menu">
                            <li><a href="blog-grid.html">blog grid view</a></li>
                            <li><a href="blog-list.html">blog list view</a></li>
                            <li><a href="blog-2column.html">blog 2 column</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">contact</a></li>
                </ul>
            </nav>
        </div>
    </div>

    {/*
        <!--==================================================-->
        <!-- 메인 영상
        <!--==================================================-->
    */}
    <div>
        <div className="slider-area style-two align-items-center d-flex">
        <video muted autoPlay loop style={{position:"absolute", width:"100vw", height:"100%", position:"absolute"}}>
            <source src="/videos/main_title.mp4" type="video/mp4"/>
        </video>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-title">
                                <h1 className="text-orange">For your Health <br/> with <span>FitMe</span></h1>
                            </div>
                            <div className="slider-button">
                                <a href="#">Login now<i className="bi bi-arrow-right"></i></a>
                            </div>
                            <div className="slider-btn">
                                <a href="#">About more<i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="slider-content">
                            <div className="slider-thumb">
                                <img src="assets/images/hero-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*
        <!--==================================================-->
        <!-- Start footer-area -->
        <!--==================================================-->
    */}
    <div className="footer-area">
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
                                <h2>Information</h2>
                            </div>
                            <div className="footer-ico">
                                <ul>
                                    <li><a href="#"><span>Our Projects</span></a></li>
                                    <li><a href="#"><span>About Us</span></a></li>
                                    <li><a href="#"><span>Contact Us</span></a></li>
                                    <li><a href="#"><span>Privacy policy</span></a></li>
                                    <li><a href="#"><span>Checkout</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-content">
                            <div className="footer-title">
                                <h2>My Account</h2>
                            </div>
                            <div className="footer-ico">
                                <ul>
                                    <li><a href="#"><span>My Order</span></a></li>
                                    <li><a href="#"><span>Download</span></a></li>
                                    <li><a href="#"><span>Account Details</span></a></li>
                                    <li><a href="#"><span>Address</span></a></li>
                                    <li><a href="#"><span>Lost password</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-box">
                        <div className="footer-content">
                            <div className="footer-title">
                                <h2>Download Our Apps</h2>
                            </div>
                            <div className="footer-discription">
                                <p>Fast and Conventment Access</p>
                            </div>
                            <div className="footer-thumb">
                                <img src="assets/images/google-play.png" alt=""/>
                            </div>
                            <div className="footer-img">
                                <img src="assets/images/app-store.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start copy-right-area -->
        <!--==================================================-->
    */}
    <div className="copy-right-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                        <div className="copy-rights-titles">
                            <h3>Copyright © Agrofarm -Dream IT. all rights reserved.</h3>
                        </div>
                </div>
                <div className="col-lg-6">
                    <div className="copy-right-thumb">
                        <img src="assets/images/payments.png" alt=""/>
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
    </div>
    </Wrapper>
  );
}

export default Main;

