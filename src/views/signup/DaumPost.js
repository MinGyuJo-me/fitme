import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const DaumPost = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const complete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        // 주소 선택 후 handleAddressChange 호출하여 업데이트
        props.handleAddressChange(data.zonecode, fullAddress);

        // 선택한 주소 정보 및 추가 정보를 콘솔에 출력
        console.log('sido:', data.sido);
        console.log('sigungu:', data.sigungu);
        console.log('bname:', data.bname);
        console.log('zonecode:', data.zonecode);
        console.log('fulladdress:', fullAddress);
        
        };

        const handleClose = () => {
            // Close DaumPostcode component
            setIsOpen(false);
        };
    
        const handleOpen = () => {
            // Open DaumPostcode component
            setIsOpen(true);
        };

        return (
            <div style={{position:"fixed" ,width:"500px", height:"700px", right:0, left:0, margin:"auto", top:"30%", zIndex:5, borderRadius:"1px solid red"}}>
                {isOpen && (
                    <div>
                        <DaumPostcode
                            autoClose
                            onComplete={complete}
                        />
                        <button className="postmodal-close" onClick={handleClose} style={{width:"50px",position:"absolute", right:0, left:0, margin:"auto"}}>✖</button>
                    </div>
                )}
                {!isOpen && (
                <button className="searchaddress-button-re" onClick={handleOpen} >⟳</button>
                )}
            </div>
        );
    };

export default DaumPost;


