import React from 'react'
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.scss';


export const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
  }
]


export const GallerySlider = ({slides}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {
        slides.map((slide, key) => (
          <div className="slide-item" key={`slide-${key}`}>
            <style jsx>{`            
              :root {
              }
              .slide-item {
                max-width: 350px;
                img {
                  width: 100%;
                }
              }
            `}
            </style>
            <img src={slide.src} alt=""/>
            
          </div>
        ))
      }
    </Slider>
  );
}

export default GallerySlider

// ReactDOM.render(, document.getElementById('app'));