import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import img1 from "./1.jpg"
import img2 from './2.jpg'
import img3 from './3.jpg'

export function MidSection () {
  const {swapi} = useStaticQuery(
    graphql`
      query {
        swapi {
          pageSectionBy(uri: "about") {
            id
            title
            date
            uri
            content
          }
        }
      }
    `
  )    
  return (
    <>
      <style jsx>
        {`
          .img-group img{
            &:nth-child(2) {
              margin: 0 10px;
            }
          }     
          .block-quote {
            font-size: 36px;
            line-height: 42px;
            text-align: center;
            width: 72%;
            margin: 4em auto;

            color: #000000;
          }   
        `}
      </style>
      <section className="section pt-5">
        <div className="section-content pt-5 mb-5">
          <div className="row">
            <div className="img-group">
              <img src={img3} alt="bed3" />
              <img src={img1} alt="bed1" />
              <img src={img2} alt="bed2" />
            </div>
            <div className="block-quote" dangerouslySetInnerHTML={{
              __html: swapi.pageSectionBy.content
            }}>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}