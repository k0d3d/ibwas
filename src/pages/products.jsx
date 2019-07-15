import React from 'react';
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { 
  NewsletterSection, 
  BlogStorySection, 
} from '../components/home/index'


const products = () => {
  const subTitle = "We serve resellers, wood merchants and avid hobbyist with wooden parts and furniture"
  const headingTitles = ["Order HDF & MDF", "Buy Plywood and Laminated Board", "Choose different colors of boards", "Buy Particle and Marine Board"]
  const imageList = [
    {
      title: "White HDF Doors",
      src: "1.jpg",
      text: `Great for cabinet furniture and beautiful bookshelfs. See more photos
        of furnitures.`,
    },
    {
      title: "White HDF Doors",
      src: "2.jpg",
      text: `Great for cabinet furniture and beautiful bookshelfs. See more photos
        of furnitures.`,
    }

  ]
  return (
    <Layout>
    <Slider subTitle={subTitle} headingTitles={headingTitles} />
    <div className="container">
      <style jsx>{`

        .section {
          background: rgb(255, 255, 255);
          position: relative;
        }
        .content{
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          grid-template-areas: 
            "title ." 
            "pic meta" 
            "tools .";
          max-width: 95vw;
          justify-items: center;
          align-items: center;
          margin-top: 5em;
        }
        .item {
          min-width: 580px;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
          &__image {
            width: calc(30% + 150px);
            min-height: 350px;
            height: 560px;
            margin: 0 auto;
            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
          &__title {
            font-size: 4rem;
            position: absolute;
            top: 0;
            bottom: 0;
            text-align: center;
          }
          &__text {
            align-item: center;
            justify-item: end;
          }
        }
      `}

      </style>
      <section className="section">
        <div className="section-content pt-5">
            <div className="content">
              <div className="item">
                <h2 className="item__title">
                  White HDF Boards
                </h2>
                <div className="item__image"> 
                  <img src="./gallery/1.jpg" alt=""/>
                </div>
                <div className="item__text">
                  <p>
                    Great for cabinet furniture and beautiful bookshelfs. See more photos
                    of furnitures.
                  </p>
                </div>
              </div>
              <div className="content__tools">
                <span className="prev">previous</span>
                <span className="next">next</span>
              </div>
            </div>
        </div>
      </section>

      <BlogStorySection />
      <NewsletterSection /> 
    </div> 
   
  </Layout>    
  );
}

export default products;