import React, { useEffect, useState } from "react"
import { Waypoint } from 'react-waypoint';

import img1 from '../../images/apartment-bedroom-drawers-879821.jpg'
import img2 from '../../images/apartment-door-door-handle-16515.jpg'


export const Midsection = () => {

  const [isVisible, setBoxVisibility] = useState(false)

  function onIntersection(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // debugger
        setBoxVisibility(true)
        observer.unobserve(entry.target)
      }
    }

  }

  const observer = new IntersectionObserver(onIntersection, { threshhold: 0.35, rootMargin: "-300px" });
  useEffect(() => {
    const targets = document.querySelector('.card-box')
    observer.observe(targets)
  })
  // targets.forEach(element => observer.observe(element))

  return (
    <>
      <style jsx>
        {`
             
          section {
              position: relative;
          }
      
          .card-box {
              width: 434px * 2 - 100;
              margin-left: auto;
              margin-right: auto;
              transform: translateX(20px);
              position: relative;
              opacity: 0;
          }
          .card-box.isVisible {
            opacity: 1;
            transform: translateY(-30px);
            transition: transform 350ms, opacity 300ms;
            margin-bottom: 5em;
            & .card3 {
              opacity: 1;
              transform: translateY(-80px);
              transition: transform 350ms, opacity 200ms;
              transition-delay: 300ms;
            }
            & .card2 {
              opacity: 1;
              transform: translateY(-80px);
              transition: transform 350ms, opacity 200ms;
              transition-delay: 200ms;
            }
            & .card1 {
              opacity: 1;
              transform: translateY(-80px);
              transition: transform 350ms, opacity 300ms;
              transition-delay: 100ms;
            }
          }
      
          .card {
              width: 434px;
              height: 484px;
              position: relative;
              top: 0;
              border: none;
                  img {
                      width: 434px;
                      height: 484px;
                  }
          }
          .shadow-card {
              background: #ffffff;
              box-shadow: rgba(0, 0, 0, 0.18) 0px 8px 18px 0px;
          }
      
          .card-title {
              font-weight: bold;
              font-size: 4em;
              line-height: 75px;
              color: #000000;
          }
      
          .card-body {
              padding: 1.9rem;
          }
      
          .card-text {
              font-size: 1.75em;
          }

          grid-container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr;
              grid-template-areas: "card-box card-box . ." "card-box card-box . ." "card-box card-box . ." "card-box card-box . .";
          }
          
          .card-box {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr 1fr 1fr;
              grid-template-areas: "card1 ." "card1 card2" "card3 card2" "card3 .";
              grid-area: card-box;
          }
          
          .card1 {
              grid-area: card1;
              transform: translateY(50px);
          }
          
          .card2 {
              grid-area: card2;
              right: 50px;
          }
          
          .card3 {
              grid-area: card3;
              opacity: 0;

              .card-text {
                  margin-top: 40px;
              }
          }            
          
          `
        }
      </style>
      <section className="section grid-container">
        <div className={`card-box ${isVisible && 'isVisible'}`}>
          <div className={`card card1`}>
            <img src={img1} alt="bedroom-wood" />
          </div>
          <div className="card card2">
            <img src={img2} alt="bedroom-wood-2" />
          </div>
          <div className="card card3 shadow-card">
            <div className="card-body">
              <h3 className="card-title">
                For every purpose
                            </h3>
              <p className="card-text">
                At IBWAS Nigeria Limited, we want you to do great things. That is why we sell only the finest quality wood furniture materials.
                            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};