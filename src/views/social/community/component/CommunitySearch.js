import { useState } from 'react';
import './CommunitySearch.css';
import axios from 'axios';

function CommunitySearch({showModal, setShowModal, setUpdateBoards}) {

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

    const [show, setShow] = useState(false);
    const [searchOption, setSearchOption] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        setShow(prevShow => !prevShow);
        setShowModal(prevShowModal => !prevShowModal);
    }

    const handleSelectChange = (e) => {
        console.log(e.target.value);
        setSearchOption(e.target.value);
    }

    const handleSearchWord = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearch = () => {
        const searchData = {
            searchBy : searchOption,
            searchWord: inputValue
        }

        axios.get(`http://192.168.0.104:8080/api/v1/boards/search`, {
            params: searchData,
            headers: {
                'Authorization': `${myCookieValue}`,
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            console.log(response.data);
            setUpdateBoards(response.data);
        })
    }

    

    return (
        <div style={{marginBottom:"10px"}}>
            <div className="col-lg-12 col-sm-12" style={{display:"flex", flexDirection:"column", gap:"5%"}}>

                <div className="sidebar-search" style={{width:"80%"}}>
                    <select className="community-search-tag" onChange={handleSelectChange} value={searchOption}>
                        <option value="title">제목</option>
                        <option value="hashtag">해시태그</option>
                    </select>
                    
                    <input  className="form-control" style={{width:"76%", display:"inline-block"}} type="text" name="search" placeholder="Search...." onChange={handleSearchWord}/>
                    <button className="button search-button" type="submit" onClick={handleSearch}><i className="fas fa-search icon-manipulate" style={{position:"relative"}}></i></button>
                    <button className="community-search-button" style={{position:"absolute", right:-140, bottom:15, borderRadius:"3px",width:"120px",height:"50px"}} onClick={handleClick}>POST</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunitySearch;