import {Link} from 'react-router-dom';
import React from 'react';

import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';

function SignIn() {
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
                                <h1>Login</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html"> Social <i className="fas fa-angle-right"></i><span>Community</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SignIn;

