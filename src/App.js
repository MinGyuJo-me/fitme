import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import Main from './views/main/Main';


import './css/bootstrap.min.css';

import './css/owl.carousel.min.css';

import './css/nivo-slider.css';

import './css/animate.css';

import './css/animated-text.css';

import './css/all.min.css';

import './css/flaticon.css';

import './css/theme-default.css';

import './css/meanmenu.min.css';

import './css/font-awesome.min.css';

import './style.css';

import './css/owl.transitions.css';

import './venobox/venobox.css';

import './css/widget.css';

import './css/responsive.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
