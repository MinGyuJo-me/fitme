import './FriendListSideBar.css';

function FriendListSideBar() {
    return (
        <div class="sideber-box">
            <div class="sideber-content">
                <div class="sideber-title">
                    <h3>Friends</h3>
                </div>
            </div>
            {/*친구 목록*/}
            <FriendContainer/>
            <FriendContainer/>
            <FriendContainer/>
            <FriendContainer/>
            <FriendContainer/>
            <FriendContainer/>
            <FriendContainer/>
        </div>
    );
  }
  

function FriendContainer(){
    return(
        <div className="friend-list-body">
            <div className="friends-icon">
                <img src={require('../../../../assets/images/2.jpg')}></img>
            </div>
            <div className='friends-list-body-description' style={{border:"1px solid red"}}>
                dddd
            </div>
        </div>
    )
}

  export default FriendListSideBar;
  




