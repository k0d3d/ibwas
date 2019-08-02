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
import { ApolloProvider } from 'react-apollo';

import Header from "./header"
import SEO from "./seo";
import AOS from 'aos'
import 'aos/dist/aos.css';

import { NewsletterSection } from './home/newsletter-section'

import "../styles/custom.scss"
import "./layout.scss"
import { useEffect } from "react";

const client = new ApolloClient({ uri: 'http://www2.ibwasngltd.com/graphql' });


const Layout = ({ children }) => {
  useEffect(() => {
    try {
      // eslint-disable-next-line no-undef
      AOS.init({
        once: true
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
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <ApolloProvider client={client}>
        <main>
            {children}
        </main>
      </ApolloProvider>
      <NewsletterSection />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
