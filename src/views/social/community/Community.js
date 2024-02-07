import {Link} from 'react-router-dom';
import React, {useEffect} from 'react';
import './Community.css';
import $ from 'jquery';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';

import Loader from '../../component/loader/Loader';
import CommunityProfile from './component/CommunityProfile';
import CommunityFriendListHeader from './component/CommunityFriendListHeader';
import Breadcumb from '../../component/Breadcumb/Breadcumb';
import CommunityBoard from './component/CommunityBoard';
import Footer from '../../component/footer/Footer';
import MapBox from './component/MapBox';
import FriendListSideBar from './component/FriendListSideBar';

function Community() {
    useEffect(()=>{
        $('body').addClass('loaded');
    });

  return (
    <div>
        {/*헤더 위*/}
        <HeaderTop/>
        {/*헤더 메인 메뉴*/}
        <Header/>
        {/* 로딩 애니메이션*/}
        <Loader/>
        {/* 제목 배경화면 */}
        <Breadcumb/>

        {/*게시글 영역*/}
        <div class="blog-area style-two">
            <div class="container">
                <CommunityFriendListHeader/>
                <div class="row">
                    <div class="col-lg-8">
                        {/*특정 사용자 프로필 영역*/}
                        <CommunityProfile/>
                        {/*게시글 박스*/}
                        <CommunityBoard/>
                        <CommunityBoard/>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <FriendListSideBar/>
                        <MapBox/>
                    </div>
                </div>
            </div>
        </div>
        {/*푸터 영역*/}
        <Footer/>
    </div>
  );
}

export default Community;
