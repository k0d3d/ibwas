import React from "react"

import personImg from '../../images/Ellipse.png'
import ratingImg from '../../images/baseline-star_rate-18px.png'
import quoteImg from '../../images/baseline-format_quote-24px.png'

import './testimonial.scss'

export const TestimonalSection = () => {

  return (
    <>
      <style jsx>{`

        `}
      </style>
      <section id="testimonial" className="section grid-container mt-5 mb-5">
        <div className="section-content mt-3 pt-5">        
          <h3 data-aos="fade-down" className="text-center">Testimonials</h3>
          <h6 data-aos="fade-down" className="mt-0 mb-5 text-center">
            Happy customers who share their stories
          </h6>
          <div className="row pointed-shadow">
            <div className="col-md-12">
              <div className="content-box mx-auto" data-aos="zoom-in-up">
                <figure className="float-left quote" data-aos="zoom-out-right" data-aos-delay="390">
                  <img src={quoteImg} alt="quote"/>
                </figure>
                <figure className="float-left personface" data-aos="zoom-in-left" data-aos-delay="310">
                  <img src={personImg} alt="kunle-face"/>
                </figure>
                <p className="lead">
                  <strong>
                    I am always happy to refer my colleagues to you when they want to purchase furniture material because I know they will get the same service. I am impressed.
                  </strong>
                </p>
                <p className=" mb-0">Kunle Adewole</p>
                <p className="rating-box">
                  <img src={ratingImg} alt="star5"/>
                  <img src={ratingImg} alt="star5"/>
                  <img src={ratingImg} alt="star5"/>
                  <img src={ratingImg} alt="star5"/>
                  <img src={ratingImg} alt="star5"/>
                </p>
              </div>
              <div className="content-box mx-auto" data-aos="fade-down" data-aos-delay="100" data-aos-offset="-50" ></div>
              <div className="content-box mx-auto" data-aos="fade-down" data-aos-delay="150" data-aos-offset="-50" ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}     