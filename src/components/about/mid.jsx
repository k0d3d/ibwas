import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Img from "gatsby-image";
import { graphql, useStaticQuery} from 'gatsby'


import './about.scss'

export function MidSection () {
  const ABOUT_QUERY = gql`
      query {
        pageSectionBy(uri: "about") {
          id
          title
          date
          uri
          content
        }
      }
    `

  const images = useStaticQuery(graphql`
      query MidSectionImagesQuery {
        img1: file(relativePath: { eq: "1.jpg" }) {
          childImageSharp {
            fixed(width: 279, height: 384 ) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        img2: file(relativePath: { eq: "2.jpg" }) {
          childImageSharp {
            fixed(width: 279, height: 384 ) {
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
              
              <Img fixed={images.img3.childImageSharp.fixed} alt="bed3" />
              <Img fixed={images.img1.childImageSharp.fixed} alt="bed1" />
              <Img fixed={images.img2.childImageSharp.fixed} alt="bed2" />
            </div>
            <Query query={ABOUT_QUERY}>
              {
                ({loading, data}) => {
                  if (loading) return <div>Loading...</div>;
                  return (
                    <div className="block-quote" dangerouslySetInnerHTML={{
                      __html: data.pageSectionBy.content
                    }}>
        
                    </div>
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