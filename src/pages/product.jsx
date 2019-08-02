import React, { useContext } from 'react';
import PropTypes  from 'prop-types'
import Layout from "../components/layout"
import {ExploreProducts} from '../components/home/explore-products'
import ProductDetail from '../components/products/details'
import Checkout from '../components/products/checkout'
import PageTitle from '../components/page-title'
import { ProductProvider } from '../components/products/store'

const queryString = require('query-string')


const Product = ({location}) => {

  // eslint-disable-next-line react/prop-types
  const productId = location.state && location.state.productId ||
  queryString.parse(location.search).productId;
  
  const initialState = {
    productId,
    inCart: false,
    image: {

    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'saveOrder': 
        return {
          ...state,
          ...action.order
        }
      case 'updateProduct':
        return {
          ...state,
          ...action.product
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
            <ProductDetail productId={productId} />
            <Checkout />
            <ExploreProducts />
          </div>
        </ProductProvider >
      </Layout>
    </>
  );
}

Product.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productId: PropTypes.string
    }),
    search: PropTypes.string
  })
}


export default Product;