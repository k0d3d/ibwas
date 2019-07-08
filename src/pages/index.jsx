import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { Midsection, EasyOrder, ExploreProducts } from '../components/home'


import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <div className="container">
      <Midsection />
      <EasyOrder />
      <ExploreProducts />
    </div> 
  </Layout>
)

export default IndexPage
