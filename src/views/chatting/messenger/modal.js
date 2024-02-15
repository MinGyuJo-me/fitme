import React, { useEffect, useState } from "react";
import './modal.css';

function Modal(props) {
  const [selectedFriends, setSelectedFriends] = useState([]); // 선택한 친구 목록 상태 추가

  useEffect(() => {
    // modal이 열릴 때 이벤트 핸들러 추가
    const searchInput = document.querySelector('.search-container input[type="text"]');
    const handleSearch = (event) => {
      const searchText = event.target.value.toLowerCase();
      const friendItems = document.querySelectorAll('.friend-item');
      friendItems.forEach(item => {
        const friendName = item.querySelector('.friend-name').textContent.toLowerCase();
        if (friendName.includes(searchText)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    };
    searchInput.addEventListener('input', handleSearch);

    // 모달이 닫힐 때 이벤트 핸들러 제거
    return () => {
      searchInput.removeEventListener('input', handleSearch);
    };
  }, []);

  // 선택한 친구를 추가하거나 삭제하는 함수
  const handleFriendToggle = (friendName, friendImage, isChecked) => {
    if (isChecked) {
      setSelectedFriends([...selectedFriends, { name: friendName, image: friendImage }]);
    } else {
      setSelectedFriends(selectedFriends.filter(friend => friend.name !== friendName));
    }
  };
// 선택한 친구 삭제 및 해당 친구의 체크박스 선택 해제 함수
const handleRemoveFriend = (friendName) => {
  setSelectedFriends(selectedFriends.filter(friend => friend.name !== friendName));
  // 해당 친구의 체크박스 선택 해제
  const friendItems = document.querySelectorAll('.friend-item');
  friendItems.forEach(item => {
    const nameElement = item.querySelector('.friend-name');
    if (nameElement && nameElement.textContent.toLowerCase() === friendName.toLowerCase()) {
      const friendCheckbox = item.querySelector('.friend-checkbox');
      if (friendCheckbox) friendCheckbox.checked = false;
    }
  });
};




  return (
    <div className="Modal" onMouseDown={props.onClose}>
      <div className="modalBody" onMouseDown={(e) => e.stopPropagation()} style={{ width: '30%' }}>
        <button id="modalCloseBtn" onMouseDown={props.onClose}>

          ✖
        </button>
        {props.children}
        <div className="selected-friends">
          <ul>
            {selectedFriends.map((friend, index) => (
              <div key={index}>
                <div className="sfprofile">
                  <div className="finfo">
                    <span className="fname">{friend.name}</span>
                    <button className="remove-btn" onClick={() => handleRemoveFriend(friend.name)}>✖</button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="f-search">
          <div className="search-container">
            <input type="text" placeholder="친구를 검색하세요..." />
            <button>검색</button>
          </div>
        </div>
        <div className="friend-list">
          <h2>친구 목록</h2>
          <ul>
            <li>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">장도형</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("장도형", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">이도형</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("이도형", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">김민석</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("김민석", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">최경태</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("최경태", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">이한울</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("이한울", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">김민서</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("김민서", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>
              <div className="friend-item">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="친구 이미지" />
                <div className="friend-info">
                  <span className="friend-name">최현진</span>
                  <input type="checkbox" className="friend-checkbox" onChange={(e) => handleFriendToggle("최현진", "프로필 이미지 URL", e.target.checked)} />
                </div>
              </div>             
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
