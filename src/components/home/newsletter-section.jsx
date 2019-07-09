import React from "react"

import personImg from '../../images/Ellipse.png'
import img2 from '../../images/rect2.jpg'
import ratingImg from '../../images/baseline-star_rate-18px.png'
import quoteImg from '../../images/baseline-format_quote-24px.png'

export const NewsletterSection = () => {

  return (
    <>
      <style jsx>{`
          $content-box-width: 600px;
          .content-box {
            background: #4850FF;
            color: #fff;
            margin: auto 0 auto 140px;
            position: relative;
            width: $content-box-width;
            padding: 3em 5em 3em 7em;
            min-height: 281px;
            background: linear-gradient(0deg, rgba(72, 80, 255, 0.7), rgba(72, 80, 255, 0.8)), linear-gradient(180deg, rgba(146, 151, 255, 0.67) 0%, rgba(255, 255, 255, 0.2) 90%), url('/apartment-architecture-artist-447592.jpg');
            background-position: center,center, center bottom;
            background-size: cover;
            background-repeat: no-repeat;
            figure {
              position: absolute;
            }
            .quote {
              right: -100px
            }
            .personface {
              left: -50px;
              img {
                width:155px;
              }
            }
            .rating-box img {
              width: 30px;
            }
            &::after {
              content: "";
              width: 90%;
              position: relative;
              bottom: 150px;
              background-color: #979BEE;
            }
          }
          .content-box:nth-of-type(2) {
            background: lighten(rgba(72, 80, 255, 0.9), 10%);
            width: $content-box-width - 30px;
            padding: 0 15px;
            left: 0;
            z-index: -1;
            min-height: 20px;
          }
          .content-box:nth-of-type(3) {
            background: lighten(rgba(72, 80, 255, 0.9), 20%);
            width: $content-box-width - 60px;
            min-height: 20px;
            padding: 0 30px;
            left: 0;
            z-index: -2;
          }
          p.lead strong {
            font-weight: bold;
            font-size: 24px;
            line-height: 26px;
          }
          .desk-photo {
            width: 100%;
            display: block;
            min-height: 600px;
            background-image: url('../../images/rect2.jpg');
            background-size: cover;
          }
        `}
      </style>
      <section className="section grid-container mt-5 mb-5">
        <div className="section-content mt-3">        
          <h3 className="text-center">Testimonials</h3>
          <h4 className="mt-0 mb-5 text-center">
            Happy customers who share their stories
          </h4>
          <div className="row pointed-shadow">
            <div className="col-md-12">
              <div className="content-box mx-auto">
                <figure className="float-left quote">
                  <img src={quoteImg} alt="quote"/>
                </figure>
                <figure className="float-left personface">
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
              <div className="content-box mx-auto"></div>
              <div className="content-box mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}     