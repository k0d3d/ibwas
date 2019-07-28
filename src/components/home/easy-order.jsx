import React from "react"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


import './easy-order.scss'

export const EasyOrder = () => {
  const PAGE_SECTION = gql`
    query {
      pageSections(
        where: {
          categoryName: "easyorder"
        }
      ){
        edges {
          node {
            id
            title
            content
            featuredImage {
              id
              sourceUrl
            }
          }
        }
      }
    }
  ` 


  return (
    <>
    <style jsx>{`
        .section-content  {
          padding-top: 5rem;
        }
      `
      }
    </style>

      <section id="easy-order" className="light-grey slant">
        <div className="angled"></div>
        <div className={`section-content`}>
          <h3 data-aos="fade-down">Easiest way to buy</h3>
          <h6 data-aos="fade-down" className="mt-0 mb-5">
            We have stores packed with the finest wood finishes that will make your project stand out from the crowd.
          </h6>

          <div className="row justify-content-around">
            <Query query={PAGE_SECTION}>
              {
                ({loading, data}) => {
                  if (loading) return <div>Loading...</div>;
                  return (
                    data.pageSections.edges.map(
                      (section) => (

                        <div className="col-md-4 col-sm-12" key={section.node.id} data-aos="zoom-out-down">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="card-title" dangerouslySetInnerHTML={{
                                  __html: section.node.title
                                }}></h5>
                              <div className="card-text" dangerouslySetInnerHTML={{
                                  __html: section.node.content
                                }}>
                              </div>
                              <p style={{textAlign: 'right'}}>
                                <button className="btn btn-link">
                                  Order now
                                </button>
                              </p>
                              <div className="card-img-top">
                                <img src={section.node.featuredImage.sourceUrl} alt={section.node.title}/>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  )    
                }
              }
            </Query>
          </div>
                
          </div>
      </section>  

    </>
  )
}

