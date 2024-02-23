import React, { useState, useEffect } from 'react';
import 'material-symbols';
import './1.css';

function DropDown1() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // 드롭다운 가시성을 토글합니다.
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // 사용자가 드롭다운 외부를 클릭하면 드롭다운을 닫습니다.
  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setDropdownVisible(false);
    }
  };

  // window click 이벤트에 closeDropdown 함수를 연결합니다.
  useEffect(() => {
    window.addEventListener('click', closeDropdown);

    // 컴포넌트가 언마운트되면 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  return (
    <div className="dropdown">
      <div className="dropbtn" onClick={toggleDropdown}>
        <span className="material-symbols-outlined">more_vert</span>
      </div>

      {/* 가시성 상태에 따라 드롭다운 컨텐츠를 조건부로 렌더링합니다. */}
      {isDropdownVisible && (
        <div id="myDropdown" className="dropdown-content">
          <a href="#home">삭제</a>
          <a href="#about">Q & A</a>
          <a href="#contact">기몸디</a>
        </div>
      )}
    </div>
  );
}

export default DropDown1;