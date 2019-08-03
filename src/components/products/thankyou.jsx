import React from 'react';
import { Link } from 'gatsby'
import {useStateContext} from './store'

import './checkout.scss'

function Thankyou () {
  const [product, dispatch] = useStateContext()


  return (

    <>
    <style jsx>
      {
        `
          h5 {
            margin: 1em 0 0.1em; 
          }
          section {
            margin: 100px auto;
          }

        `
      }
    </style>
    {
      product.orderSent && 

        <section id="Thankyou" className="section p-5">
          <div className="section-content">
            <div className="row mt-5">
              <div className="col-md-12">
                <h3>
                  Thank you for your interest in buying from us.
                </h3>
                <p className="text-center">
                  <Link to="products" className="btn btn-outline-primary">
                    Continue Shopping.
                  </Link>
                </p>
                <p className="text-center">
                  <button onClick={() => {
                    dispatch({
                      type: 'sendOrderByWhatsApp'
                    })
                  }} className="btn btn-link">
                    Send Order again
                  </button>
                </p>
              </div>
            </div>
          </div>          
        </section>
      }
    </>

  )
}

Thankyou.propTypes = {

}

export default Thankyou