import { useState } from 'react';
import './CommunitySearch.css';

function CommunitySearch({showModal, setShowModal}) {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(prevShow => !prevShow);
        setShowModal(prevShowModal => !prevShowModal);
    }

    return (
        <div style={{marginBottom:"10px"}}>
            <div className="col-lg-12 col-sm-12" style={{display:"flex", flexDirection:"column", gap:"5%"}}>

                <div className="sidebar-search" style={{width:"80%"}}>
                    {/************  작성자 제목 해시태그 부분 ************* */}
                    <select className="community-search-tag">
                        <option value="">제목</option>
                        <option value="">작성자</option>
                        <option value="">해시태그</option>
                    </select>
                    
                    <input  className="form-control" style={{width:"76%", display:"inline-block"}} type="text" name="search" placeholder="Search...."/>
                    <button className="button search-button" type="submit"><i className="fas fa-search icon-manipulate" style={{position:"relative"}}></i></button>
                    <button className="community-search-button" style={{position:"absolute", right:-140, bottom:15, borderRadius:"3px",width:"120px",height:"50px"}} onClick={handleClick}>POST</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunitySearch;