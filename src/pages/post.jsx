/* eslint-disable react/prop-types */
import React from 'react';
import Layout from "../components/layout"
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import moment from 'moment'
import {BlogStorySection} from '../components/home/blog'


const queryString = require('query-string')

const Post = ({location}) => {
  const POST_QUERY = gql`
    query ($id: ID!) {
      post(id: $id) {
        id
        title
        content
        date
        featuredImage {
          sourceUrl
        }
      }

    }
  `
  const postId = location.state ? location.state.postId : queryString.parse(location.search).postId;

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
      <Query query={POST_QUERY} variables={{id: postId}}>
        {
          ({loading, data}) => {
            if (loading) return <div>Loading...</div>;
            return (
              <>
              <div className="container article">
                <h2 dangerouslySetInnerHTML={{
                  __html: data.post.title
                }}></h2>
                <p className="post-meta">Posted by
                  <a href="#">&nbsp;IBWAS&nbsp;</a>
                  on { moment(data.post.date).calendar() }
                </p>
                <div className="main-img">
                  <img src={data.post.featuredImage.sourceUrl} alt=""/>
                </div>
  
                <article dangerouslySetInnerHTML={{
                  __html: data.post.content
                }}></article>
                <BlogStorySection />
              </div> 
              </>
            )
          }
        }
      </Query>
    </Layout>
  );
}


export default Post;

