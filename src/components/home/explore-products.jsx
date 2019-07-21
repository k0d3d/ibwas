import React from 'react';
import img1 from '../../images/Rectangle 7.3.jpg'
import img2 from '../../images/Rectangle 7.4.jpg'
import img3 from '../../images/Rectangle 7.5.jpg'
import img4 from '../../images/Rectangle 7.6.jpg'

import './explore-products.scss'

export const ExploreProducts = () => (
  <>
    <style jsx>{`

      `}
    </style>
    <section id="explore-products" className="section pt-5">
      <div className="section-content pt-5 mb-5">
            <h3 data-aos="fade-down">Explore our products</h3>
            <h6 data-aos="fade-down" className="mt-0 mb-5">
              Do you have an idea in mind and are you looking for the right wood ?
            </h6>
            <div className="row">
              <div data-aos="zoom-in-right" className="text-center timg col-6 col-md-3">
                <div className="bn">
                  <img className=" mx-auto d-block" src={img1} alt="cabinets" />
                </div>
                <p className="caption">
                  <button className="btn btn-link">
                    Cabinet
                  </button>
                </p>
              </div>
              <div data-aos="zoom-in-right" className="text-center timg col-6 col-md-3">
                <div className="bn">
                  <img className=" mx-auto d-block" src={img2} alt="doors" />
                </div>
                <p className="caption">
                  <button className="btn btn-link">
                    Doors
                  </button>
                </p>
              </div>
              <div data-aos="zoom-in-left" className="text-center timg col-6 col-md-3">
                <div className="bn">
                  <img className=" mx-auto d-block" src={img3} alt="Beds" />
                </div>
                <p className="caption">
                  <button className="btn btn-link">
                    Beds
                  </button>
                </p>
              </div>
              <div data-aos="zoom-in-left" className="text-center timg col-6 col-md-3">
                <div className="bn">
                  <img className=" mx-auto d-block" src={img4} alt="Tables" />
                </div>
                <p className="caption">
                  <button className="btn btn-link">
                    Tables
                  </button>
                </p>
              </div>
            </div>
      </div>
    </section>
  </> 
)