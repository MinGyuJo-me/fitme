import React, { useState, useEffect } from 'react';
import './Gmodal.css'

function Modal(props) {
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    nickname: '',
    name: '',
    address: '',
    hobby: '',
    height: '', 
    weight: '' 
  });

  useEffect(() => {
    setFormData({
      nickname: props.nickname,
      name: props.name,
      address: props.address,
      hobby: props.hobby,
      height: props.height || '', 
      weight: props.weight || '' 
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
          </div>
          <button type="submit" className='G-button'>저장</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
