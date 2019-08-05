import React from 'react';
import gql from 'graphql-tag';
import { graphql, useStaticQuery } from 'gatsby'
import { Query } from 'react-apollo';
import { Link } from '@reach/router'



function ProductItems ({data}) {
  return ( 
    data.products.nodes.map(product => (
      <div className="col-sm col-md-4 mt-3 mb-2" key={product.id}>
        <div className="card">
          <Link state={{productId: product.id}} to={`/product?productId=${product.id}`}>
            <img src={product.image.sourceUrl} className="card-img-top" alt="product.slug" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <Link state={{productId: product.id}} to={`/product?productId=${product.id}`}>
                {product.name}
              </Link>
            </h5>
            <p className="card-text"><span style={{fontSize: "12px"}}>from&nbsp;</span>{product.price}</p>
          </div>
        </div>
      </div>
    ))
  )
}


function useApolloQuery () {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const PRODUCTS_QUERY = gql`
      query{
        products(first: 15) {
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
    `
  return <Query query={PRODUCTS_QUERY}>
          {
            ({loading, data}) => {
              if (loading) return <div>Loading...</div>;
              <ProductItems data={data}/>

            }
          }
        </Query>
 
}




const Grid = () => {
  
  let refreshed = false

  const { swapi } = useStaticQuery(
    graphql`
      query{
        swapi {
          products(first: 15) {
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
            h3, h4, h6 {
              width: 70%;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
            }
          }
          
          .card {
            border: none;
            min-width: 288px;
            min-height: 288px;
            overflow: hidden;
            &:hover {
              background-color: #f2f2f2;
              box-shadow:rgb(255, 255, 255) 0px 0px 30px 40px inset;
              transition: box-shadow 350ms;
              
              box-sizing: border-box;
            }
            &:hover .order-btn {
              transform: translateX(1px);
              opacity: 1;
              transition: transform 250ms ease-in-out;
            }
            &:hover .card-img-top {
              transform: scale(1.525) translate(65px, 77px);
              transition: transform 250ms ease-in-out;
            }
          }

          .card-img-top {
            transform: scale(0.8);
            position: relative;
            z-index: 10;
          }

          .card-title {
            font-size: 1rem;
            font-weight: normal;
            margin: 0 auto;
          }
          .card-text {
            font-size: 1.5rem;
          }
          .card-body {
            position: relative;
            z-index: 14;
            background: white;
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
          <h3 className="section-title">
            Order our products
          </h3>
          <h6 className="text-center">
            Select the right board from our extensive list or browse through the gallery and find 
            the right type of wood board for your furniture. 
          </h6>

          <div className="row">
            {
              !refreshed && <ProductItems data={swapi}/>
            }
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Grid;