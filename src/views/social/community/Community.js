import React, {useEffect, useState} from 'react';
import './Community.css';
import axios from 'axios';
import $ from 'jquery';

import Header from '../../component/header/Header';
import HeaderTop from '../../component/headerTop/HeaderTop';
import Modal from './modal';

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
import ChatbotFloating from '../../component/chatbotFloating/ChatbotFloating';
//플로팅
//npm i --save react-floating-action-button


//리액트 모달
//npm install --save react-modal
//import Modal from 'react-modal';




function Community() {

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
          }
        }
        return null;
    }
    
    const myCookieValue = getCookie('Authorization');
    
    const [boards, setBoards] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        $('body').addClass('loaded');
    });

    //이미지서버 연결 
    async function imageData(code){
        return await new Promise((resolve,reject)=>{
        try{
            axios.get(`http://192.168.0.15:5050/image/${code}`)
            .then((response)=>{
                // console.log(response.data);
                resolve("data:image/png;base64,"+response.data['image']);
            })
        }
        catch(err){reject(err)};
        },2000);
    }

    // 사용자 정보 프로필 정보 조회
    useEffect(() => {
        axios.get('http://192.168.0.15:8080/api/v1/boards/account', {
          headers: {
            'Authorization' : `${myCookieValue}`,
            'Content-Type' : 'application/json; charset=UTF-8'
          }
        })
        .then(response => {
            
            imageData(response.data.image).then((image) => {
                response.data.image = image;
                setUserInfo(response.data);
            })
            
        })
        .catch(error => console.log(error))
      }, []);


    // 게시글 전체 목록 조회
    useEffect(() => {
        axios.get('http://192.168.0.15:8080/api/v1/boards', {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(async response => {
            const updatedBoards = await Promise.all(response.data.map(async board => {
                const image = await imageData(board.image);
                board.image = image;
                return board;
            }));
    
            setBoards(updatedBoards);
        })
        .catch(error => console.log(error));
    }, []);


  return (
    <div>
        {/* 챗봇용 플로팅 */}
        <ChatbotFloating/>
        {/*헤더 위*/}
        <HeaderTop/>
        {/*헤더 메인 메뉴*/}
        <Header/>
        {/* 로딩 애니메이션*/}
        <Loader/>
        {/* 제목 배경화면 */}
        <Breadcumb title="Commnunity" content="social" subContent="community"/>
        
        {/*게시글 영역*/}
        <div className="blog-area style-two">
            <div className="container">
                <CommunityFriendListHeader/>
                <div className="row">
                    <div className="col-lg-8">
                        {/*게시 혹은 검색 부분*/}
                        <CommnunitySearch 
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                        {/*특정 사용자 프로필 영역*/}
                        <CommunityProfile
                            username={userInfo.username}
                            name={userInfo.name}
                            address={userInfo.address}
                            enrollDate={userInfo.enrollDate}
                            image={userInfo.image}
                            postCount={userInfo.postCount}
                            follower={userInfo.follower}
                            following={userInfo.following}
                        />
                        {/*게시글 박스*/}
                        {boards.map(board => (
                            <CommunityBoard 
                                bno={board.bno} 
                                name={board.name}
                                image={board.image}
                                address={board.address}
                                postDate={board.postDate}
                                likes={board.like}
                                title={board.title}
                                comment={board.boardComment}
                            />
                        ))}
                        
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                               <CommunityBoardWriteModal/>
                            </Modal>
                        )}
                        
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <FriendListSideBar/>
                        <MapBox/>
                    </div>
                </div>
            </div>
        </div>
        {/*푸터 영역*/}
        <CommunityBoardViewModal writer="PARK-SANG-NYEONG" position="영등포" postDate="January 27, 2023"
                                        title="내가 새로 산 차1" comment="asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f asfsfsfsadfasdf adsfsaf sdf asads fasdf sdaf sdf asfasd fsa f"
                        />
        <Footer/>
    </div>
  );
}

export default Community;
