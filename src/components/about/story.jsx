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
        $sectionHeight: 600px;
        .section-content {
          height: $sectionHeight;
        }
        .black-bg {
          background-color: black;
          height: $sectionHeight;
        }  
        .story-box {
          position: relative; 
          top: -$sectionHeight ;
          left: 30px;
          height: $sectionHeight - 100px;
          margin: 50px auto;
          width: 95%;
          color: #fff;
          overflow: hidden;
          box-shadow: 1px 3px 20px 0px #000000b8;
          img {
            width: 100%;
          }
          .img-box {
            padding-left: 0;
            width: 50%;
            display: inline-block;
            float: left;
          }
          .txt-box {
            background-color: #555AE4;
            padding: 2.5em;
            width: 50%;
            height: 100%;
            display: inline-block;
            h3 {
              font-weight: bold;
              font-size: 72px;
              line-height: 108px;
              color: #000000;
            }
          }
        }                                                                                                                                                                           
      `}
      </style>
      <section className="section">
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 black-bg"></div>
            <div className="col-md-6"></div>
          </div>
          <div className="story-box">
                <div className="img-box">
                  <img src={storyImg} alt=""/>
                </div>
                <div className="txt-box">
                  <h3>{swapi.pageBy.title}</h3>
                  <div className="content-text" dangerouslySetInnerHTML={{
                    __html: swapi.pageBy.content
                  }}></div>
                </div>
          </div>
        </div>
      </section>
    </>
  )
} 