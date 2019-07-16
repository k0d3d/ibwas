import React from 'react';
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import Contact from "../components/contact" 


const contact = () => {
  const subTitle = `So we can help serve you better, please complete the form below. We will respond as soon as possible, usually within a few business days.`
  const headingTitle = "Contact Us";

  return (
    <Layout>
      <Slider subTitle={subTitle} headingTitle={headingTitle} slant={false} />
      <Contact />
    </Layout>

      );
    }
    
export default contact;