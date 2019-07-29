import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { navigate } from 'gatsby'

import './index.scss'

import backgroundImageSource from '../../images/bedroom-door-entrance-271639.jpg'

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function gotoPage(url) {
  navigate(url)
}

const themes = {
  default: {
    image: backgroundImageSource
  },
  blog: {
    image: 'gallery/19.jpg'
  },
  about: {
    image: 'gallery/9.jpg',
    video: 'vidbw2.mp4'
  }
}

function Slider ({
  subTitle, 
  headingTitle, 
  headingTitles = [], 
  slant = true, 
  theme="default",
  buttons
  }) {

  if (headingTitle && headingTitle.length) {
    headingTitles.push(headingTitle)
  }
  
  const [heading, setHeading] = useState(headingTitles[0])
  
  let pos = 0
  useInterval(() => {
    ++pos
    setHeading(headingTitles[pos % headingTitles.length])
  }, 5000)

  let defaultImage = themes[theme].image
    

  return <section>
  <style jsx>{`
    #coded-slider {
      &.blog {
        aside {
          text-align: center;
          width: 100%;
        }
      }
    }
    .carousel {
      width: 100vw;
      height: 576px;
      color: #e8e8e8;
      position: relative;
      overflow: hidden;
    }
    .grad-bg {
      background: linear-gradient(177deg, rgba(28, 35, 218, 0.78) 38.9%, rgba(151, 155, 238, 0.556518) 72.91%, rgba(255, 255, 255, 0.4) 100%), rgba(28, 36, 218, 0.39);
      background-size: cover, cover;
      background-position: center, top right;
      background-size: cover;
      background-repeat: no-repeat;
      z-index: 3;
      width: 100%;
      height: 100%;
      position: absolute;      
    }
    h1 {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
    }

    button {
      border-radius: 50px;
    }

    .hero-btn {
      border-width: 2px;
      border-style: solid;
      color: #f53f3f;
      border-color: #f53f3f80;
      color: white;
      background: #f53f3f;
      box-shadow: 0 2px 12px #dc3545;
      margin-bottom: 2px;
      &:hover {
        background: transparent;
        color: #f53f3f;
        box-shadow: none;
      }
    }

    .slider-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
    .carousel-inner {
      postion: relative;
      z-index: 4;
    }

    `}</style>
    <div id="coded-slider" className={`carousel slide ${theme}`} data-ride="carousel">
      <div className="grad-bg"></div>
      <img src={defaultImage} className="slider-image kenburns-bottom-left" />
      <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="container">
                  <aside>
                          <h1 className="slide-in-blurred-top">
                              {heading}
                          </h1>

                          <p className="slide-in-blurred-left">
                              { subTitle } 
                          </p>
                          {
                            buttons && 
                            <div className="btn-group" role="group" aria-label="Basic example">
                            {
                              buttons.map((btn, index) => (
                                <button onClick={() => gotoPage(btn.url)} type="button" className={`btn ${btn.cls}`} key={`btn ${index}`}>
                                  {btn.text}
                                </button>
                              ))
                            }
                            </div>
                          }
                  </aside>
              </div>
          </div>
      </div>  
      <div className="scroll-link">
        <svg className="mouse" xmlns="..." viewBox="0 0 76 130" preserveAspectRatio="xMidYmid meet">
          <g fill="none" fillRule="evenodd">
          <rect width="70" height="118" x="1.5" y="1.5" stroke="#e4e4e4" strokeWidth="3" rx="36"  strokeOpacity="0.6" />
          <circle className="scroll" cx="36.5" cy="31.5" r="4.5" fill="#FFF"/>
          </g>
        </svg>

      </div>
    </div>
</section> 
}

Slider.propTypes = {
  headingTitles: PropTypes.array,
  headingTitle: PropTypes.string,
  subTitle: PropTypes.string,
  theme: PropTypes.string,
  slant: PropTypes.bool,
  buttons: PropTypes.array
}



Slider.defaultProps = {
  slant: true
}

export default Slider