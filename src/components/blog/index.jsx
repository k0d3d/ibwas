import React from 'react';
import { Link } from '@reach/router'

import { useStaticQuery, graphql } from 'gatsby'

import moment from 'moment'

const BlogPost = () => {

  const data = useStaticQuery(graphql`
      query {
        swapi {
          posts{
            edges {
              node {
                id
                title
                slug
                excerpt
                date
                featuredImage {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `)

  return (
    <div className="row mb-5 mt-5" >
      <style jsx>{`
        .post-meta {
          color: grey;
        }
      `}</style>
        <div className="col-lg-8 col-md-10 mx-auto">
          {
            data.swapi.posts.edges.map(post => (
                <div className="post-preview" key={post.node.id}>
                    <Link state={{ postId: post.node.id }} to={`/post/${post.node.slug}`}>
                      <h3 className="post-title" dangerouslySetInnerHTML={{
                        __html: post.node.title
                      }}>
                      </h3>
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
          }
      </div>
    </div>          
  );
}


export default BlogPost;