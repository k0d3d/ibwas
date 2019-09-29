/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes  from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useStateContext} from './store'


// import './styles.scss'

function ProductDetails () {
  const [product, dispatch] = useStateContext()

  // eslint-disable-next-line react-hooks/rules-of-hooks
 

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
      {
        !product.inCart && !product.orderSent &&
      
        <section id="product-detail" className="section mt-5 mb-5">
          <div className="section-content pt-5">
            <div className="row">
              <div className="col-12">
 
              <article>
                <h3 className="section-title">
                  Order {product.name}
                </h3>

                <div className="row mt-5">
                  <div className="col-md-7 col-sm-12">

                    <div className="media">
                      <img src={product.image.sourceUrl} alt=""/>
                      
                    </div>

                  </div>
                  <div className="col-md-5 col-sm-12 pt-5">

                    <Formik
                      initialValues={{ 
                        orderedQuantity: 1,
                        ...product
                      }}

                      validationSchema={Yup.object().shape(
                        {
                          orderedQuantity: Yup.number().min(1, 'Enter the quantity'),
                          productType: Yup.string().required('Choose a product type.'),
                          productWidth: Yup.string().required('Choose a thinkness or width .'),
                        }
                      )}
                      onSubmit={(values, { setSubmitting }) => {
                        dispatch({
                          type: 'saveOrder',
                          order: {
                            ...values,
                            inCart: true
                          }
                        })
                        setSubmitting(false);
                        
                      }}
                    >
                      {
                        props => {
                          const {
                            errors,
                            isSubmitting,
                            handleChange,
                            handleSubmit,
                          } = props;

                          return (
                            <Form onSubmit={handleSubmit}>
                              <div className="form-group"> 
                              <label htmlFor="orderedQuantity">Choose a Width</label>   
                                <select 
                                  className="custom-select" 
                                  onChange={handleChange}
                                  name="productWidth"
                                  multiple
                                >
                                  <option value="17mm">17mm</option>
                                  <option value="15mm">15mm</option>
                                  <option value="9mm">9mm</option>
                                  <option value="4mm">4mm</option>
                                  <option value="3mm">3mm</option>
                                </select>          
                                </div>
                                <div className="form-group">
                                <label htmlFor="orderedQuantity">Choose a Type</label>       
                                <select 
                                  className="custom-select" 
                                  onChange={handleChange}
                                  name="productType"
                                  multiple
                                >
                                  <option value="HDF">HDF</option>
                                  <option value="MDF">MDF</option>
                                </select>
                                {errors.productType ? (
                                  <small style={{display: "block"}} className="form-text invalid-feedback">{errors.productType}</small>
                                ) : null}
                              </div>
                              <div className="form-row">
                                <div className="col-6">                             
                                  <div className="form-group">
                                    <label htmlFor="orderedQuantity">Quantity</label>
                                    <Field id="orderedQuantity" className="form-control" type="number" name="orderedQuantity" />
                                    <ErrorMessage name="orderedQuantity" component="div" />
                                    {errors.orderedQuantity ? (
                                      <small style={{display: "block"}} className="form-text invalid-feedback">{errors.orderedQuantity}</small>
                                    ) : null}
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
                    
              
              </div> 
            </div>
          </div>
        </section>      
      }
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


