import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import './Diet.css';

//크루셀 npm i react-owl-carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import CountUp from '../../../../node_modules/counterup/jquery.counterup';

function Diet() {
  return (
    <div>
        <HeaderTop/>
        <Header/>

        {/*
        <div classNameName="loader-wrapper">
            <div classNameName="loader"></div>
            <div classNameName="loder-section left-section"></div>
            <div classNameName="loder-section right-section"></div>
        </div>
        */}

        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>Management</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html">Diet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-area style-two">
            
	<div className="container">
    <div className="col-lg-12 d-flex justify-content-center" style={{border:"1px solid red"}}>
            <div className="row">
			<div className="col-lg-6 col-md-12" style={{ width: "300px" }}>
				<div className="sideber-box">
					<div className="tag-body">
						<div className="profile-image-box">
							<img className="fit-picture" src={require('./images/pizza.jpg')}
							width="200px" height="200px" alt=""/>
						</div>
						<div className="profile-name">힘쌔고 강한 민규</div>
						<div className="profile-description">
							<div className="profile-description-item">
								<span className="text-style-title">Height</span><br/>
								<span className="text-style-description">200</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Weight</span><br/>
								<span className="text-style-description">200</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Gender</span><br/>
								<span className="text-style-description">남성</span>
							</div>
							<div className="profile-description-item">
								<span className="text-style-title">Age</span><br/>
								<span className="text-style-description">23</span>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div className="col-lg-6 col-md-12" style={{ width: "600px" }}>
				<div className="sideber-box">
					<div className="tag-body">
					
					</div>
            	</div>
				</div>
				</div>
            </div>
			<div className="row">
				<div className="col-lg-16">
					<div className="row">
						<div className="col-lg-6 col-md-6">
							<div className="blog-single-box upper">
								<div className="blog-thumb">
									<img src={require('./images/pizza.jpg')} alt="pizza"/>
								</div>
								<div className="blog-content">
									<div className="blog-left">
										<span>2024-02-02 07:00:00</span>
									</div>
									<h2>피자</h2>
									<p>글 제목,내용</p>
									<span>123g</span>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="blog-single-box upper">
								<div className="blog-thumb">
									<img src={require('./images/pizza.jpg')} alt="pizza"/>
								</div>
								<div className="blog-content">
									<div className="blog-left">
										<span>2024-02-02 07:00:00</span>
									</div>
									<h2>피자</h2>
									<p>글 제목,내용</p>
									<span>123g</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			<div className="blog-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-titles">
						<div className="main-titles">
							<h2>FOOD DIARY</h2>
						</div>
					</div>
				</div>
			</div>
			<OwlCarousel items={3} loop margin={9} autoplay autoplayTimeout={5000} autoplayHoverPause nav navText={["⟪","⟫"]} dots >
			<div className='item' style={{ border: '1px solid black' }}>
				<h4>1</h4>
			</div>
			<div className='item' style={{ border: '1px solid black' }}>
				<h4>2</h4>
			</div>
			<div className='item' style={{ border: '1px solid black' }}>
				<h4>3</h4>
			</div>
			<div className='item' style={{ border: '1px solid black' }}>
				<h4>4</h4>
			</div>
			</OwlCarousel>
			<div className='chart-info-container'>
				<div className="main-titles-chart">
					<h2>CHART DESCRIPTION</h2>
				</div>
				<div className='chart-info'>

				</div>
				<div className='chart-info'>

				</div>
			</div>

	</div>
	</div>
    </div>
	</div>

  );
}

export default Diet;

