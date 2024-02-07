import './CommunityFriendListHeader.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function CommunityFriendListHeader() {
    const friendsOption={
        responsive: {
            0: {
                items: 4
            },
            800: {
                items: 7
            },
            1000: {
                items: 9
            }
        }
    }
    return (
        <div className="row" style={{marginTop:"-50px",marginBottom:"40px"}}>
            <div className="col-lg-12 col-sm-12 friendlist ">
                <div className="blog-single-box upper friend-icon-box" style={{background:"#F6F4EC"}}>
                    <OwlCarousel items={9} nav={false} dots={false} {...friendsOption}>
                        <Follower name="조동훈1"/>
                        <Follower name="조동훈2"/>
                        <Follower name="조동훈3"/>
                        <Follower name="조동훈4"/>
                        <Follower name="조동훈5"/>
                        <Follower name="조동훈6"/>
                        <Follower name="조동훈7"/>
                        <Follower name="조동훈8"/>
                        <Follower name="조동훈9"/>
                        <Follower name="조동훈10"/>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    );
  }
  


  function Follower({name}){
    return(
        <div className='friend-icon-item'>
            <div className='blog-icon bi1' style={{boxShadow:"none"}}>
            </div>
            <div className='blog-icon-description'>
                {name}
            </div>
        </div>
    )
  }
  export default CommunityFriendListHeader;
  




