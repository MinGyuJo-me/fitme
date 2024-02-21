import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommunityBoard.css';
import $ from 'jquery';
import swal from 'sweetalert';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function CommunityBoard(props) {

    $(function() { 
        var heart = $('.heart-icon')
            // Add class
        
            heart.hover(function(){
            heart.toggleClass('heart-dots');

            heart.click(function(){
            heart.toggleClass('heart-liked');           heart.toggleClass('heart-beating');  
            });
        });
    });

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

    async function imageData(code){
        return await new Promise((resolve,reject)=>{
        try{
            axios.get(`http://192.168.0.15:5050/image/${code == null ? 41 : code}`)
            .then((response)=>{
                resolve("data:image/png;base64,"+response.data['image']);
            })
        }
        catch(err){reject(err)};
        },2000);
    }

    const [boardImages, setBoardImages] = useState([]);

    const options = {
        margin:10,
        loop: true,
        items: 1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };

    const onModal = () => {
        props.setIsOpen(true);
    }

    function handleButtonClick(accountNo) {
        props.onButtonClicked(accountNo);
    }

    //게시글에 등록된 이미지 axios
    useEffect(() => {
        const fetchBoardImages = async () => {
            try {
                
                const response = await axios.get(`http://192.168.0.104:8080/api/v1/boards/images/${props.bno}`, {
                    headers: {
                        'Authorization': `${myCookieValue}`,
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                });
                
                const updatedImages = await Promise.all(response.data.map(async boardImage => {
                    const image = await imageData(boardImage);
                    return image;
                }));

                setBoardImages(updatedImages);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchBoardImages(); 
    }, [props.key]);

    

    //좋아요 버튼 기능
    const [isLiked, setIsLiked] = useState(false);
    const [isBeating, setIsBeating] = useState(false);
    const [checkLike, setCheckLike] = useState();
    const data = new FormData();

    //좋아요 누른지 여부 확인
    useEffect(() => {
        axios.get(`http://192.168.0.104:8080/api/v1/boards/like/${props.bno}`, {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            setCheckLike(response.data);
            if(response.data == 0) {
                setIsLiked(false);
            } else {
                setIsLiked(true);
            }
        })
    },[checkLike])

    const handleMouseEnter = () => {
        setIsBeating(true);
    };

    const handleMouseLeave = () => {
        setIsBeating(false);
    };
    
    const handleClick = () => {

        if(isLiked) {
            data.append('bno', props.bno);
            data.append('preState', 1);
            axios.post('http://192.168.0.104:8080/api/v1/boards/like', data , {
                headers: {
                    'Authorization': `${myCookieValue}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log(response.data);
            })
        } else {
            data.append('bno', props.bno);
            data.append('preState', 0);
            axios.post('http://192.168.0.104:8080/api/v1/boards/like', data , {
                headers: {
                    'Authorization': `${myCookieValue}`,
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            .then(response => {
                console.log(response.data);
            })
        }
        setIsLiked(!isLiked);
    };

    //스크랩 관련
    const scrapHandle = () => {
        const bno = props.bno;
        axios.post('http://192.168.0.104:8080/api/v1/boards/scrap', bno, {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            console.log(response.data);
        })
    };

    //게시글 삭제

    const onClickDelete = (e) => {
        const bno = props.bno;
        axios.delete(`http://192.168.0.104:8080/api/v1/boards/${bno}`, {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            let resMessge = response.data;
            if(resMessge == '성공') {
                swal({title:"삭제 성공!",icon:"success", button:"확인"})
                .then(value => {
                    props.setOnDelete(value);
                })
                
            } else {
                swal({title:"삭제 실패!",icon:"error", button:"확인"})
                .then(value => {
                    props.setOnDelete(value);
                })
                
            }
        })
    }

    return (
        <div className="col-lg-12 col-sm-12">
            <div className="blog-single-box upper">
                <div className="blog-left" style={{padding:"60px 0px 40px 20px"}}>
                    <div className="blog-icon bi1"  style={{backgroundImage: `url(${props.image})`}} onClick={() => handleButtonClick(props.accountNo)}>
                    </div>
                    <div className='blog-description'>
                        <a href="#"><i className="fas fa-address-card"></i> {props.name}</a>
                        <a href="#"><i className="fas fa-map-marker"></i> {props.address}</a>
                        <span><i className="far fa-calendar-alt"></i> {props.postDate}</span>
                    </div>
                </div>
                <div>
                    <OwlCarousel {...options}>
                        {boardImages.map((image, index) => (
                            <div className="blog-thumb" key={index}>
                                <img src={image} alt="" style={{ height: 600 }} />
                                <div className="blog-btn">
                                    <div>{`${index + 1}/${boardImages.length}`}</div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                
                <div className="blog-content">
                    <div style={{display:"flex", height:"35px"}}>
                        <select style={{width:"35px", padding:"5px", marginRight:"10px", borderRadius:"0px", border:"3px solid rgba(0, 0, 0, 0.391)", borderRadius:"0px", backgroundColor:"lightgray"}}>
                            <option value=""></option>
                            <option value="">신고</option>
                            <option value="">수정</option>
                            <option value="">삭제</option>
                        </select>
                        <h2><a href="blog-details.html">{props.title}</a></h2>
                    </div>
                
                    <div>
                        <div>
                            {props.loginAccountNo == props.accountNo ? <div onClick={onClickDelete}>삭제</div> : ""}
                            {props.loginAccountNo == props.accountNo ? <div>수정</div> : ""}
                            {props.loginAccountNo !== props.accountNo ? <div>신고</div> : ""}
                            
                        </div>
                    </div>
                    <p>{props.comment}
                    </p>
                    <div className="blog-button">
                        <a onClick={onModal}>read more</a>
                        <div className="blog-button-container">
                            <div className='blog-button-item'>
                                <img src={require('../images/chat_bubble.png')} onClick={onModal}/>
                            </div>
                            <div className='blog-button-item'>
                                {/* <img src={require('../images/heart.png')}/> */}

                                <div className="heart-icon-wrapper">
                                    <div 
                                        className={`heart-icon ${isLiked ? 'heart-liked' : ''} ${isBeating ? 'heart-beating' : ''}`}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={handleClick}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                                    <path d="M150 57.3C100.2-17.4.7 26.3.7 107.6c0 55 49.7 94.2 87.1 123.8 38.8 30.7 49.8 37.3 62.2 49.8 12.4-12.4 22.8-19.7 62.2-49.8 37.9-29 87.1-69.4 87.1-124.4 0-80.7-99.5-124.4-149.3-49.7z" fill-rule="evenodd" clip-rule="evenodd"/>
                                    </svg>
                                        <span className="i1"></span>
                                        <span className="i2"></span>
                                        <span className="i3"></span>
                                        <span className="i4"></span>
                                        <span className="i5"></span>
                                        <span className="i6"></span>
                                        <span className="i7"></span>
                                        <span className="i8"></span>
                                        <span className="i1"></span>
                                        <span className="i2"></span>
                                        <span className="i3"></span>
                                        <span className="i4"></span>
                                        <span className="i5"></span>
                                        <span className="i6"></span>
                                        <span className="i7"></span>
                                        <span className="i8"></span>
                                        <span className="i1"></span>
                                        <span className="i2"></span>
                                        <span className="i3"></span>
                                        <span className="i4"></span>
                                        <span className="i5"></span>
                                        <span className="i6"></span>
                                        <span className="i7"></span>
                                        <span className="i8"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-button-item' onClick={scrapHandle}>
                                <img src={require('../images/scrap.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityBoard;