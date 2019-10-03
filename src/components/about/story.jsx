import React from 'react';

import { useStaticQuery, graphql } from 'gatsby'

import storyImg from './storyimg.jpg'

export function StorySection () {

  const data = useStaticQuery(
    graphql`
      query {
        swapi {
          pageSectionBy(uri: "our-story") {
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
      <style jsx>{`

                                                                                                                                                                          
      `}
      </style>
      <section id="story-section" className="section">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 black-bg" data-aos-delay="50" data-aos="fade-right"></div>
            <div className="col-md-6"></div>
          </div>
          <div className="story-box" data-aos-delay="100" data-aos="fade-right">
                <div className="img-box">
                  <img src={storyImg} alt=""/>
                </div>
                <div className="txt-box">
                  {
                    <>
                      <h3 className="full-title text-left">{data.swapi.pageSectionBy.title}</h3>
                      <div className="content-text" dangerouslySetInnerHTML={{
                        __html: data.swapi.pageSectionBy.content
                      }}></div>
                    </>
                  }
                </div>
          </div>
        </div>
      </section>
    </>
  )
} 