/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch'

import Header from "./header"
import SEO from "./seo";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { NewsletterSection } from './home/newsletter-section'

import "../styles/custom.scss"
import "./layout.scss"
import { useEffect } from "react";

const isBot = require('isbot')

export const client = new ApolloClient({ uri: 'https://www2.ibwasngltd.com/graphql', fetch });


const Layout = ({ children, seoMeta, pageName }) => {
    
  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      AOS.init({
        once: true,
        disable: function () {
          if (typeof window !== "undefined") {
            if (isBot(navigator.userAgent)) {
              return true
            }
            return false
          }
          return true
        }
      });    
    } catch (e) {
      //
    }
  }, [])
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
      <SEO title={pageName} meta={seoMeta} />
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
  seoMeta: PropTypes.array,
  pageName: PropTypes.string
}
Layout.defaultProps = {
  pageName: 'Buy Wood & Furniture Material',
  seoMeta: [{
    "name": "og:url",
    "content": "https://ibwasngltd.com",
  },{
    "name": "og:image",
    "content": "https://ibwasngltd.com/apartment-architecture-artist-447592.jpg"
  }]
}

export default Layout
