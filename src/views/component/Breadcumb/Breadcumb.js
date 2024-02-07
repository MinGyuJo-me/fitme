import {Link} from 'react-router-dom';
import React from 'react';

function Breadcumb() {
    return (
        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>Community</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html"> Social <i className="fas fa-angle-right"></i><span>Community</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Breadcumb;
  




