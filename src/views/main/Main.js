import {Link} from 'react-router-dom';
import React from 'react';


import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';



function Main() {
  return (
    <div>
        <HeaderTop/>
        <Header/>

        {/*
        <div class="loader-wrapper">
            <div class="loader"></div>
            <div class="loder-section left-section"></div>
            <div class="loder-section right-section"></div>
        </div>
        */}

        {/*
        <!-- ============================================================== -->
        <!-- Start - Mobile-Menu- Section -->
        <!-- ============================================================= -->
        */}


    <div class="mobile-menu-area d-sm-block d-md-block d-lg-none ">
        <div class="mobile-menu">
            <nav class="itsoft_menu">
                <ul class="nav_scroll">
                    <li><a href="">home</a>
                        <ul class="sub-menu">
                            <li><a href="index.html">DEMO 01</a></li>
                            <li><a href="index-2.html">DEMO 02</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">about</a>
                        <ul class="sub-menu">
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="service.html">service</a></li>
                    <li><a href="portfolio.html">gallery</a></li>
                    <li><a href="gallery.html">pages</a>
                        <ul class="sub-menu">
                            <li><a href="about.html">about us</a></li>
                            <li><a href="team.html">our farmers</a></li>
                            <li><a href="service.html">our service</a></li>
                            <li><a href="portfolio.html"> Gallery</a></li>
                            <li><a href="contact.html">contact us</a></li>
                        </ul>
                    </li>
                    <li><a href="#">blog</a>
                        <ul class="sub-menu">
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
        <!-- Start  slider Area -->
        <!--==================================================-->
    */}
    <div class="owl-carousel pb-next slider_list">
        <div class="slider-area style-two align-items-center d-flex">
        <video muted autoPlay loop style={{position:"absolute", width:"100%", height:"100%"}}>
            <source src="/videos/main_title.mp4" type="video/mp4"/>
        </video>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="slider-content">
                            <div class="slider-title">
                                <h1 className="text-orange">For your Health <br/> with <span>FitMe</span></h1>
                            </div>
                            <div class="slider-button">
                                <a href="#">Login now<i class="bi bi-arrow-right"></i></a>
                            </div>
                            <div class="slider-btn">
                                <a href="#">About more<i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="slider-content">
                            <div class="slider-thumb">
                                <img src="assets/images/hero-img.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider-area upper align-items-center d-flex">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6">
                        <div class="slider-content">
                            <div class="slider-thumb">
                                <img src="../../assets/images/cat.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="slider-content">
                            <div class="slider-title">
                                <h3>100% Organic food served</h3>
                                <h1>we are the <span>best</span> <br/> Service providers</h1>
                                <p>Authoritatively maintain turnkey processes before distinctive our  food <br/> Efficiently more facilitate ethical imperatives</p>
                            </div>
                            <div class="slider-button">
                                <a href="#">Shop now <i class="bi bi-arrow-right"></i></a>
                            </div>
                            <div class="slider-btn">
                                <a href="#">About us <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  feature-area -->
        <!--==================================================-->
    */}
    <div class="feature-area style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <div class="main-title">
                            <h2></h2>
                        </div>
                    </div>
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>Featured Categories</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="owl-carousel feature_list">
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="../../assets/images/cat2.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Soft Drinks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat4.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Eggs & Dairy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat1.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Vegetables</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat5.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Organic Fish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat4.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Eggs & Dairy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat1.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Vegetables</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-6">
                        <div class="single-feature-box">
                            <div class="feature-content">
                                <div class="feature-thumb">
                                    <img src="assets/images/cat5.png" alt=""/>
                                </div>
                                <div class="feature-title">
                                    <a href="#">Organic Fish</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  offer-area -->
        <!--==================================================-->
    */}
    <div class="offer-area style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="single-offer-box style-one">
                        <div class="offer-content">
                            <div class="offer-title">
                                <h2>Get 15% Off all Vegitables</h2>
                            </div>
                            <div class="offer-titles">
                                <h3>Fresh Vegetables And Organic Fruits</h3>
                            </div>
                        </div>
                        <div class="offer-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="single-offer-box style-two">
                        <div class="offer-content">
                            <div class="offer-title">
                                <h2>Get 10% Off all Fruits</h2>
                            </div>
                            <div class="offer-titles">
                                <h3>Fresh Vegetables And Organic Fruits</h3>
                            </div>
                        </div>
                        <div class="offer-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start products -area -->
        <!--==================================================-->
    */}
    <div class="product-area style-two">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        <div class="owl-carousel product_list">
                            <div class="col-lg-12 col-md-6">
                                <div class="single-product upper">
                                    <div class="product-thumb">
                                        <img src="assets/images/product-4.jpg" alt=""/>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-category">
                                            <a href="#">Vegetables</a>
                                        </div>
                                        <div class="product-title">
                                            <h2><a href="#">Taza Palm Fruit</a></h2>
                                        </div>
                                        <div class="product-rating">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-half"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="single-product upper">
                                    <div class="product-thumb">
                                        <img src="assets/images/product-1.jpg" alt=""/>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-category">
                                            <a href="#">Dry Foods</a>
                                        </div>
                                        <div class="product-title">
                                            <h2><a href="#">Bangladeshi Papaya</a></h2>
                                        </div>
                                        <div class="product-rating">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="single-product upper">
                                    <div class="product-thumb">
                                        <img src="assets/images/product-3.jpg" alt=""/>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-category">
                                            <a href="#">Fresh Fruits</a>
                                        </div>
                                        <div class="product-title">
                                            <h2><a href="#">Fresh Strawberry</a></h2>
                                        </div>
                                        <div class="product-rating">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-half"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="single-product upper">
                                    <div class="product-thumb">
                                        <img src="assets/images/product-1.jpg" alt=""/>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-category">
                                            <a href="#">Dry Foods</a>
                                        </div>
                                        <div class="product-title">
                                            <h2><a href="#">Bangladeshi Papaya</a></h2>
                                        </div>
                                        <div class="product-rating">
                                            <ul>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="singles-products">
                        <div class="products-content">
                            <div class="products-title">
                                <h4>Agrofarm</h4>
                                <h2>50% OFF</h2>
                                <span>Featured Products</span>
                            </div>
                        </div>
                        <div class="product-button">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start  coundown-area-->
        <!--==================================================-->
    */}
    <div class="about-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="about-images">
                        <img src="assets/images/about-img.png" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>Fresh Vegetable Everyday</h2>
                        </div>
                    </div>
                    <div class="abouts-content">
                        <div class="abouts-titles">
                            <h2>Your Best Online Organic Food Recipes agrofarm</h2>
                        </div>
                        <div class="abouts-discription">
                            <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper. Amprey grunion. Walleye poolfish sand butterfly ray stream catfish jewfish, Spanish.</p>
                        </div>
                        <div class="about-tmbs">
                            <img src="assets/images/author-img.png" alt=""/>
                        </div>
                        <div class="author-name">
                            <h2>John Smith</h2>
                            <span>CEO and Founder</span>
                        </div>
                        <div class="signature">
                            <img src="assets/images/signature.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*
        <!--==================================================-->
        <!-- Start portfolio area -->
        <!--==================================================-->
    */}
        <div class="portfolio_area pt-80 pb-70" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="portfolio_nav">
                            <div class="portfolio_menu">
                                <ul class="menu-filtering">
                                    <li class="current_menu_item" data-filter="*">All Products</li>
                                    <li data-filter=".physics" >Dry Foods</li>
                                    <li data-filter=".cemes" >Fresh Fruits</li>
                                    <li data-filter=".math" >Vegetables</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row image_load">
                    <div class="col-lg-3 col-md-6 col-sm-12 grid-item physics math">
                        <div class="single-product">
                        <div class="product-thumb">
                            <img src="assets/images/product-4.jpg" alt=""/>
                            <div class="product-icon">
                                <ul>
                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-category">
                                <a href="#">Vegetables</a>
                            </div>
                            <div class="product-title">
                                <h2><a href="#">Taza Palm Fruit</a></h2>
                            </div>
                            <div class="product-price">
                                <h3>56.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 grid-item cemes">
                        <div class="single-product">
                        <div class="product-thumb">
                            <img src="assets/images/product-3.jpg" alt=""/>
                            <div class="product-icon">
                                <ul>
                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-category">
                                <a href="#">Fresh Fruits</a>
                            </div>
                            <div class="product-title">
                                <h2><a href="#">Fresh Strawberry</a></h2>
                            </div>
                            <div class="product-price">
                                <h3>12.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 grid-item cemes">
                        <div class="single-product">
                        <div class="product-thumb">
                            <img src="assets/images/product-1.jpg" alt=""/>
                            <div class="product-icon">
                                <ul>
                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-category">
                                <a href="#">Dry Foods</a>
                            </div>
                            <div class="product-title">
                                <h2><a href="#">Bangladeshi Papaya</a></h2>
                            </div>
                            <div class="product-price">
                                <h3>50.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 grid-item cemes math">
                        <div class="single-product">
                        <div class="product-thumb">
                            <img src="assets/images/product-2.jpg" alt=""/>
                            <div class="product-icon">
                                <ul>
                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                    <li><a href="#"><i class="fa fa-cart-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="product-content">
                            <div class="product-category">
                                <a href="#">Fresh Fruits</a>
                            </div>
                            <div class="product-title">
                                <h2><a href="#">Taza & Fresh Orange</a></h2>
                            </div>
                            <div class="product-price">
                                <h3>30.00৳ </h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/*
            <!--==================================================-->
            <!-- Start  coundown-area  style-two-->
            <!--==================================================-->
        */}
    <div class="countdown-area style-two">
        <div class="container">
            <div class="row backg">
                <div class="col-lg-6 col-md-6">
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>Best Deals This Week</h2>
                            <p>Ballan wrasse climbing amur pike Arctic char of the organic <br/> lamprey grunion. Walleye poolfish sandition done.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div id="countdown">
                        <ul>
                            <li><span id="days"></span>days</li>
                            <li><span id="hours"></span>Hours</li>
                            <li><span id="minutes"></span>Minutes</li>
                            <li><span id="seconds"></span>Seconds</li>
                        </ul>
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
    <div class="testimonials-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>What Our Clients Say</h2>
                        </div>
                        <div class="testi_title">
                            <h2>“Agrofarm! is the Real and Best Organic Store”</h2>
                        </div>
                    </div>
                    <div class="owl-carousel testis_lists">
                        <div class="testi_content">
                            <div class="testi_title">
                                <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper.</p>
                            </div>
                            <div class="testi_thumb">
                                <img src="assets/images/project5.jpg" alt=""/>
                            </div>
                            <div class="client-info">
                                <h2>David Alexon</h2>
                                <span>Manager</span>
                            </div>
                            <div class="testi_img">
                                <img src="assets/images/quote.png" alt=""/>
                            </div>
                        </div>
                        <div class="testi_content">
                            <div class="testi_title">
                                <p>Ballan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper.</p>
                            </div>
                            <div class="testi_thumb">
                                <img src="assets/images/project5.jpg" alt=""/>
                            </div>
                            <div class="client-info">
                                <h2>David Alexon</h2>
                                <span>Manager</span>
                            </div>
                            <div class="testi_img">
                                <img src="assets/images/quote.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="testmoni_tmb">
                        <img src="assets/images/testi-img.png" alt=""/>
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
    <div class="blog-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-titles">
                        <div class="main-titles">
                            <h2>Agrofarm Recent Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="owl-carousel blog_list">
                    <div class="col-lg-12">
                    <div class="blog-single-box">
                        <div class="blog-thumb">
                            <img src="assets/images/blog-3.jpg" alt=""/>
                            <div class="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Made confident bigger chance as.</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div class="blog-button">
                                <a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-single-box">
                        <div class="blog-thumb">
                            <img src="assets/images/blog-1.jpg" alt=""/>
                            <div class="blog-btn">
                                <a href="#">organic</a>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="#">Amount of Freak Bread or Other Fruits</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div class="blog-button">
                                <a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-single-box">
                        <div class="blog-thumb">
                            <img src="assets/images/blog.jpg" alt=""/>
                            <div class="blog-btn">
                                <a href="#">dayri farm</a>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Spicey choose plush amazing</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div class="blog-button">
                                <a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-single-box">
                        <div class="blog-thumb">
                            <img src="assets/images/blog-5.jpg" alt=""/>
                            <div class="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Made confident bigger chance as.</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div class="blog-button">
                                <a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="blog-single-box">
                        <div class="blog-thumb">
                            <img src="assets/images/blog-4.jpg" alt=""/>
                            <div class="blog-btn">
                                <a href="#">farming</a>
                            </div>
                        </div>
                        <div class="blog-content">
                            <div class="blog-left">
                                <a href="#">agrofarm</a>
                                <span>January 27, 2023</span>
                            </div>
                            <h2><a href="blog-details.html">Simple and Delicious Keto Salads</a></h2>
                            <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus </p>
                            <div class="blog-button">
                                <a href="#">read more <i class="fa fa-long-arrow-right"></i></a>
                            </div>
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
    <div class="support-area">
        <div class="container">
            <div class="row border-top">
                <div class="col-lg-4 col-md-6">
                    <div class="support-content">
                        <div class="icon">
                            <i class="bi bi-truck"></i>
                        </div>
                        <div class="support-title">
                            <h2>Free Shipping</h2>
                        </div>
                        <div class="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="support-content">
                        <div class="icon style-one">
                            <i class="bi bi-alipay"></i>
                        </div>
                        <div class="support-title">
                            <h2>Best Price Guarantee</h2>
                        </div>
                        <div class="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="support-content">
                        <div class="icon style-two">
                            <i class="bi bi-clock-history"></i>
                        </div>
                        <div class="support-title">
                            <h2>24/7 Support</h2>
                        </div>
                        <div class="support-discription">
                            <p>Ballan wrasse climbing gouramic amur pike Arctic char,</p>
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
    <div class="footer-area">
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
                                <h2>Information</h2>
                            </div>
                            <div class="footer-ico">
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
                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-box">
                        <div class="footer-content">
                            <div class="footer-title">
                                <h2>My Account</h2>
                            </div>
                            <div class="footer-ico">
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
                <div class="col-lg-3 col-md-6">
                    <div class="single-footer-box">
                        <div class="footer-content">
                            <div class="footer-title">
                                <h2>Download Our Apps</h2>
                            </div>
                            <div class="footer-discription">
                                <p>Fast and Conventment Access</p>
                            </div>
                            <div class="footer-thumb">
                                <img src="assets/images/google-play.png" alt=""/>
                            </div>
                            <div class="footer-img">
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
    <div class="copy-right-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                        <div class="copy-rights-titles">
                            <h3>Copyright © Agrofarm -Dream IT. all rights reserved.</h3>
                        </div>
                </div>
                <div class="col-lg-6">
                    <div class="copy-right-thumb">
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
            <!--==================================================-->
            <!----- Start Scroll ----->
        <!--==================================================-->
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
        
    </div>
  );
}

export default Main;

