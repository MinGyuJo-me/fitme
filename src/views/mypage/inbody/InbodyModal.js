import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InbodyModal.css';

function InbodyModal({ inbodyData, onClose }) {
    const [weight, setWeight] = useState(inbodyData?.weight || '');
    const [height, setHeight] = useState(inbodyData?.height || '');
    const [muscleMass, setMuscleMass] = useState(inbodyData?.muscleMass || '');
    const [bodyFat, setBodyFat] = useState(inbodyData?.bodyFat || '');

    const handleSave = () => {
        // 수정된 데이터를 axios를 사용하여 서버에 저장
        const modifiedData = {
            weight: weight,
            height: height,
            muscleMass: muscleMass,
            bodyFat: bodyFat
        };
        axios.put('/api/inbody', modifiedData)
            .then(response => {
                // 성공적으로 처리한 경우
                onClose();
            })
            .catch(error => {
                // 오류 처리
                console.error('Inbody 데이터 업데이트 오류:', error);
            });
    };

    const closeModal = () => {
        // 모달 닫기
        onClose();
    };

    return (
        <>
            {/* 배경 오버레이 */}
            <div className="overlay-background"></div>
            {/* 인바디 모달 */}
            <div className='inbody-modal'  style={{height:"580px"}}>
                <div className='modal-profile-edit-title' style={{textAlign:"center",marginTop:"10px"}}>인바디 데이터 수정</div>
                
                
                <div className='inbody-modal-div' style={{marginTop:"40px"}}>
                    <span className="inbody-modal-text-style">체중</span><br/>
                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} style={{marginTop:"10px", height:"40px", width:"200px"}} />
                </div>

                <div className='inbody-modal-div'>
                    <span className="inbody-modal-text-style">키</span><br/>
                    <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} style={{marginTop:"10px", height:"40px", width:"200px"}}  />
                </div>



                <div className='inbody-modal-div'>
                    <span className="inbody-modal-text-style" style={{textAlign:"center"}}>근육량</span><br/>
                    <input type="text" value={muscleMass} onChange={(e) => setMuscleMass(e.target.value)} style={{marginTop:"10px", height:"40px", width:"200px"}}  />
                </div>

                <div className='inbody-modal-div'>
                    <span className="inbody-modal-text-style">체지방</span><br/>
                    <input type="text" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} style={{marginTop:"10px", height:"40px", width:"200px"}}  />
                </div>

                <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
                {/* 저장 버튼 */}
                    <button onClick={handleSave} style={{width:"90px", height:"40px"}}>저장</button>
                    {/* 취소 버튼 */}
                    <button onClick={closeModal} style={{width:"90px", height:"40px"}}>취소</button>
                </div>
            </div>
        </>
    );
}

export default InbodyModal;
