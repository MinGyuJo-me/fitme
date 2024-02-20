import { useState } from "react";
import axios from "axios";

function CommunityProfile(props) {

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

    const [sendFollow, setSendFollow] = useState([]);

    // Follow 버튼 클릭 이벤트
    const handleAddFriendClick = () => {
        const opponentNo = props.accountNo;
        
        axios.post(`http://192.168.0.104:8080/api/v1/boards/follow`, opponentNo , {
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            console.log('친구 추가 요청이 성공했습니다.');
        })
        .catch(error => {
            console.error('친구 추가 요청이 실패했습니다.', error);
        });
    };


    return (
        <div className="col-lg-12 col-sm-12" >
            <div className="blog-single-box upper" style={{padding:"10px 0px"}}>
                <div className="blog-left bl1" style={{padding:"60px 0px"}}>
                    <div style={{display:"flex"}}>
                        <div className="blog-icon bi1" style={{backgroundImage: `url(${props.image})`}}>
                        </div>
                        <div className='blog-description'>
                            <a href="#">{props.name}</a>
                            {/* <a href="#">{props.address}</a> */}

                            <span>{props.enrollDate}</span>
                        </div>
                    </div>

                    <div className='blog-post-detail'>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">POST</div>
                                <div className="blog-post-description-content">{props.postCount}</div>
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Follower</div>
                                <div className="blog-post-description-content">{props.follower}</div>
                                {props.realation || props.loginAccountNo == props.accountNo ? "" : <button className="blog-post-description-button" onClick={handleAddFriendClick}>Add Friend</button>}
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Following</div>
                                <div className="blog-post-description-content">{props.following}</div>
                                <button className="blog-post-description-button">DM</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunityProfile;
  




