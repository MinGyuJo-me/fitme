import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import Main from './views/main/Main';


import './assets/css/bootstrap.min.css';

import './assets/css/owl.carousel.min.css';

import './assets/css/nivo-slider.css';

import './assets/css/animate.css';

import './assets/css/animated-text.css';

import './assets/css/all.min.css';

import './assets/css/flaticon.css';

import './assets/css/theme-default.css';

import './assets/css/meanmenu.min.css';

import './assets/css/font-awesome.min.css';

import './style.css';

import './assets/css/owl.transitions.css';

import './venobox/venobox.css';

import './assets/css/widget.css';

import './assets/css/responsive.css';

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
