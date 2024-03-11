function ShopListContainer() {
  return (
        <div className="food-menu">
            <div className="food">
                <div className="food-image">
                <img src="https://image.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25887.jpg" alt="Food" />
                </div>
                <div className="food-info">
                <h1>[맛있닭] 닭가슴살 스테이크</h1>


                <span className="date">
                    <i className="fa-solid fa-tag"></i> 217,500
                </span>
                <span className="comments">
                    <i className="fa-solid fa-star"></i> 5 stars
                </span>

                <p>
                    내용 넣을 부분임 ㅇㅇ.
                </p>
                <a>Read More</a>
                </div>
                <div className="shop-button-layout">
                    <button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button>
                    <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
  );
}

export default ShopListContainer;

