import React from 'react';
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import PropTypes from "prop-types"

import { 
  BlogStorySection, 
} from '../components/home/index'

import { Grid } from '../components/products'
import GallerySlider, { slideData } from '../components/gallery'



const Products = ({location}) => {
  const subTitle = "We serve resellers, wood merchants and avid hobbyist with wooden parts and furniture"
  const headingTitles = ["Order HDF & MDF", "Buy Plywood and Laminated Board", "Choose different colors of boards", "Buy Particle and Marine Board"]
  const meta = [{
    "name": "og:url",
    "content" : location.path 
  }, {
    "name": "description",
    "content": `Order HDF & MDF, Buy Plywood and Laminated Board & Buy Particle and Marine Board.`
  }]
  return (
    <Layout seoMeta={meta} pageName="Order our Boards">
    <Slider subTitle={subTitle} headingTitles={headingTitles} />
    <div className="container">
      <Grid />
      <BlogStorySection />
      {/* <GallerySlider heading="Beautiful Furniture" slides={slideData} /> */}

    </div> 
   
  </Layout>    
  );
}

Products.propTypes = {
  location: PropTypes.object
}

export default Products;