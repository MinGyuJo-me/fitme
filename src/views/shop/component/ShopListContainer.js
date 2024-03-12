import React from 'react';
import Swal from 'sweetalert2'; // SweetAlert2를 import합니다.
    
function ShopListContainer(props) {
    const handleAddToCart = () => {
        if (props.data) {
        const cartItem = {
            title: props.data.title,
            price: props.data.price,
            thumbnail: props.data.thumbnail,
            // 필요한 다른 속성 추가
        };
    
        const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        cartItems.push(cartItem);
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log("상품이 장바구니에 추가되었습니다:", cartItem);
    
        props.onAddToCart(cartItem);
    
        // SweetAlert2를 사용하여 알림 표시
        Swal.fire({
            icon: 'success',
            title: '장바구니에 추가되었습니다!',
            showConfirmButton: false,
            timer: 1500 // 1.5초 동안 알림을 표시합니다.
        });
        }
    };

  return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 grid">
                <div className="food-image">
                     <a href={props.data.link}>
                         <img src={props.data.thumbnail} />
                     </a>
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
                     <button onClick={handleAddToCart}>
                         <i className="fa-solid fa-cart-shopping"></i>
                     </button>
                 </div>
                </div>
            </div>
    </div>





        // <div className="food-menu">
            
        //     <div className="food">
        //         <div className="food-image">
        //             <a href={props.data.link}>
        //                 <img src={props.data.thumbnail} />
        //             </a>
        //         </div>
        //         <div className="food-info">
        //             <h1>{props.data.title}</h1>
        //         <span className="date">
        //             <i className="fa-solid fa-tag"></i> {props.data.price}
        //         </span>
        //         <span className="comments">
        //             <i className="fa-solid fa-star"></i> {props.data.stars} {props.data.reviewer}
        //         </span>

        //         <p>
        //         {props.data.summary}
        //         </p>
        //         {/*<a>Read More</a>*/}
        //         </div>
        //         <div className="shop-button-layout">
        //             <button>
        //                 <i className="fa-solid fa-cart-shopping"></i>
        //             </button>
        //             {/*
        //             <button>
        //             <i class="fa-solid fa-heart"></i>
        //             </button>
        //             */}
        //         </div>
        //     </div>
        // </div>
  );
}

export default ShopListContainer;

