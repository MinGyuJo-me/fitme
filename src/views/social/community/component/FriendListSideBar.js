import './FriendListSideBar.css';

function FriendListSideBar() {
    return (
        <div className="sideber-box">
            <div className="sideber-content">
                <div className="sideber-title st1">
                    <div>
                        <div className='title'>Friends</div>
                        <div className='title'>4,432</div>
                    </div>
                    <div>
                        <div className='title'>Online</div>
                        <div className='title'>1,322</div>
                    </div>
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
            <div className='friends-list-body-description'>
                <div>조동훈</div>
                <div>3days ago....</div>
            </div>
            <div className="friend-status">
            </div>
        </div>
    )
}

  export default FriendListSideBar;
  




