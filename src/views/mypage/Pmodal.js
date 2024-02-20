import React, { useState, useEffect } from 'react';
import './Pmodal.css';

function Modal(props) {
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    nickname: '',
    name: '',
    address: '',
    hobby: '',
    height: '', 
    weight: '', 
    inter: '' 
  });

  useEffect(() => {
    setFormData({
      nickname: props.nickname,
      name: props.name,
      address: props.address,
      hobby: props.hobby,
      height: props.height || '', 
      weight: props.weight || '',
      inter:''
    });
  }, [props]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 수정된 회원 정보 전송 로직 추가
    console.log(formData);
    props.onSubmit(formData);
  };

  return (
    <div className="Modal" onMouseDown={props.onClose}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{ width: '450px' }}>
        <button id="modalCloseBtn" onMouseDown={props.onClose}>
          ✖
        </button>
        <h2>회원 정보 수정</h2>
        <form onSubmit={handleSubmit}>
          <label className="profile-picture-container">
            프로필 사진
            <div>
              <input type="file" className="profilePicture" onChange={handleFileChange} />
              {previewImage ? (
                <img src={previewImage} alt="프로필 사진" className="profile-picture" />
              ) : (
                <span>사진을 등록해 주세요</span>
              )}
            </div>
          </label>
          <div className="input-container">
            <label className="U-nickname-label">
              닉네임:
              <input type="text" className="U-nickname" name="nickname" value={formData.nickname} onChange={handleChange} style={{ width: 'auto', minWidth: '150px' }} />
            </label>
            <label>
              이름:
              <input type="text" className="U-name" name="name" value={formData.name} onChange={handleChange} style={{ width: 'auto', minWidth: '150px' }} />
            </label>
            <label>
              키: 
              <input type="text" className="U-height" name="height" value={formData.height} onChange={handleChange} style={{marginRight:'-16px'}}/>
            </label>
            <label>
              몸무게: 
              <input type="text" className="U-weight" name="weight" value={formData.weight} onChange={handleChange} style={{marginRight:'16px'}}/>
            </label>
            <label>
              주소
              <input type="text" className="U-address" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <div className="section-heading">관심사</div>
            <div className="select_inter">
              <input type="radio" id="select_d" name="inter" value="식단" onChange={handleChange} checked={formData.inter === '식단'} />
              <label htmlFor="select_d" style={{marginBottom:'10px',paddingBottom:'30px'}}>식단</label>
              <input type="radio" id="select_w" name="inter" value="운동" onChange={handleChange} checked={formData.inter === '운동'} />
              <label htmlFor="select_w" style={{marginBottom:'10px',paddingBottom:'30px'}}>운동</label>
            </div> 
          </div>
          <button type="submit" className='P-button'>저장</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
