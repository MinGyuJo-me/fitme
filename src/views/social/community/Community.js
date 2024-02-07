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
import CommunityBoard from './crud/CommunityBoard';
import Footer from '../../component/footer/Footer';
import MapBox from './component/MapBox';
import FriendListSideBar from './component/FriendListSideBar';
import CommnunitySearch from './component/CommunitySearch';
import CommunityBoardWriteModal from './crud/CommunityBoardWriteModal';
import CommunityBoardViewModal from './crud/CommunityBoardViewModal';

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
        <div className="blog-area style-two">
            <div className="container">
                <CommunityFriendListHeader/>
                <div className="row">
                    <div className="col-lg-8">
                        {/*특정 사용자 프로필 영역*/}
                        <CommunityProfile/>
                        {/*게시 혹은 검색 부분*/}
                        <CommnunitySearch/>
                        {/*게시글 박스*/}
                        <CommunityBoard writer="JO-DONG-HUN" position="서울시 강남구 서초동 서초대로" postDate="January 27, 2023"
                                        title="내가 새로 산 차" comment="asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f"
                        />
                        <CommunityBoard writer="PARK-SANG-NYEONG" position="영등포" postDate="January 27, 2023"
                                        title="내가 새로 산 차1" comment="asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f"
                        />

                        <CommunityBoardWriteModal/>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <FriendListSideBar/>
                        <MapBox/>
                    </div>
                </div>
            </div>
        </div>
        {/*푸터 영역*/}
        <CommunityBoardViewModal/>
        <Footer/>
        
    </div>
  );
}

export default Community;
