import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';

function SignUp() {
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
        
    </div>
  );
}

export default SignUp;

