function CommunityProfile() {
    return (
        <div className="col-lg-12 col-sm-12" >
            <div className="blog-single-box upper" style={{padding:"10px 0px"}}>
                <div className="blog-left bl1" style={{padding:"60px 0px"}}>
                    <div style={{display:"flex"}}>
                        <div className="blog-icon bi1">
                        </div>
                        <div className='blog-description'>
                            <a href="#">Jo-dong-hun</a>
                            <a href="#">서울시 강남구 서초동 서초대로</a>
                            <span>January 27, 2023</span>
                        </div>
                    </div>

                    <div className='blog-post-detail'>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">POST</div>
                                <div className="blog-post-description-content">2023</div>
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Follower</div>
                                <div className="blog-post-description-content">2023</div>
                                <button className="blog-post-description-button">Following</button>
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Following</div>
                                <div className="blog-post-description-content">2023</div>
                                <button className="blog-post-description-button">+Friend</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunityProfile;
  




