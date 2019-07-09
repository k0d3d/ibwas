import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



export const EasyOrder = () => {
  const {swapi} = useStaticQuery(
    graphql`
      query GET_POSTS {
        swapi {
          pageSections {
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
      }
    `
  )  
  return (
    <>
    <style jsx>{`
          $bgc: #f4f4f4;
          .light-grey {
            background-color: $bgc;
          }
          
          .slant {
            top: 0;
            margin-top: 100px;
            position: relative;
            .angled {
              height: 200px;
              width: calc(102% - 5px);
              background-color: rgb(208, 210, 232);
              position: absolute;
              top: 0;
              left: 0;
              transform: rotate(-10deg) skew(-10deg);
              transform-origin: top;
              -webkit-transform: rotate(-10deg) skew(-10deg);
              -webkit-transform-origin: 0 0;
              z-index: 2;
              /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1c24da+49,ffffff+49 */
              background: #1c24da; /* Old browsers */
              background: linear-gradient(to bottom,  #1c24da 2%, rgb(244, 244, 244) 3%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c24da', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
            }
            .section-content {
              z-index: 3;
              position: relative;
            }
            .card {
              width: 292px;
              height: 372px;
              &:hover {
                background: #ffffff;
                box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.25);
              }
            }
            .card-title {
              text-align: left;
              font-weight: bold;
            }
            .btn-link:hover {
              text-decoration: none;
            }
            .card-img-top img {
              width: 218px;
              height: 140px;
            }
            .btn-link {
              margin-top: -25px;
              margin-left: -12px;
            }
          }
        `
      }
    </style>

      <section className="light-grey slant">
        <div className="angled"></div>
        <div className="section-content">
          <h3>Easiest way to buy</h3>
          <h4 className="mt-0 mb-5">
            We have stores packed with the finest wood finishes that will make your project stand out from the crowd.
          </h4>

          <div className="d-flex flex-row justify-content-around">
            {
              swapi.pageSections.edges.map((section) => (
                <div className="card" key={section.node.id} >
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
                      <FontAwesomeIcon icon={faLongArrowAltRight} />&nbsp;
                      Order now
                    </button>
                    </p>
                    <div className="card-img-top">
                      <img src={section.node.featuredImage.sourceUrl} alt={section.node.title}/>
                    </div>
                  </div>
                </div>
                )
              )    
            }
          </div>
                
          </div>
      </section>  

    </>
  )
}

