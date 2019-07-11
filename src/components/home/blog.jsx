import React from 'react';

import blogImg from '../../images/blogimg.jpg'

export const BlogStorySection = () => {
  return (
  <>
    <style jsx>
      {`
        .section {
          background: #b6b9ff4a;
          border-radius: 20px 20px 0;
        }
        .media {
          img {
            width: 300px;
          }
          .card-title {
            font-size: 2.5em;
          }
        }
      `}
    </style>
    <section className="section mt-5 mb-5">
      <div className="section-content mt-3 p-5">
        <h3 className="text-left">Stories</h3>
        <h4 className="mt-0 mb-5 text-left">
          Read stories about the furniture and wood industry.
        </h4>
        <div className="row">
          <div className="col-md-10">
            <div className="media">
              <img src={blogImg} className="mr-3" alt="" />
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