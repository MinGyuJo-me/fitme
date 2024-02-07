import './CommunitySearch.css';

function CommunitySearch() {
    return (
        <div style={{marginBottom:"10px"}}>
        <div className="col-lg-12 col-sm-12" style={{display:"flex", flexDirection:"row-reverse",gap:"10px"}}>
            <button className="community-search-button">미정</button>
            <button className="community-search-button">POST</button>
        </div>
        <div className="col-lg-12 col-sm-12" style={{display:"flex", gap:"5%"}}>
            <select className="search-style">
                <option value="writer">Writer</option>
                <option value="writer">Comment</option>
            </select>

            <div className="sidebar-search" style={{width:"80%"}}>
                <input  className="form-control" type="text" name="search" placeholder="Search...."/>
                <button className="button search-button" type="submit"><i className="fas fa-search icon-manipulate"></i></button>
            </div>
        </div>
        </div>
    );
  }
  
  export default CommunitySearch;
  




