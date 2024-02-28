import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pmodal.css';
import Swal from 'sweetalert2';

async function imageData(code) {
  return await new Promise((resolve, reject) => {
    try {
      axios
        .get(`http://192.168.0.15:5050/image/${code == null ? 41 : code}`)
        .then((response) => {
          resolve('data:image/png;base64,' + response.data['image']);
        });
    } catch (err) {
      reject(err);
    }
  }, 2000);
}


async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function Modal(props) {

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
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    hobby: '',
    age: '',
    image: null,
  });

  useEffect(() => {
    setFormData({
      name: props.name,
      address: props.address,
      hobby: props.hobby,
      age: props.age,
      image: props.imageCode
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
      setImageFile(file); // 이미지 파일을 따로 저장
    } else {
      setPreviewImage(null);
      setImageFile(null); // 이미지 파일 초기화
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: name === 'hobby' ? value : value,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // 이미지 파일을 업로드
      if (imageFile) {
        const imageData = await getBase64(imageFile);
        const imageBase64Data = imageData.split(',')[1];
        const imageDataForm = new FormData();
        imageDataForm.append('uploads', imageBase64Data);
        console.log("b64",imageBase64Data);
  
        // 이미지 코드가 있는 경우와 없는 경우에 따라 다른 요청을 보냅니다.
        if (props.imageCode) {
          await axios.put(`http://192.168.0.15:5050/image/${props.imageCode}`, imageDataForm);
        } else {
          await axios.post('http://192.168.0.15:5050/fileupload/', imageDataForm);
        }
      }
  
      // 회원 정보 업데이트
      const updatedFormData = {  // 수정된 부분
        name: formData.name,
        address: formData.address,
        hobby: formData.hobby,
        age: formData.age,
        image:formData.image
      };
      
      await axios.put(`http://192.168.0.65:8080/api/v1/mypages/account/${props.accountNo}`, updatedFormData, {
        headers: {
          'Authorization': `${myCookieValue}`,
          'Content-Type': 'application/json; charset=UTF-8'
        }
      });
    // 수정이 완료되었을 때 SweetAlert2 알림을 띄웁니다.
    Swal.fire({
      icon: 'success',
      title: '수정이 완료되었습니다.',
      showConfirmButton: true,
      customClass:{
        container:'m-sweet-con',
        icon: 'm-sweet-icon Mwicon',
      },
      allowOutsideClick: false, // 모달 외부 클릭으로 닫히지 않도록 설정
      allowEscapeKey: false // ESC 키로 모달 닫히지 않도록 설정
    }).then(()=>{
      props.onClose();
    })
    } catch (error) {
      //console.error('처리 중 오류가 발생했습니다:', error);
      Swal.fire({
        icon: 'error',
        title: '수정에 실패했습니다.',
        html: '처리 중 오류가 발생했습니다.<br> 관리자에게 문의하세요',
        showConfirmButton: true,
        customClass: {
          container:'m-sweet-con',
          icon: 'm-sweet-danger MswdR',
        },
        allowOutsideClick: false, // 모달 외부 클릭으로 닫히지 않도록 설정
        allowEscapeKey: false // ESC 키로 모달 닫히지 않도록 설정
      }).then(()=>{
        props.onClose();
      })
    }
  };
  
  
  return (
    <div className="Modal MB" onMouseDown={props.onClose}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{ width: '450px' }}>
        <button id="modalCloseBtn" onMouseDown={props.onClose}>
          ✖
        </button>
        <h2 style={{fontSize:'30px'}}>회원 정보 수정</h2>
        <form onSubmit={handleSubmit}>
          <label className="profile-picture-container PPCR">
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
            <label>
              이름:
              <input type="text" className="U-name" name="name" value={formData.name} onChange={handleChange} style={{ marginBottom: '10px', width: 'auto', minWidth: '150px' }} />
            </label>
            <label>
              나이:
              <input type="text" className="U-age" name="age" value={formData.age} onChange={handleChange} style={{ marginBottom: '10px', width: 'auto', minWidth: '150px' }} />
            </label>
            <label>
              주소
              <input type="text" className="U-address" name="address" value={formData.address} onChange={handleChange} />
            </label>
            <div className="section-heading">관심사</div>
            <div className="select_inter">
              <input type="radio" id="select_d" name="hobby" value="D" onChange={handleChange} checked={formData.hobby === 'D'} />
              <label htmlFor="select_d" style={{ marginBottom: '10px', marginRight: '0px', paddingBottom: '30px' }}>식단</label>
              <input type="radio" id="select_w" name="hobby" value="E" onChange={handleChange} checked={formData.hobby === 'E'} />
              <label htmlFor="select_w" style={{ marginBottom: '10px', paddingBottom: '30px' }}>운동</label>
            </div>
          </div>
          <button type="submit" className='P-button'>저장</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
