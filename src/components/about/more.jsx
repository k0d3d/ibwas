import React from 'react';
import moreImg from './moreabout.jpg'

import './about.scss'

export function MoreAboutSection () {

  return (
    <>
      <style jsx>{`
          .section {
            position: relative;
            margin-top: 100px;
            padding-top: 50px;
          }
          .section-content {
            height: auto;
            min-height: 512px;
          }

        `}
      </style>
      <section id="more-section" className="section">
        <div className="section-content">
          <p className="text-center img-c">
            <img src={moreImg} alt="the room and wood"/>
          </p>  
          <aside className="side-text" data-aos="fade-right">
            <p>
              Beautiful furniture should also be strong and timeless, passed on from one generation to the next.
            </p>
          </aside>

          <aside className="side-text" data-aos="fade-left">
            <p>
              We want to ensure your home and office furniture is built with the best quality wood materials.
            </p>
          </aside>            
        </div>
      </section>
    </>
  )
}