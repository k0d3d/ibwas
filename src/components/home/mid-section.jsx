import React, { useEffect, useState } from "react"

import img1 from '../../images/apartment-bedroom-drawers-879821.jpg'
import img2 from '../../images/apartment-door-door-handle-16515.jpg'

import './mid-section.scss'

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
          }
      
            
          
          `
        }
      </style>
      <section id="mid-section" className="section grid-container">
        <div className={`card-box ${isVisible && 'isVisible'}`}>
          <div className={`card card1`} data-aos="fade-up">
            <img src={img1} alt="bedroom-wood" />
          </div>
          <div className="card card2" data-aos="fade-up">
            <img src={img2} alt="bedroom-wood-2" />
          </div>
          <div className="card card3 shadow-card" data-aos="fade-up">
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