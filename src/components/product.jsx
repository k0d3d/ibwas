import React from 'react';
import PropTypes  from 'prop-types'
import Layout from "./layout"
import {ExploreProducts} from './home/explore-products'
import ProductDetail from './products/details'
import Checkout from './products/checkout'
import PageTitle from './page-title'
import { ProductProvider } from './products/store'
import { MoreStuff } from './products/more'
import Thankyou from './products/thankyou'

const queryString = require('query-string')


const Product = ({pageContext}) => {
  // eslint-disable-next-line react/prop-types
  
  const initialState = {
    id: pageContext.productId,
    inCart: false,
    orderSent: false,
    image: {

    },
    ...pageContext
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'saveOrder': {
        
        return {
          ...state,
          ...action.order
        }
      }
      case 'updateProduct':
        return {
          ...state,
          ...action.product
        }
      case 'cancelCheckout':
        return {
          ...state,
          ...action.order
        }
      case 'sendOrderByPhone': 
        window.open(`tel:08094625346`, "_blank")
        return {
          ...state,
          inCart: false,
          orderSent: true
        }
      case 'sendOrderByEmail': 
        window.open(`mailto:hello@ibwasltd.com.ng?subject=I want to order ${state.orderedQuantity} X ${state.name}`, '_blank')
        return {
          ...state,
          inCart: false,
          orderSent: true
        }
      case 'sendOrderByWhatsApp': {
        let msg = queryString.stringify({
          text: ` I want to order ${state.orderedQuantity} X ${state.name}`
        })
        try {
          window.open(`https://wa.me/2348094625346?${msg}`, '_blank')
        } catch (e) {
          console.log(e)
        }
        return {
          ...state,
          inCart: false,
          orderSent: true
        }
      }
      default:
       return state
    }
  }

  return (
    <>
      <style jsx>
        {`

        `}
      </style>

      <Layout>
        <ProductProvider initialState={initialState} reducer={reducer}>
          <PageTitle title="Order Product" />
          <div className="container">        
            <ProductDetail />
            <Checkout />
            <Thankyou />
            <MoreStuff>
              <ExploreProducts />
            </MoreStuff>
          </div>
        </ProductProvider >
      </Layout>
    </>
  );
}

Product.propTypes = {
  pageContext: PropTypes.shape({
    id: PropTypes.string,
    productId: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape( {
      id : PropTypes.string,
      sourceUrl: PropTypes.string,
    })
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      productId: PropTypes.string
    }),
    search: PropTypes.string
  })
}


export default Product;