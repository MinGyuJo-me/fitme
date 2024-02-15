import React, { useEffect, useState } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './CommunityBoardWriteModal.css';
import axios from 'axios';

function CommunityBoardWriteModal() {
    
    const options = {
        margin:10,
        loop: true,
        items: 1,
        dots:false,
        autoplay:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
    };

    const [selectedFiles, setSelectedFiles] = useState([]);

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);
        fileArray.forEach(file => {
            convertToBase64(file);
            setSelectedFiles(pre => [...pre,file]);
        })
        console.log(fileArray);
    };


    return (
        <div className="col-lg-12 col-sm-12">
            <div className="blog-single-box upper" style={{backgroundColor:"#F6F4EC"}}>
                
                <div style={{position:"relative"}}>
                    <label for="file" className='blog-image-button'>Images</label>
                    <input type="file" id="file" style={{ display: "none" }} multiple onChange={handleFileChange}/>
                    <OwlCarousel {...options}>
                        {selectedFiles.map((file, index) => (
                            <div className="blog-thumb" key={index}>
                                <img src={URL.createObjectURL(file)} alt="" style={{ height: 600 }} />
                                {/* Convert file to base64 */}
                                <div className="blog-btn">
                                    <div>{`${index + 1}/${selectedFiles.length}`}</div>
                                </div>
                            </div>
                            
                        ))}
                    </OwlCarousel>
                </div>
                
                <div className="blog-content" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                    <div>
                        <input type="text" style={{width:"100%", textAlign:"center"}} placeholder='제목을 입력하세요'></input>
                    </div>
                    <div>
                        <textarea style={{width:"100%", height:"200px"}}></textarea>
                    </div>
                    <div style={{display:"flex", flexDirection:"row-reverse", gap:"10px"}}>
                        <button className="community-write-button">Back</button>
                        <button className="community-write-button">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  
  
  export default CommunityBoardWriteModal;
  




