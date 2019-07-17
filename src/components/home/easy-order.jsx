import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



export const EasyOrder = () => {
  const {swapi} = useStaticQuery(
    graphql`
      query PAGE_SECTION {
        swapi {          
          pageSections(where: {
            categoryName: "easyorder"
          }){
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
    
  const [isVisible, setBoxVisibility] = useState(false)

  function onIntersection(entries, observer) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        // debugger
        setBoxVisibility(true)
        observer.unobserve(entry.target)
      }
    }

  }

  const observer = new IntersectionObserver(onIntersection, { threshhold: 0.35, rootMargin: "-300px" });
  useEffect(() => {
    const targets = document.querySelector('.slant h3')
    observer.observe(targets)
  })


  return (
    <>
    <style jsx>{`
          $bgc: #f4f4f4;
          .light-grey {
            background-color: $bgc;
          }

          @keyframes swing-in-top-fwd {
            0% {
              -webkit-transform: rotateX(-100deg);
                      transform: rotateX(-100deg);
              -webkit-transform-origin: top;
                      transform-origin: top;
              opacity: 0;
            }
            100% {
              -webkit-transform: rotateX(0deg);
                      transform: rotateX(0deg);
              -webkit-transform-origin: top;
                      transform-origin: top;
              opacity: 1;
            }
          }
                    
          .slant {
            top: 0;
            margin-top: -12px;
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
            @mixin cardtransition{
              @for $i from 1 through 3 {
                &:nth-child(#{$i}) {
                  opacity: 1;
                  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) #{$i * .3}s both;
                }
              }
            }
            .section-content.isVisible {
              & .card {
                @include cardtransition
              }
            }
            h5 {
              margin-top: 0;
            }
            .card {
              width: 292px;
              height: 372px;
              overflow: hidden;
              opacity: 0;
              &:hover {
                background-color: #004ae9;
                background-image: linear-gradient(160deg, #004ae9 0%, #80D0C7 100%);
                box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.55);
                border: none;
                transition: box-shadow 200ms ease-in;
                & .card-body {
                  transform: translateY(-35%);
                  transition: transform 280ms ease-in-out;
                  color: white
                }
                & .btn-link {
                  color: black;
                  background: white;
                  padding: 2px 7px 2px 2px;
                  border-radius: 25px;
                  transform: translateY(10px);
                  transition: transfrom 250ms;
                  transition-delay: 300ms;
                }
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
        <div className={`section-content ${isVisible && 'isVisible'}`}>
          <h3>Easiest way to buy</h3>
          <h6 className="mt-0 mb-5">
            We have stores packed with the finest wood finishes that will make your project stand out from the crowd.
          </h6>

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

