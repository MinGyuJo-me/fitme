function CommunityBoard() {
    return (
        <div class="col-lg-12 col-sm-12">
        <div class="blog-single-box upper">
            <div class="blog-thumb">
                <img src={require('../../../../assets/images/blog-0.jpg')} alt=""/>
                <div class="blog-btn">
                    <div>1/5</div>
                </div>
            </div>
            <div class="blog-content">

                <div class="blog-left">
                    <div className="blog-icon">
                    </div>
                    <div className='blog-description'>
                        <a href="#">Jo-dong-hun</a>
                        <a href="#">서울시 강남구 서초동 서초대로</a>
                        <span>January 27, 2023</span>
                    </div>
                </div>

                <h2><a href="blog-details.html">이번에 새로 산 차.</a></h2>
                
                <p>Nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum lorem tincidunt congue porta. Non ligula egestas commodo massa. Lorem non sit vivamus convallis elit mollis. Viverra sodales feugiat
                    dsfdsafadsfadsfadsfdasdsfdsafadsfads
                </p>
                <div class="blog-button">
                    <a href="#">read more</a>
                    <div className="blog-button-container">
                        <div className='blog-button-item'>
                            <img src={require('../images/chat_bubble.png')}/>
                        </div>
                        <div className='blog-button-item'>
                            <img src={require('../images/heart.png')}/>
                        </div>
                        <div className='blog-button-item'>
                            <img src={require('../images/scrap.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default CommunityBoard;
  




