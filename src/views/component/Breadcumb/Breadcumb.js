import {Link} from 'react-router-dom';
import React from 'react';

function Breadcumb(props) {
    return (
        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title">
                                <h1>{props.title}</h1>
                            </div>
                            <div className="breadcumb-content-text">
                            <a href="index.html"> {props.content1} <i className="fas fa-angle-right"></i><span>{props.content2}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Breadcumb;
  




