import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';

function Diet() {
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

        <div class="breadcumb-area d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breacumb-content">
                            <div class="breadcumb-title">
                                <h1>Management</h1>
                            </div>
                            <div class="breadcumb-content-text">
                            <a href="index.html">Diet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-area style-two">
            
	<div class="container">
    <div class="col-lg-12" style={{border:"1px solid red"}}>
            <div class="row">
			<div class="col-lg-6 col-md-6">
				<div class="sideber-box">
					<div class="tag-body">
						<div class="profile-image-box">
							<img class="fit-picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
							width="200px" height="200px"/>
						</div>
						<div class="profile-name">힘쌔고 강한 민규</div>
						<div class="profile-description">
							<div class="profile-description-item">
								<span class="text-style-title">Height</span><br/>
								<span class="text-style-description">200</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Weight</span><br/>
								<span class="text-style-description">200</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Gender</span><br/>
								<span class="text-style-description">남성</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Age</span><br/>
								<span class="text-style-description">23</span>
							</div>
						</div>
					</div>
				</div>
			</div>
            <div class="col-lg-6 col-md-6">
				<div class="sideber-box">
					<div class="tag-body">
						<div class="profile-image-box">
							<img class="fit-picture" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
							width="200px" height="200px"/>
						</div>
						<div class="profile-name">힘쌔고 강한 민규</div>
						<div class="profile-description">
							<div class="profile-description-item">
								<span class="text-style-title">Height</span><br/>
								<span class="text-style-description">200</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Weight</span><br/>
								<span class="text-style-description">200</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Gender</span><br/>
								<span class="text-style-description">남성</span>
							</div>
							<div class="profile-description-item">
								<span class="text-style-title">Age</span><br/>
								<span class="text-style-description">23</span>
							</div>
						</div>
					</div>
				</div>
			</div>


            </div>
            </div>




		<div class="row">
			<div class="col-lg-16">
				<div class="row">
					<div class="col-lg-6 col-md-6">
						<div class="blog-single-box upper">
							<div class="blog-thumb">
                                <img src={require('./images/pizza.jpg')} alt="pizza"/>
							</div>
							<div class="blog-content">
								<div class="blog-left">
									<span>2024-02-02 07:00:00</span>
								</div>
								<h2>피자</h2>
								<p>글 제목,내용</p>
								<span>123g</span>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6">
						<div class="blog-single-box upper">
							<div class="blog-thumb">
								<img src={require('./images/pizza.jpg')} alt="pizza"/>
							</div>
							<div class="blog-content">
								<div class="blog-left">
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
</div>
    </div>
  );
}

export default Diet;

