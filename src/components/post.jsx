/* eslint-disable react/prop-types */
import React from 'react';
import Layout from "./layout"

import moment from 'moment'
import {BlogStorySection} from './home/blog'



const Post = ({pageContext}) => {

  return (
    <Layout>
      <style jsx>{`
          h2 {
            width: 70vw;
            text-align: center;
            margin: 0.8em auto;
          }
          .main-img {
            width: 70vw;
            height: 400px;
            margin: .8em auto;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .article {
            width: 70vw;
            margin: 0 auto;
          }
          article {
            margin-top: 2em;
          }
          .post-meta {
            text-align: center;
          }
        `}</style>

        <>
          <div className="container article">
            <h2 dangerouslySetInnerHTML={{
              __html: pageContext.title
            }}></h2>
            <p className="post-meta">Posted by
              <a href="#">&nbsp;IBWAS&nbsp;</a>
              on { moment(pageContext.date).calendar() }
            </p>
            <div className="main-img">
              <img src={pageContext.featuredImage.sourceUrl} alt=""/>
            </div>

            <article dangerouslySetInnerHTML={{
              __html: pageContext.content
            }}></article>
            <BlogStorySection />
          </div> 
        </>
            
    </Layout>
  );
}


export default Post;

