import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { navigate, Link } from '@reach/router'

import './blog.scss'

export function BlogStorySection () {

  const visitBlog = () => {
    navigate('/posts')
  }

  
  const data = useStaticQuery(graphql`
    query {
      swapi {
        posts(first: 1) {
          edges {
            node {
              id
              title
              excerpt
              slug
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
  <>

    <section id="blog-section" className="section mt-5 mb-0">
      <div className="section-content">
        <h3 className="text-left full-title">Stories</h3>
        <h6 className="mt-0 mb-3 text-left full-title">
          Read stories about the furniture and wood industry.
        </h6>
        <div className="row">

          <div className="col-md-12">
            <div className="media">
              <img src={data.swapi.posts.edges[0].node.featuredImage.sourceUrl} className="img-responsive" alt="" />
              <div className="media-body align-self-center p-2">
                <h5 className="mt-0 card-title">
                    <Link 
                      dangerouslySetInnerHTML={{
                        __html: data.swapi.posts.edges[0].node.title
                      }}
                      to={`/post/${data.swapi.posts.edges[0].node.slug}`} 
                    >
                    </Link>
                </h5>
                <p dangerouslySetInnerHTML={{
                  __html: data.swapi.posts.edges[0].node.excerpt
                }}>
                </p>

              </div>
            </div>
          </div>
                
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