/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes  from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useStateContext} from './store'
import isEqual from 'lodash.isequal'


// import './styles.scss'

function ProductDetails () {

  const [product, dispatch] = useStateContext()

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
      <style jsx>{`
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
      `}</style>
        <section id="product-detail" className="section mt-5 mb-5">
          <div className="section-content pt-5">
            <div className="row">
              <div className="col-12">

              <Query query={PRODUCT_QUERY} variables={{productId: product.productId}}>
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
                            <Formik
                              initialValues={{ 
                                orderedQuantity: 1,
                                ...data.product
                              }}

                              validationSchema={Yup.object().shape(
                                {
                                  orderedQuantity: Yup.string().required('Required')
                                }
                              )}
                              onSubmit={(values, { setSubmitting }) => {
                                dispatch({
                                  type: 'saveOrder',
                                  order: {
                                    inCart: true,
                                    ...values
                                  }
                                })
                                setSubmitting(false);
                                
                              }}
                            >
                              {
                                props => {
                                  const {
                                    isSubmitting,
                                    handleChange,
                                    handleSubmit,
                                  } = props;

                                  return (
                                    <Form onSubmit={handleSubmit}>
                                      <div className="form-group">                  
                                        <select 
                                          className="custom-select" 
                                          onChange={handleChange}
                                          name="productType"
                                          multiple
                                        >
                                          <option>Choose type</option>
                                          <option value="HDF">HDF</option>
                                          <option value="MDF">MDF</option>
                                        </select>
                                      </div>
                                      <div className="form-row">
                                        <div className="col-6">                             
                                          <div className="form-group">
                                            <label htmlFor="orderedQuantity">Quantity</label>
                                            <Field id="orderedQuantity" className="form-control" type="number" name="orderedQuantity" />
                                            <ErrorMessage name="qty" component="div" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <button disabled={isSubmitting} type="button" onClick={handleSubmit} className="btn btn-dark btn-block btn-lg">Complete your Order</button>
                                      </div>
                                    </Form>
                                  )
                                }
                              }
                            </Formik>
                            
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
    </>
  )

}

ProductDetails.propTypes = {
  productId: PropTypes.string
}
Formik.propTypes = {
  children: PropTypes.func
}

export default ProductDetails


