function CommunityProfile(props) {
    return (
        <div className="col-lg-12 col-sm-12" >
            <div className="blog-single-box upper" style={{padding:"10px 0px"}}>
                <div className="blog-left bl1" style={{padding:"60px 0px"}}>
                    <div style={{display:"flex"}}>
                        <div className="blog-icon bi1" style={{backgroundImage: `url(${props.image})`}}>
                        </div>
                        <div className='blog-description'>
                            <a href="#">{props.name}</a>
                            <a href="#">{props.address}</a>

                            <span>{props.enrollDate}</span>
                        </div>
                    </div>

                    <div className='blog-post-detail'>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">POST</div>
                                <div className="blog-post-description-content">{props.postCount}</div>
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Follower</div>
                                <div className="blog-post-description-content">{props.follower}</div>
                                <button className="blog-post-description-button">DM</button>
                            </div>
                            <div className='blog-post-description'>
                                <div className="blog-post-description-title">Following</div>
                                <div className="blog-post-description-content">{props.following}</div>
                                <button className="blog-post-description-button">Add Friend</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default CommunityProfile;
  




