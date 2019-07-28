import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import storyImg from './storyimg.jpg'

export function StorySection () {
  const STORY_QUERY = gql`
      query {
        pageSectionBy(uri: "our-story") {
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
                  <Query query={STORY_QUERY}>
                    {
                      ({loading, data}) => {
                        if (loading) return <div>Loading...</div>;
                        return (
                          <>
                            <h3 className="full-title text-left">{data.pageSectionBy.title}</h3>
                            <div className="content-text" dangerouslySetInnerHTML={{
                              __html: data.pageSectionBy.content
                            }}></div>
                          </>
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