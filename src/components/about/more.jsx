import React from 'react';
import moreImg from './moreabout.jpg'

export function MoreAboutSection () {
  // const {swapi} = useStaticQuery(
  //   graphql`
  //     query {
  //       swapi {
  //         pageSectionBy(uri: "moreaboutibwas") {
  //           id
  //           title
  //           date
  //           uri
  //           content
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <>
      <style jsx>{`
          .section {
            position: relative;
            margin-top: 100px;
            padding-top: 50px;
          }
          .section-content{
          }
          .side-text{ 
            position: absolute;
            width: 450px;
            top: 0;
            &:nth-child(1) {}
            &:nth-child(2) {
              right: 0;
              bottom: 0;
              top: unset;
            }
            p {
              font-size: 34px;
            }
          }
        `}
      </style>
      <section className="section">
        <div className="section-content">
          <p className="text-center">
            <img src={moreImg} alt="the room and wood"/>
          </p>  
          <aside className="side-text">
            <p>
              Beautiful furniture should also be strong and timeless, passed on from one generation to the next.
            </p>
          </aside>

          <aside className="side-text">
            <p>
              We want to ensure your home and office furniture is built with the best quality wood materials.
            </p>
          </aside>            
        </div>
      </section>
    </>
  )
}