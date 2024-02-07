import {Link} from 'react-router-dom';
import React, { useState,useEffect,useRef} from 'react';
//npm install axios
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CommunityBoardViewModal.css';

function CommunityBoardViewModal() {

    const options = {
        margin:10,
        loop: true,
        items: 1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };


    return (
        <div className='container'>
            <div class="row" style={{gap:"20px"}}>
                <div class="col-5" style={{border:"1px solid red"}}>
                Column
                </div>
                <div class="col-5" style={{border:"1px solid red"}}>
                Column
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunityBoardViewModal;
  




