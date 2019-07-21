import React from 'react';

import blogImg from '../../images/blogimg.jpg'

import './blog.scss'

export function BlogStorySection () {
  return (
  <>

    <section id="blog-section" className="section mt-5 mb-0">
      <div className="section-content">
        <h3 className="text-left full-title">Stories</h3>
        <h6 className="mt-0 mb-3 text-left full-title">
          Read stories about the furniture and wood industry.
        </h6>
        <div className="row">
          <div className="col-md-10">
            <div className="media">
              <img src={blogImg} className="img-responsive" alt="" />
              <div className="media-body align-self-center">
                <h5 className="mt-0 card-title">
                  How to make 3D printed wood
                </h5>
                <p>
                  A few days ago, I had an amazing ephiphany while talking to a friend about the benefits of 3d printed wood supply in Africa. We were quick to point out the major challenges and the benefits.
                </p>
                <p>
                  <button className="btn btn-primary btn-sm">Read more</button>
                </p>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}