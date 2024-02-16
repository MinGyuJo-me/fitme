import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CommunityBoardWriteModal.css';
import axios from 'axios';

function CommunityBoardWriteModal(props) {
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
    const options = {
        margin: 10,
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [posts, setPosts] = useState({
        accountNo: `${props.accountNo}`,
        title: "",
        boardComment: "",
        address: "서울특별시 서초구 서초대로77길 41, 4층 (서초동, 대동Ⅱ)",
        boardImage: ''
    });
    const [inputHidden, setInputHidden] = useState(false); // input 태그 보이기 여부 상태

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleFileChange = async (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);

        const base64String = await convertToBase64(fileArray[0]); // 첫 번째 파일의 base64 문자열만 사용
        setPosts(prevPosts => ({
            ...prevPosts,
            boardImage: base64String
        }));

        setSelectedFiles(fileArray);
        setInputHidden(true); // 이미지가 업로드되면 input 태그 숨기기
    };

    const onClickButton = (e) => {
        setPosts({
            ...posts
        });

        if (posts.title !== "") {
            axios.post('http://192.168.0.15:8080/api/v1/boards', posts, {
                headers: {
                    'Authorization': `${myCookieValue}`,
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="col-lg-12 col-sm-12">
            <form className="blog-single-box upper" style={{ backgroundColor: "#F6F4EC" }} onSubmit={onClickButton}>
                <div style={{ position: "relative" }}>
                    {!inputHidden && (
                        <>
                            <label htmlFor="file" className='blog-image-button'>Images</label>
                            <input type="file" id="file" style={{ display: "none" }} multiple onChange={handleFileChange} />
                        </>
                    )}
                    <OwlCarousel {...options}>
                        {selectedFiles.map((file, index) => (
                            <div className="blog-thumb" key={index}>
                                <img src={URL.createObjectURL(file)} alt="" style={{ height: 600 }} />
                                <div className="blog-btn">
                                    <div>{`${index + 1}/${selectedFiles.length}`}</div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
                <div className="blog-content" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>
                        <input type="text" style={{ width: "100%", textAlign: "center" }} placeholder='제목을 입력하세요' name='title' onChange={(e) => setPosts({ ...posts, title: e.target.value })} />
                    </div>
                    <div>
                        <textarea style={{ width: "100%", height: "200px" }} name='boardComment' onChange={(e) => setPosts({ ...posts, boardComment: e.target.value })}></textarea>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row-reverse", gap: "10px" }}>
                        <button className="community-write-button">Back</button>
                        <button className="community-write-button" type="submit">Post</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommunityBoardWriteModal;
