import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';


import {useEffect} from 'react';
import Main from './views/main/Main';
import Community from './views/social/community/Community';
import Recipe from './views/social/recipe/Recipe';


import SignIn from './views/signin/SignIn';
import SignUp from './views/signup/SignUp';

import MyPage from './views/mypage/mypage';

import Messenger from './views/chatting/messenger/Messenger'

import Diet from './views/management/diet/Diet';
import Workout from './views/management/workout/Workout';


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
import FindPassword from './views/findpassword/findPassword.js';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            {/* 메인화면 */}
            <Route path={"/"} element={<Main/>}/>

            {/* 게시판 라우터 commnuity - 게시판   recipe - 찍먹 */}
            <Route path={"/community"} element={<Community/>}/>
            <Route path={"/recipe"} element={<Recipe/>}/>

            {/* 회원가입 라우터 signin - 로그인   signup - 회원가입 */}
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>

            {/* 마이페이지 */}
            <Route path={'/mypage'} element={<MyPage/>}/>

            {/* 회원 관리 메뉴 */}
            <Route path={"/diet"} element={<Diet/>}/>
            <Route path={"/workout"} element={<Workout/>}/>

            {/* 채팅 */}
            <Route path={"/messenger"} element={<Messenger/>}/>

             {/* 채팅 */}
             <Route path={"/findPassword"} element={<FindPassword/>}/>

          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
