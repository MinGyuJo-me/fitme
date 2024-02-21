import './Heart_Example.css';
import $ from 'jquery';

function Heart_Example(props) {

    $(function() { 
        var heart = $('.heart-icon')
            // Add class
        
            heart.hover(function(){
            heart.toggleClass('heart-dots');

            heart.click(function(){
            heart.toggleClass('heart-liked');           heart.toggleClass('heart-beating');  
            });
        });
    });

    return (
        <div className="heart-icon-wrapper">
            <div className="heart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
            <path d="M150 57.3C100.2-17.4.7 26.3.7 107.6c0 55 49.7 94.2 87.1 123.8 38.8 30.7 49.8 37.3 62.2 49.8 12.4-12.4 22.8-19.7 62.2-49.8 37.9-29 87.1-69.4 87.1-124.4 0-80.7-99.5-124.4-149.3-49.7z" fill-rule="evenodd" clip-rule="evenodd"/>
            </svg>
                <span className="i1"></span>
                <span className="i2"></span>
                <span className="i3"></span>
                <span className="i4"></span>
                <span className="i5"></span>
                <span className="i6"></span>
                <span className="i7"></span>
                <span className="i8"></span>
                <span className="i1"></span>
                <span className="i2"></span>
                <span className="i3"></span>
                <span className="i4"></span>
                <span className="i5"></span>
                <span className="i6"></span>
                <span className="i7"></span>
                <span className="i8"></span>
                <span className="i1"></span>
                <span className="i2"></span>
                <span className="i3"></span>
                <span className="i4"></span>
                <span className="i5"></span>
                <span className="i6"></span>
                <span className="i7"></span>
                <span className="i8"></span>
            </div>
        </div>
    );
}

export default Heart_Example;