import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

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

function Slider ({subTitle, headingTitle, headingTitles = [], slant = true}) {

  if (headingTitle && headingTitle.length) {
    headingTitles.push(headingTitle)
  }
  
  const [heading, setHeading] = useState(headingTitles[0])
  
  let pos = 0
  useInterval(() => {
    ++pos
    setHeading(headingTitles[pos % headingTitles.length])
  }, 3000)
    

  return <section>
  <style jsx>{`

    .carousel {
      background: linear-gradient(177deg, rgba(28, 35, 218, 0.68) 38.9%, rgba(151, 155, 238, 0.756518) 72.91%, rgba(255, 255, 255, 0) 100%), url(${backgroundImageSource}), rgba(28, 36, 218, 0.69);
      clip-path: ${slant && 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)'};
      width: 100vw;
      height: 676px;
      background-size: cover, cover;
      color: #e8e8e8;
    }
    
    aside {
      width: 50%;
      position: relative;
      margin-top: 80px;
    }
    
    aside h1 {
      font-weight: bold;
      font-size: 66px;
      line-height: 112.5%;
    }
    
    aside p {
      font-size: 32px;
    }
    .icon-figure {
      display: none;
    }
    .scroll-link {
      position: absolute;
      bottom: 50%;
      left: 95%;
      transform: translateX(-50%);
    }
    .mouse {
      max-width: 2.5rem;
      width: 100%;
      height: auto;
    }
    .scroll {
      animation-name: scroll;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.650, -0.550, 0.250, 1.500);
      animation-iteration-count: infinite;
      transform-origin: 50% 20.5px;
      will-change: transform;
    }    
    @keyframes scroll {
      0%, 20% {
      transform: translateY(0) scaleY(1);
      }
      10% {
      opacity: 1;
      }
      100% {
      transform: translateY(36px) scaleY(2);
      opacity: 0.01;
      }
    }
        
    @media (min-width: 320px) and (max-width: 480px)  {
      aside {
        width: 73vw;
        margin-top: 15%;
      }
      aside h1 {
        font-size: 42px;
      }
      .carousel {
        background-position: center, top right;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .d-flex {
        justify-content: center;
        text-align: center;
      }
      .icon-figure {
        display: block;
        top: 42px;
        position: relative;
      }
    }
    `}</style>
    <div className="carousel slide" data-ride="carousel">
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
        <div className="d-flex flex-row">
            <figure className="icon-figure">
                <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" />
            </figure>
        </div>
      </div>
    </div>
</section> 
}

Slider.propTypes = {
  headingTitles: PropTypes.array,
  headingTitle: PropTypes.string,
  subTitle: PropTypes.string,
  slant: PropTypes.bool
}



Slider.defaultProps = {
  slant: true
}

export default Slider