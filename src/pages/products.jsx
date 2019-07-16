import React from 'react';
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { 
  BlogStorySection, 
} from '../components/home/index'

import { Grid} from '../components/products'


const products = () => {
  const subTitle = "We serve resellers, wood merchants and avid hobbyist with wooden parts and furniture"
  const headingTitles = ["Order HDF & MDF", "Buy Plywood and Laminated Board", "Choose different colors of boards", "Buy Particle and Marine Board"]
  const imageList = [
    {
      title: "White HDF Doors",
      src: "1.jpg",
      text: `Great for cabinet furniture and beautiful bookshelfs. See more photos
        of furnitures.`,
    },
    {
      title: "White HDF Doors",
      src: "2.jpg",
      text: `Great for cabinet furniture and beautiful bookshelfs. See more photos
        of furnitures.`,
    }

  ]
  return (
    <Layout>
    <Slider subTitle={subTitle} headingTitles={headingTitles} />
    <div className="container">
      <Grid />
      <BlogStorySection />
    </div> 
   
  </Layout>    
  );
}

export default products;