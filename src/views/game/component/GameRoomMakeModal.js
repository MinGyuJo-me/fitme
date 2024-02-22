import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './GameRoomMakeModal.css';

function GameRoomMakeModal() {
    return (
            <div className='game-room-modal-layout'>
                <div className="col-lg-12 col-sm-12 game-modal-layout">
                
                
                <div className="game-room-modal-container grmc1">

                    <div className='game-room-modal-title'>
                    Game Mode
                    </div>

                    <select className="game-room-modal-select">
                        <option value="">랭킹</option>
                        <option value="">친선</option>
                    </select>

                    <div className='game-room-modal-title'>
                    Peoples
                    </div>
                    <select className="game-room-modal-select">
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                    </select>
                </div>

                <div className="game-room-modal-container grmc2">
                    <OwlCarousel items={4} nav={false} dots={false}>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci1'>
                    </div>
                    <div className='game-mode-card-title'>
                        스쿼트
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci2'>
                    </div>
                    <div className='game-mode-card-title'>
                        윗몸 운동
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci3'>
                    </div>
                    <div className='game-mode-card-title'>
                        팔굽혀 펴기
                    </div>
                    </div>
                    <div className="game-mode-card">
                    <div className='game-mode-card-image gmci4'>
                    </div>
                    <div className='game-mode-card-title'>
                        랜덤 게임
                    </div>
                    </div>
                    </OwlCarousel>
                </div>

                <div className="game-room-modal-container grmc3">
                    <button className='game-room-modal-button'>게임 생성</button>
                    <button className='game-room-modal-button'>취소</button>
                </div>
                </div>
            </div>
    );
  }
  
  export default GameRoomMakeModal;
  




