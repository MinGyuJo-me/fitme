import {Link} from 'react-router-dom';

import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { Client } from '@stomp/stompjs';

import Breadcumb from '../component/Breadcumb/Breadcumb';
import Loader from '../component/loader/Loader';
import Header from '../component/header/Header';
import HeaderTop from '../component/headerTop/HeaderTop';
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

// function GameRoom() {

//     const [myStream, setMyStream] = useState(null);
//     const [cameras, setCameras] = useState([]);
//     const [messages, setMessages] = useState([]);
//     const [selectedCamera, setSelectedCamera] = useState("");
//     const [muted, setMuted] = useState(false);
//     const [cameraOff, setCameraOff] = useState(false);
//     const [roomName, setRoomName] = useState("");
//     const myFace = useRef(null);
//     const peerFace = useRef(null);   
//     const stompClient = useRef(null);
    
  
//     // const socket = io("/ws", {transports: ['websocket', 'polling', 'flashsocket']});
//     useEffect(() => {
//         // SockJS와 STOMP를 사용한 WebSocket 연결 설정
//         const socket = new SockJS('/ws');
//         stompClient.current = Stomp.over(socket);
//         stompClient.debug = null;

//         stompClient.current.connect({}, frame => {
//             console.log('Connected: ' + frame);  
//             stompClient.current.subscribe('/sub/messages', message => {
//                 const receivedMessage = JSON.parse(message.body);
//                 console.log('Received: ', receivedMessage);  
                
//                 setMessages(prevMessages => [...prevMessages, receivedMessage]);
//         }, error => {
//             console.error('Connection error: ' + error);
//         });
//     });
//         return () => {
//             if (stompClient.current !== null) {
//                 stompClient.current.disconnect();
//                 console.log("Disconnected");
//             }
//         };
//     }, []);
        
//     // WebRTC 연결을 위한 ref
//     const myPeerConnection = useRef(null);

//     // 사용 가능한 카메라 목록을 가져오는 함수
//     const getCameras = async () => {
//         try {
//             const devices = await navigator.mediaDevices.enumerateDevices();
//             const videoDevices = devices.filter(device => device.kind === 'videoinput');
//             setCameras(videoDevices);
//             if(videoDevices.length > 0 && !selectedCamera){
//                 setSelectedCamera(videoDevices[0].deviceId);
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     // 카메라 변경 이벤트 핸들러
//     const handleCameraChange = async (event) => {
//         setSelectedCamera(event.target.value);
//         await getMedia(event.target.value);
//     };

//     // 미디어 스트림을 가져오는 함수
//     const getMedia = async (deviceId) => {
//         const constraints = {
//             audio: true,            
//             video: deviceId ? { deviceId: { exact: deviceId } } : true,
//         };
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia(constraints);
//             if (myFace.current) {
//                 myFace.current.srcObject = stream;
//             }
//             setMyStream(stream);
//             if (myPeerConnection.current) {
//                 stream.getTracks().forEach(track => {
//                     myPeerConnection.current.addTrack(track, stream);
//                 });
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     const setupWebRTC = () => {
//         myPeerConnection.current = new RTCPeerConnection({
//             iceServers: [
//                 {
//                     urls: [
//                       "stun:stun.l.google.com:19302",
//                       "stun:stun1.l.google.com:19302",
//                       "stun:stun2.l.google.com:19302",
//                       "stun:stun3.l.google.com:19302",
//                       "stun:stun4.l.google.com:19302",
//                   ],
//                 }
//             ]
//         });

//         myPeerConnection.current.onicecandidate = (event) => {
//             if (event.candidate) {
//                 socket.emit("ice", event.candidate, roomName);
//             }
//         };

//         myPeerConnection.current.ontrack = (event) => {
//             if (peerFace.current && !peerFace.current.srcObject) {
//                 peerFace.current.srcObject = event.streams[0];
//             }
//         };

//         socket.on("offer", async (offer) => {
//             myPeerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
//             const answer = await myPeerConnection.current.createAnswer();
//             myPeerConnection.current.setLocalDescription(new RTCSessionDescription(answer));
//             socket.emit("answer", answer, roomName);
//         });

//         socket.on("answer", (answer) => {
//             myPeerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
//         });

//         socket.on("ice", (ice) => {
//             myPeerConnection.current.addIceCandidate(new RTCIceCandidate(ice));
//         });
//     };

//     useEffect(() => {
//         getCameras();
//         getMedia(selectedCamera).then(setupWebRTC);
//     }, [selectedCamera]);
    
//     const toggleMute = () => {
//       setMuted(!muted);
//       if(myStream) {
//           myStream.getAudioTracks()[0].enabled = !myStream.getAudioTracks()[0].enabled;
//       }
//     };

//     const toggleCamera = () => {
//       setCameraOff(!cameraOff);
//       if(myStream) {
//           myStream.getVideoTracks()[0].enabled = !myStream.getVideoTracks()[0].enabled;
//       }
//     };

//     return (
//         <div style={{position:"absolute", width:"100%"}}>
//             <div style={{margin:"auto", marginTop:"20px", width:"1500px"}}>
//                 <div className='col-lg-12 col-md-12 game-match-container'>
//                     <div className='webRTC-layout'>
//                         <div className='webRTC-button-container'>
//                             {/* 음소거 및 카메라 토글 버튼 */}
//                             <div className="webRTC-button" onClick={toggleMute}>
//                                 {/* <img src={muted ? micImg : soundImg} alt="음소거 버튼"/> */}
//                                 <img src={require("./images/gamematch_mic.png")}/>
//                             </div>
//                             <div className="webRTC-button" onClick={toggleCamera}>
//                                 {/* <img src={cameraOff ? videoImg : quitImg} alt="카메라 온/오프 버튼"/> */}
//                                 <img src={require("./images/gamematch_video.png")}/>
//                             </div>
//                         </div>
//                         <select className="camera-select" onChange={handleCameraChange} value={selectedCamera}>
//                             {cameras.map((camera) => (
//                                 <option key={camera.deviceId} value={camera.deviceId}>
//                                     {camera.label || `카메라 ${camera.deviceId}`}
//                                 </option>
//                             ))}
//                         </select>
//                         <div className='webRTC-container'>
//                             <div className='webRTC-item wi1'><video ref={myFace} autoPlay playsInline muted={muted}/></div>
//                             <div className='webRTC-item wi2'><video ref={peerFace} autoPlay playsInline/></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
function GameRoom() {
    const [localStream, setLocalStream] = useState(null);
    const [selectedCamera, setSelectedCamera] = useState('');
    const [cameras, setCameras] = useState([]);
    const myVideoRef = useRef();
    const [remoteStreams, setRemoteStreams] = useState({});
    const [muted, setMuted] = useState(false);
    const [cameraOff, setCameraOff] = useState(false);
    const stompClientRef = useRef(null);
    const peerConnectionsRef = useRef({});
    const myKey = useRef(Math.random().toString(36).substring(2, 15));
    const location = useLocation();
    const { roomNo, ...otherData } = location.state;
    
    const getCameras = async () => {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(device => device.kind === 'videoinput');
            setCameras(videoDevices);
            if(videoDevices.length > 0 && !selectedCamera) {
                setSelectedCamera(videoDevices[0].deviceId);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const handleCameraChange = async (event) => {
        setSelectedCamera(event.target.value);
        await getMedia(event.target.value);
    };

    const getMedia = async (deviceId) => {
        const constraints = {
            audio: true,
            video: deviceId ? { deviceId: { exact: deviceId } } : true,
        };
        try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            if(myVideoRef.current) {
                myVideoRef.current.srcObject = stream;
            }
            setLocalStream(stream);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getCameras();
    }, []);

    useEffect(() => {
        if(selectedCamera) {
            getMedia(selectedCamera);
        }
    }, [selectedCamera]);

    useEffect(() => {
        if (roomNo) {
            connectWebSocket();
        }
    }, [roomNo]);

    const connectWebSocket = async() => {
        const stompClient = new Client({
            brokerURL: 'ws://localhost:3000/rtc',
            onConnect: (frame) => {
                console.log("연결 성공", frame);

                stompClient.subscribe(`/sub/room/${roomNo}`, message => {
                    const { type, from, data } = JSON.parse(message.body);
                    if (from == myKey.current) return;

                    switch (type) {
                        case 'offer':
                            handleOffer(from, data);
                            break;
                        case 'answer':
                            peerConnectionsRef.current[from]?.setRemoteDescription(new RTCSessionDescription(data));
                            break;
                        case 'candidate':
                            peerConnectionsRef.current[from]?.addIceCandidate(new RTCIceCandidate(data));
                            break;
                        default:
                            console.log("알 수 없는 메시지 타입:", type);
                            break;
                    }
                });

                stompClient.publish({
                    destination: `/app/room/${roomNo}`,
                    body: JSON.stringify({ type: 'join', from: myKey.current }),
                });
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            },
        });

        stompClient.activate();
        stompClientRef.current = stompClient;
    };

    const createPeerConnection = (otherKey) => {
        const pc = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
        });

        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        pc.onicecandidate = event => {
            if (event.candidate) {
                stompClientRef.current.send(`/app/room/${roomNo}`, {}, JSON.stringify({ type: 'candidate', from: myKey.current, to: otherKey, data: event.candidate }));
            }
        };

        pc.ontrack = event => {
            setRemoteStreams(prev => ({ ...prev, [otherKey]: event.streams[0] }));
        };

        peerConnectionsRef.current[otherKey] = pc;
        return pc;
    };

    const handleOffer = (from, offer) => {
        const pc = createPeerConnection(from);
        pc.setRemoteDescription(new RTCSessionDescription(offer))
            .then(() => pc.createAnswer())
            .then(answer => {
                pc.setLocalDescription(answer);
                stompClientRef.current.send(`/app/room/${roomNo}`, {}, JSON.stringify({ type: 'answer', from: myKey.current, to: from, data: answer }));
            })
            .catch(error => console.error(error));
    };

    const toggleMute = () => {
        setMuted(!muted);
        if (localStream) {
            localStream.getAudioTracks()[0].enabled = !muted;
        }
    };

    const toggleCamera = () => {
        setCameraOff(!cameraOff);
        if (localStream) {
            localStream.getVideoTracks()[0].enabled = !cameraOff;
        }
    };

    return (
        <div style={{position:"absolute", width:"100%"}}>
            <div style={{margin:"auto", marginTop:"20px", width:"1500px"}}>
                <div className='col-lg-12 col-md-12 game-match-container'>
                    <div className='webRTC-layout'>
                        <div className='webRTC-button-container'>
                            <div className="webRTC-button" onClick={toggleMute}>
                                <img src={require("./images/gamematch_mic.png")} alt="음소거 버튼"/>
                            </div>
                            <div className="webRTC-button" onClick={toggleCamera}>
                                <img src={require("./images/gamematch_video.png")} alt="카메라 온/오프 버튼"/>
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
                            <div className='webRTC-item wi1'>
                                <video ref={myVideoRef} autoPlay playsInline muted={muted} />
                            </div>
                            {Object.entries(remoteStreams).map(([key, stream]) => (
                                <div key={key} className='webRTC-item wi2'>
                                    <video autoPlay playsInline ref={ref => ref && (ref.srcObject = stream)} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameRoom;