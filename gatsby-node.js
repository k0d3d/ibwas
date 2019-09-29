/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /aos/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = ({ graphql, actions}) => {
  const { createPage } = actions;
  return new Promise ( (resolve, reject ) => {
    const postComponent = path.resolve('src/components/post.jsx')
    const productComponent = path.resolve('src/components/product.jsx')
    resolve(
      graphql(`
        query {
          swapi {
            products(first: 20) {
              edges {
                node {
                  id
                  productId
                  name
                  type
                  price
                  description
                  image {
                    id
                    sourceUrl
                  }                  
                  slug
                }
              }
            },
            posts(first: 20) {
              edges {
                node {
                  id
                  title
                  content
                  date
                  featuredImage {
                    sourceUrl
                  }
                  slug
                }
              }
            }
          }
        }
      `)
      .then(({data, errors}) => {
        if (errors) {
          reject(errors);
        }
        data.swapi.products.edges.forEach(({ node }) => {
          createPage({
            path: `/product/${node.slug}`,
            component: productComponent,
            context: {
              ...node
            }
          })
        })
        data.swapi.posts.edges.forEach(({node}) => {
          createPage({
            path: `/post/${node.slug}`,
            component: postComponent,
            context: {
              ...node
            }
          })
        })
      })
    )
  })

}