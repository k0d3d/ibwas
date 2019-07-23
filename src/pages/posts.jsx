import React from 'react';
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import BlogPost from '../components/blog'



const Posts = () => {
  const subTitle = "What you need to know about furniture and wood supply."
  const headingTitle = "Blog Stories"

  return (
    <Layout>
    <Slider subTitle={subTitle} headingTitle={headingTitle} slant={false} theme="blog"/>
    <div className="container">
      <BlogPost />
    </div> 
   
  </Layout>    
  );
}

export default Posts;

