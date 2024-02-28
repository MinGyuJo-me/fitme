import {Link} from 'react-router-dom';

import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import Breadcumb from '../component/Breadcumb/Breadcumb';
import Loader from '../component/loader/Loader';
import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
import $ from 'jquery';


import GameRoomContainer from './component/GameRoomContainer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import GameRoomSideProfile from './component/GameRoomSideProfile';

import styled from "styled-components";
import GameRoomMakeModal from './component/GameRoomMakeModal';
import './GameRoom.css';

const StyledHeader = styled.div`
  background: black;
`;

function GameRoom() {

const [myStream, setMyStream] = useState(null);
    const [cameras, setCameras] = useState([]);
    const [selectedCamera, setSelectedCamera] = useState("");
    const [muted, setMuted] = useState(false);
    const [cameraOff, setCameraOff] = useState(false);
    const [roomName, setRoomName] = useState("");
    const myFace = useRef(null);
    const peerFace = useRef(null);
    
    const socket = io("/");

    // WebRTC 연결을 위한 ref
    const myPeerConnection = useRef(null);

    // 사용 가능한 카메라 목록을 가져오는 함수
    const getCameras = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            setCameras(videoDevices);
            if(videoDevices.length > 0 && !selectedCamera){
                setSelectedCamera(videoDevices[0].deviceId);
            }
        } catch (e) {
            console.error(e);
        }
    };

    // 카메라 변경 이벤트 핸들러
    const handleCameraChange = async (event) => {
        setSelectedCamera(event.target.value);
        await getMedia(event.target.value);
    };

    // 미디어 스트림을 가져오는 함수
    const getMedia = async (deviceId) => {
        const constraints = {
            audio: true,
            video: { deviceId: deviceId ? { exact: deviceId } : undefined },
        };
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if (myFace.current) {
                myFace.current.srcObject = stream;
            }
            setMyStream(stream);
            if (myPeerConnection.current) {
                stream.getTracks().forEach(track => {
                    myPeerConnection.current.addTrack(track, stream);
                });
            }
        } catch (e) {
            console.error(e);
        }
    };

    const setupWebRTC = () => {
        myPeerConnection.current = new RTCPeerConnection({
            iceServers: [
                {
                    urls: [
                      "stun:stun.l.google.com:19302",
                      "stun:stun1.l.google.com:19302",
                      "stun:stun2.l.google.com:19302",
                      "stun:stun3.l.google.com:19302",
                      "stun:stun4.l.google.com:19302",
                  ],
                }
            ]
        });

        myPeerConnection.current.onicecandidate = (event) => {
            if (event.candidate) {
                socket.emit("ice", event.candidate, roomName);
            }
        };

        myPeerConnection.current.ontrack = (event) => {
            if (peerFace.current && !peerFace.current.srcObject) {
                peerFace.current.srcObject = event.streams[0];
            }
        };

        socket.on("offer", async (offer) => {
            myPeerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await myPeerConnection.current.createAnswer();
            myPeerConnection.current.setLocalDescription(new RTCSessionDescription(answer));
            socket.emit("answer", answer, roomName);
        });

        socket.on("answer", (answer) => {
            myPeerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on("ice", (ice) => {
            myPeerConnection.current.addIceCandidate(new RTCIceCandidate(ice));
        });
    };

    useEffect(() => {
        getCameras();
        getMedia(selectedCamera).then(setupWebRTC);
    }, [selectedCamera]);
    
    const toggleMute = () => {
      setMuted(!muted);
      if(myStream) {
          myStream.getAudioTracks()[0].enabled = !myStream.getAudioTracks()[0].enabled;
      }
    };

    const toggleCamera = () => {
      setCameraOff(!cameraOff);
      if(myStream) {
          myStream.getVideoTracks()[0].enabled = !myStream.getVideoTracks()[0].enabled;
      }
    };

    return (
        <div style={{position:"absolute", width:"100%"}}>
            <div style={{margin:"auto", marginTop:"20px", width:"1500px"}}>
                <div className='col-lg-12 col-md-12 game-match-container'>
                    <div className='webRTC-layout'>
                        <div className='webRTC-button-container'>
                            {/* 음소거 및 카메라 토글 버튼 */}
                            <div className="webRTC-button" onClick={toggleMute}>
                                {/* <img src={muted ? micImg : soundImg} alt="음소거 버튼"/> */}
                                <img src={require("./images/gamematch_mic.png")}/>
                            </div>
                            <div className="webRTC-button" onClick={toggleCamera}>
                                {/* <img src={cameraOff ? videoImg : quitImg} alt="카메라 온/오프 버튼"/> */}
                                <img src={require("./images/gamematch_video.png")}/>
                            </div>
                        </div>
                        <select className="camera-select" onChange={handleCameraChange} value={selectedCamera}>
                            {cameras.map((camera) => (
                                <option key={camera.deviceId} value={camera.deviceId}>
                                    {camera.label || `카메라 ${camera.deviceId}`}
                                </option>
                            ))}
                        </select>
                        <div className='webRTC-container'>
                            <div className='webRTC-item wi1'><video ref={myFace} autoPlay playsInline muted={muted}/></div>
                            <div className='webRTC-item wi2'><video ref={peerFace} autoPlay playsInline/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GameRoom;