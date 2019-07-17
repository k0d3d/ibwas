import React from 'react';
import img1 from '../../images/Rectangle 7.3.jpg'
import img2 from '../../images/Rectangle 7.4.jpg'
import img3 from '../../images/Rectangle 7.5.jpg'
import img4 from '../../images/Rectangle 7.6.jpg'

export const ExploreProducts = () => (
  <>
    <style jsx>{`
        .section {
          background-color: #DFDBE5;
          background-image: url("./papyrus.png");
        }
        .timg img{
          width: 240px;
          height: auto;
        }
      `}
    </style>
    <section className="section pt-5">
      <div className="section-content pt-5 mb-5">
            <h3>Explore our products</h3>
            <h6 className="mt-0 mb-5">
              Do you have an idea in mind and are you looking for the right wood ?
            </h6>
            <div className="d-flex flex-row justify-content-around">
              <div className="text-center timg">
                <img className="rounded mx-auto d-block" src={img1} alt="cabinets" />
                <p className="caption">Cabinet</p>
              </div>
              <div className="text-center timg">
                <img className="rounded mx-auto d-block" src={img2} alt="doors" />
                <p className="caption">Doors</p>
              </div>
              <div className="text-center timg">
                <img className="rounded mx-auto d-block" src={img3} alt="Beds" />
                <p className="caption">Beds</p>
              </div>
              <div className="text-center timg">
                <img className="rounded mx-auto d-block" src={img4} alt="Tables" />
                <p className="caption">Tables</p>
              </div>
            </div>
      </div>
    </section>
  </> 
)