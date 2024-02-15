import './GameRoomSideProfile.css';

function GameRoomSideProfile() {
    return (
        <div className="col-lg-3 col-md-3 game-profile-layout">
            <div className="row">
                <div className='col-lg-10 col-md-10 game-profile'>
                </div>
                <div className='col-lg-10 col-md-10 game-profile-name'>
                    <div><span>NickName</span><span>조동훈</span></div>
                    <div><span>Playtime</span><span>65:43</span></div>
                    <div><span>Win Rate</span><span>75%</span></div>
                    <div><span>Demo1</span><span></span></div>
                    <div><span>Demo2</span><span></span></div>
                </div>

                <div className='col-lg-10 col-md-10 game-play-button-layout'>
                    <button className="game-play-button">일반 게임</button>
                    <button className="game-play-button">랭킹 게임</button>
                </div>

            </div>
        </div>
    );
  }
  
  export default GameRoomSideProfile;
  




