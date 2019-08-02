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
          <button className="btn btn-sm btn-outline-danger">
            <FontAwesomeIcon icon={faTimes} size="lg" />
            &nbsp;Cancel Order
          </button>
          <h4>
            Complete your order by picking one of our available sales channels below.
          </h4>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>
                Order Summary:
              </p>

            </div>
            <div className="col-md-6 col-sm-12">
              <div className="media">
                <img src={product.image.sourceUrl} alt={product.name}/>
                <p>{product.name} </p>
                <span>{product.orderQuantity}</span>
              </div>
            </div>
          </div>
          <div className="row cards">
            <div className="card ">
              <img className="card-img-top" src={whatsAppImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by WhatsApp</h5>
                <p className="card-text"><small className="text-muted">Online.</small></p>
                <p className="card-text msg">Add us using 08094625346</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={smartphoneImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by Phone </h5>
                <p className="card-text"><small className="text-muted">Available</small></p>
                <p className="card-text msg">Request a call to complete this order</p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={emailImg} alt="sales channel" />
              <div className="card-body">
                <h5 className="card-title">Order by Email</h5>
                <p className="card-text"><small className="text-muted">24 Hour response.</small></p>
                <p className="card-text msg">Send this order to us via email.</p>
              </div>
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