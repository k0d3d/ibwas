/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SEO from "./seo";

import 'aos/dist/aos.css';

import { NewsletterSection } from './home/newsletter-section'

import "../styles/custom.scss"
import "./layout.scss"
import { useEffect } from "react";



// class Layout extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }


//   componentDidMount() {
//     // eslint-disable-next-line no-undef
//     AOS.init({
//       once: true
//     });
//   }

//   render() {
//     const data = useStaticQuery(graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `)
//     return (
//         <>
//         <SEO title="Home" />
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <main>
//             {this.props.children}
//         </main>
//         <NewsletterSection />
//       </>      
//     );
//   }
// }

const Layout = ({ children }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    AOS.init({
      once: true
    });    
  })
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>
          {children}
      </main>
      <NewsletterSection />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
