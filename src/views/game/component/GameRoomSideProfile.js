import './GameRoomSideProfile.css';
import { useState, useRef, useEffect } from 'react';
import GameRoomProfileModal from "./GameRoomProfileModal";
import axios from 'axios';


var ipAddress = '192.168.0.110';

function GameRoomSideProfile({showModal,setShowModal,showModal1,setShowModal1,imageUrl,accountNo}){

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [profileImageUrl, setProfileImageUrl] = useState('');
    const profile1 = useRef(null);

    useEffect(() => {
        if(accountNo) {
            axios.get(`http://${ipAddress}:5000/chatImage?accountNo=${accountNo}`)
                .then(response => {
                    if(response.data && response.data.image_url){
                        setProfileImageUrl(response.data.image_url);
                    }
                })
                .catch(error => console.error("프로필 이미지를 불러오는 중 에러 발생:",error));
        }
    })

    
    const newImage =() =>{
        profile1.current.style= "background-image:base;"
        // 이 함수는 필요에 따라 수정이 필요할 수 있습니다.
        // console.log('새 이미지 함수 호출');
    };
    

    const handleClick = () => {
        console.log("클릭");
        setShow(prevShow => !prevShow);
        setShowModal(prevShowModal => !prevShowModal);
    }

    const handleClick1 = () => {
        console.log("클릭");
        setShow1(prevShow => !prevShow);
        setShowModal1(prevShowModal => !prevShowModal);
    }

    return (
        <div className="col-lg-3 col-md-3 game-profile-layout">
            <div className="row">
                <div ref={profile1} onClick={newImage} className='col-lg-10 col-md-10 game-profile'>
                    {/* {imageUrl && <img src={imageUrl} alt="" />} */}
                    {profileImageUrl && <img src={profileImageUrl} alt="Profile"/>}
                    <button className='game-profile-edit-button' onClick={handleClick1}>+</button>
                </div>
                <div className='col-lg-10 col-md-10 game-profile-name'>
                    <div><span>NickName</span><span>조동훈</span></div>
                    <div><span>Playtime</span><span>65:43</span></div>
                    <div><span>Win Rate</span><span>75%</span></div>
                    <div><span>Demo1</span><span></span></div>
                    <div><span>Demo2</span><span></span></div>
                </div>

                <div className='col-lg-10 col-md-10 game-play-button-layout'>
                    <button className="game-play-button" onClick={handleClick}>일반 게임</button>
                    <button className="game-play-button">랭킹 게임</button>
                </div>

            </div>
        </div>
    );
  }
  
  export default GameRoomSideProfile;