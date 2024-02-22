import React, {  useState, useEffect, useRef } from 'react';
import 'material-symbols';
import './dropDown.css';


const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };


// 드롭다운 외부 클릭 감지 함수
const handleClickOutside = (event) => {
    // dropdownRef가 존재하고, 클릭된 요소가 dropdownRef 안에 없으면
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // 드롭다운 닫기
        setIsOpen(false);
    }
    };

    useEffect(() => {
    // 마운트될 때 외부 클릭 이벤트 리스너 추가
    document.addEventListener('mousedown', handleClickOutside);
    // 언마운트될 때 이벤트 리스너 제거
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
    }, []); // 빈 배열은 마운트/언마운트 시에만 실행됨

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropbtn" onClick={onToggle}>
        <span className="material-symbols-sharp">more_vert</span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
        <a href="#home" >삭제</a>
        <a href="#about" >Q & A</a>
        <a href="#contact">기몸디</a>
        </div>
      )}
    </div>
  );
};

export default DropDown;