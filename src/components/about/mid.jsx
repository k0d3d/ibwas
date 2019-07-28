import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import img1 from "./1.jpg"
import img2 from './2.jpg'
import img3 from './3.jpg'

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
              <img src={img3} alt="bed3" />
              <img src={img1} alt="bed1" />
              <img src={img2} alt="bed2" />
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