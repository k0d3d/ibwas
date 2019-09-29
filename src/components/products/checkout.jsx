import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import emailImg from './email.svg'
import smartphoneImg from './smartphone.svg'
import whatsAppImg from './whatsapp.svg'
import {useStateContext} from './store'

import './checkout.scss'

function Checkout () {
  const [product, dispatch] = useStateContext()


  return (

    <>
    <style jsx>
      {
        `
          h5 {
            margin: 1em 0 0.1em; 
          }

        `
      }
    </style>
    {
      product.inCart && 

        <section id="checkout" className="section p-5">

          <div className="row mt-5">
            <div className="col-md-6 col-sm-12">
              <h4>
                Complete your order by picking one of our available sales channels below.
              </h4>
            </div>
            <div className="col-md-4 offset-md-2 col-sm-12">
              <div className="cart-media">
                <p className="text-right text-muted">
                  <span style={{"fontSize": "20px", "fontWeight": "bold"}}>
                    {product.orderedQuantity} 
                  </span>&nbsp;X&nbsp;{product.name}
                </p>
                
              </div>
            </div>
          </div>
          <div className="row cards">
            <div className="card " onClick={() => {
              dispatch({
                type: 'sendOrderByWhatsApp',
              })
            }}>
              <img className="card-img-top" src={whatsAppImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by WhatsApp</h5>
                <p className="card-text"><small className="text-muted">Online.</small></p>
                <p className="card-text msg">Add us using 08094625346</p>
              </div>
            </div>
            <div className="card" onClick={() => {
              dispatch({
                type: 'sendOrderByPhone',
              })
            }}>
              <img className="card-img-top" src={smartphoneImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by Phone </h5>
                <p className="card-text"><small className="text-muted">Available</small></p>
                <p className="card-text msg">Request a call to complete this order</p>
              </div>
            </div>
            <div className="card"onClick={() => {
              dispatch({
                type: 'sendOrderByEmail',
              })
            }}>
              <img className="card-img-top" src={emailImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by Email</h5>
                <p className="card-text"><small className="text-muted">24 Hour response.</small></p>
                <p className="card-text msg">Send this order to us via email.</p>
              </div>
            </div>
          </div>
        
          <div className="row m-5">
            <div className="col-12">
            <button className="btn btn-sm btn-outline-danger" onClick={() => {
              dispatch({
                type: 'cancelCheckout',
                order: {
                  inCart: false
                }
              })
            }}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
              &nbsp;Cancel Order
            </button>
            </div>
          </div>
        </section>
      }
    </>

  )
}

Checkout.propTypes = {

}

export default Checkout