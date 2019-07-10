import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { Midsection, EasyOrder, ExploreProducts, NewsletterSection, BlogStorySection, TestimonalSection } from '../components/home'
import { Footer } from '../components/footer'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <div className="container">
      <TestimonalSection />
      <BlogStorySection />
      <NewsletterSection />
      <Footer />
    </div> 
  </Layout>
)

export default IndexPage
