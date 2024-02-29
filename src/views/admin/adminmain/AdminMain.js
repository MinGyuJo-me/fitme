import {Link} from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../adminstyle/Aheader.css';

import LeftSidebar from '../admincomponent/LeftSidebar.js';
import AHeaderTop from '../admincomponent/Aheader.js';


function SignUp() {
 

  return (
    <div style={{paddingBottom:"80px"}}>
        <AHeaderTop/>
        <LeftSidebar/>
    </div>    
  );
};
export default SignUp;

