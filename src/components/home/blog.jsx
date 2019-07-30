import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { navigate, Link } from '@reach/router'

import './blog.scss'

export function BlogStorySection () {

  const visitBlog = () => {
    navigate('/posts')
  }

  const POST_QUERY = gql`
    query {
      posts(first: 1) {
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
  <>

    <section id="blog-section" className="section mt-5 mb-0">
      <div className="section-content">
        <h3 className="text-left full-title">Stories</h3>
        <h6 className="mt-0 mb-3 text-left full-title">
          Read stories about the furniture and wood industry.
        </h6>
        <div className="row">
          <Query query={POST_QUERY}>
            {
              ({data, loading}) => {
                if (loading) return <p>Loading...</p>
                return (
                  <div className="col-md-12">
                    <div className="media">
                      <img src={data.posts.edges[0].node.featuredImage.sourceUrl} className="img-responsive" alt="" />
                      <div className="media-body align-self-center p-2">
                        <h5 className="mt-0 card-title">
                           <Link 
                              dangerouslySetInnerHTML={{
                                __html: data.posts.edges[0].node.title
                              }}
                              to={`/post?postId=${data.posts.edges[0].node.id}`} 
                            >
                           </Link>
                        </h5>
                        <p dangerouslySetInnerHTML={{
                          __html: data.posts.edges[0].node.excerpt
                        }}>
                        </p>
        
                      </div>
                    </div>
                  </div>
                )
              }
            }

          </Query>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <p className="text-center">
            <button onClick={() => visitBlog()} className="btn btn-outline-primary">Load more stories</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>)
}