import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const grid = () => {

  const {swapi} = useStaticQuery(
    graphql`
      query{
        swapi {
          products {
            nodes {
              id
              productId
              name
              type
              price
              image {
                id
                sourceUrl
              }
            }
          }
        }
      }

    `
  )
  return (
    <>
      <style jsx>
        {`
          .section-content {
            z-index: 3;
            position: relative;
            h3, h4 {
              width: 70%;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }
          }
          
          .card {
            border: none;
            &:hover .order-btn {
              transform: translateX(1px);
              opacity: 1
            }
          }

          .card-title {
            font-size: 1rem;
            font-weight: bold;
            margin: 0 auto;
          }
          .card-text {
            font-size: 1.5rem;
          }
          .card-body {
            position: relative;
          }
          .order-btn {
            right: 0px;
            position: absolute;
            bottom: 46px;
            border-radius: 0;
            transform: translateX(116px);
            opacity: 0;
            transition: transform 250ms, opacity 200ms ;
          }

        `}
      </style>
      <section className="section mt-5">
        <div className="section-content pt-5">
          <h2 className="section-title">
            More Products
          </h2>
          <div className="row">
              {
                swapi.products.nodes.map(product => (
                  <div className="col-sm col-md-4 mt-3 mb-2" key={product.id}>
                    <div className="card" style={{width: "18rem"}}>
                      <img src={product.image.sourceUrl} className="card-img-top" alt="product.slug" />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <a href="#" className="btn btn-primary order-btn">Order Now</a>
                      </div>
                    </div>
                  </div>
                ))
              }
             
          </div>
        </div>
      </section>
    </>
  );
}

export default grid;