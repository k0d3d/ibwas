import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import storyImg from './storyimg.jpg'

export function StorySection () {
  const {swapi} = useStaticQuery(
    graphql`
      query {
        swapi {
          pageBy(uri: "our-story") {
            id
            pageId
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
        $sectionHeight: 80vh;
        section {

        }
        .black-bg {
          background-color: black;
          height: $sectionHeight;
        }  
        .story-box {
          position: relative; 
          margin-top: -$sectionHeight ;
          margin-left: 4em;
          margin-right: 4em;
          background-color: #555AE4;
          color: #fff;
          img {
            width: 100%;
          }
        }                                                                                                                                                                           
      `}
      </style>
      <section className="section">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 black-bg"></div>
            <div className="col-md-6"></div>
            <div className="col-md-10 story-box">
              <div className="row">
                <div className="col-md-6">
                  <img src={storyImg} alt=""/>
                </div>
                <div className="col-md-6">
                  <h1>{swapi.pageBy.title}</h1>
                  <div className="content-text" dangerouslySetInnerHTML={{
                    __html: swapi.pageBy.content
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 