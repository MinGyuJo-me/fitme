import {Link} from 'react-router-dom';
import React from 'react';

function Breadcumb(props) {
    return (
        <div className="breadcumb-area d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breacumb-content">
                            <div className="breadcumb-title" style={{fontSize:"85px", height:"80px", lineHeight:"80px", fontWeight:"bold", color:"#ED9E2B", textShadow:"2px 2px 2px black"}}>
                                {props.title}
                            </div>
                            <div className="breadcumb-content-text"  style={{fontSize:"27px", height:"50px", lineHeight:"50px", fontWeight:"bold", color:"#ED9E2B", textShadow:"2px 2px 2px rgba(0,0,0,0.3)", color:"black", transform:"translateY(5px)"}}>
                                {props.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Breadcumb;
  




