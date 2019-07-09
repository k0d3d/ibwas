import React from "react"
import img1 from '../../images/apartment-bedroom-drawers-879821.jpg'
import img2 from '../../images/apartment-door-door-handle-16515.jpg'


export const Midsection = () => (
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
                top: -100px;
                position: relative;
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
            }
            
            .card2 {
                grid-area: card2;
                right: 50px;
            }
            
            .card3 {
                grid-area: card3;
                .card-text {
                    margin-top: 40px;
                }
            }            
            
            `
        }
    </style>
    <section className="section grid-container">
        <div className="card-box">        
            <div className="card card1">
                <img src={img1} alt="bedroom-wood"/>
            </div>
            <div className="card card2">
                <img src={img2} alt="bedroom-wood-2"/>
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
);