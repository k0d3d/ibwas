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
import Footer from './footer'
import SEO from "./seo";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { NewsletterSection } from './home/newsletter-section'

import "../styles/custom.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  AOS.init({
    once: true
  });
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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
