import React from 'react';
import { Link } from 'gatsby'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import moment from 'moment'

const BlogPost = () => {
  const POSTS_QUERY = gql`
    query {
        posts{
          edges {
            node {
              id
              title
              excerpt
              date
              featuredImage {
                sourceUrl
              }
            }
          }
        }
    }
  `
  return (
    <div className="row mb-5 mt-5" >
      <style jsx>{`
        .post-meta {
          color: grey;
        }
      `}</style>
        <div className="col-lg-8 col-md-10 mx-auto">
          <Query query={POSTS_QUERY}>
            {
              ({loading, data}) => {
                if (loading) return <div>Loading...</div>;
                return (
                  data.posts.edges.map(post => (
                    <div className="post-preview" key={post.node.id}>
                        <Link state={{ postId: post.node.id }} to={`/post?postId=${post.node.id}`}>
                          <h2 className="post-title" dangerouslySetInnerHTML={{
                            __html: post.node.title
                          }}>
                          </h2>
                        </Link>
                        <p className="post-subtitle" dangerouslySetInnerHTML={{
                          __html: post.node.excerpt
                        }}>
                        </p>
                        <p className="post-meta">Posted by
                          <a href="#">&nbsp;IBWAS&nbsp;</a>
                          on { moment(post.node.date).calendar() }
                        </p>
                      </div>
                  ))
                )
              }
            }
          </Query>
        {

        }
      </div>
    </div>          
  );
}


export default BlogPost;