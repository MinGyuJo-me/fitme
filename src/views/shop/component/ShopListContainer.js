import { useEffect } from 'react';

function ShopListContainer(props) {

  return (
        <div className="food-menu">
            
            <div className="food">
                <div className="food-image">
                <img src={props.data.thumbnail} />
                </div>
                <div className="food-info">
                <h1>{props.data.title}</h1>
                

                <span className="date">
                    <i className="fa-solid fa-tag"></i> {props.data.price}
                </span>
                <span className="comments">
                    <i className="fa-solid fa-star"></i> {props.data.stars} {props.data.reviewer}
                </span>

                <p>
                {props.data.summary}
                </p>
                {/*<a>Read More</a>*/}
                </div>
                <div className="shop-button-layout">
                    <button>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    {/*
                    <button>
                    <i class="fa-solid fa-heart"></i>
                    </button>
                    */}
                </div>
            </div>
        </div>
  );
}

export default ShopListContainer;

