import React from "react"
import img1 from '../../images/apartment-bedroom-drawers-879821.jpg'
import img2 from '../../images/apartment-door-door-handle-16515.jpg'

import './mid-section.scss';


export const Midsection = () => (
    <section className="section grid-container">
        <div className="card-box">        
            <div className="card card1">
                <img src={img1} alt="bedroom-wood"/>
            </div>
            <div className="card card2">
                <img src={img2} alt="bedroom-wood-2"/>
            </div>
            <div className="card card3">
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
);