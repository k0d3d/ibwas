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
      product.orderSent && 

        <section id="checkout" className="section p-5">
          
          <div className="row mt-5">
            <div className="col-md-12">
              <h4>
                Thank you for your interest in buying from us.
              </h4>
              <p>
                Continue Shopping.
              </p>
              <p>
                Send Order again
              </p>
            </div>
            <div className="col-md-12">
              <div className="cart-media">
                <p className="text-right text-muted">
                  <span style={{"fontSize": "20px", "fontWeight": "bold"}}>
                    {product.orderedQuantity} 
                  </span>&nbsp;X&nbsp;{product.name}
                </p>
                
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