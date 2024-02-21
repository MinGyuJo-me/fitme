import React, { useEffect, useState } from 'react';
import axios from 'axios';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function CommunityBoard(props) {

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
    }, [props.key])

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
                
                    
                    <p>{props.comment}
                    </p>
                    <div className="blog-button">
                        <a onClick={onModal}>read more</a>
                        <div className="blog-button-container">
                            <div className='blog-button-item'>
                                <img src={require('../images/chat_bubble.png')}/>
                            </div>
                            <div className='blog-button-item'>
                                <img src={require('../images/heart.png')}/>
                            </div>
                            
                            <div className='blog-button-item'>
                                <img src={require('../images/scrap.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityBoard;