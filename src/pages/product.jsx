import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes  from 'prop-types'
import Layout from "../components/layout"
import {ExploreProducts} from '../components/home/explore-products'

const queryString = require('query-string')


const Grid = ({location}) => {

  // eslint-disable-next-line react/prop-types
  const productId = location.state && location.state.productId ||
    queryString.parse(location.search).productId;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const PRODUCT_QUERY = gql`
      query ($productId: ID!){
        product(id: $productId) {
            id
            productId
            name
            type
            price
            description
            image {
              id
              sourceUrl
            }
        }
      }
    `
  return (
    <>
      <style jsx>
        {`
          article {
            width: 70vw;
            margin: 0 auto;
          }
          .media {
            background: #e9ecef;
            img {
              width: 100%;
            }
          }
          button {
            border-radius: 0;
          }
        `}
      </style>

      <Layout>
        <div className="container">        
          <section className="section mt-5">
            <div className="section-content pt-5">
              <div className="row">
                <div className="col-12">

                <Query query={PRODUCT_QUERY} variables={{productId}}>
                  {
                    ({loading, data}) => {
                      if (loading) return <div>Loading...</div>;
                      
                      return ( 
                        <article>
                          <h3 className="section-title">
                            Order {data.product.name}
                          </h3>

                          <div className="row mt-5">
                            <div className="col-md-7 col-sm-12">

                              <div className="media">
                                <img src={data.product.image.sourceUrl} alt=""/>
                                
                              </div>

                            </div>
                            <div className="col-md-5 col-sm-12 pt-5">
                              <p className="text-left"
                                dangerouslySetInnerHTML={{
                                  __html: data.product.description
                                }}
                              >
                                
                              </p>
                              <form action="">
                                <div className="form-group">                  
                                  <select className="custom-select" multiple>
                                    <option selected>Choose type</option>
                                    <option value="HDF">HDF</option>
                                    <option value="MDF">MDF</option>
                                  </select>
                                </div>
                                <div className="form-row">
                                  <div className="col-6">                             
                                    <div className="form-group">
                                      <label htmlFor="qty">Quantity</label>
                                      <input min="1" type="number" name="qty" className="form-control"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button className="btn btn-dark btn-block btn-lg">Place Order</button>
                                </div>
                              </form>
                            </div>
                          </div>

                          </article>
                      )
                    }
                  }
                </Query>
                </div> 
              </div>
            </div>
          </section>
          <ExploreProducts />
        </div>
      </Layout>
    </>
  );
}

Grid.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productId: PropTypes.string
    }),
    search: PropTypes.string
  })
}


export default Grid;