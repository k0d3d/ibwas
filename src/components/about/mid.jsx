import React from 'react';
import Img from "gatsby-image";
import { graphql, useStaticQuery} from 'gatsby'


import './about.scss'

export function MidSection () {

  const data = useStaticQuery(graphql`
      query {
        wp: swapi {
          pageSectionBy(uri: "about") {
            id
            title
            date
            uri
            content
          }
        },
        img1: file(relativePath: { eq: "1.jpg" }) {
          childImageSharp {
            fixed(width: 279, height: 384 ) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        img2: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
            fixed(width: 259, height: 384 ) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        img3: file(relativePath: { eq: "3.jpg" }) {
          childImageSharp {
            fixed(width: 534, height: 384 ) {
              ...GatsbyImageSharpFixed
            }
          }
        },
      }
  `)
  
  return (
    <>
      <style jsx>
        {`
          .img-group img{
            &:nth-child(2) {
              margin: 0 10px;
            }
          }     
 
        `}
      </style>
      <section id="mid-section" className="section pt-5">
        <div className="section-content pt-5 mb-5">
          <div className="row">
            <img src="gallery/24.jpg" alt="classic-room" className="d-xs-img" />
            <div className="img-group d-md-img">
              
              <Img fixed={data.img3.childImageSharp.fixed} alt="bed3" />
              <Img fixed={data.img1.childImageSharp.fixed} alt="bed1" />
              <Img fixed={data.img2.childImageSharp.fixed} alt="bed2" />
            </div>
            <div className="block-quote" dangerouslySetInnerHTML={{
                      __html: data.wp.pageSectionBy.content
                    }}>
        
            </div>
           
          </div>
        </div>
      </section>
    </>
  )
}