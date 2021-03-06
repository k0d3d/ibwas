import React from "react"
import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { BlogStorySection, TestimonalSection } from '../components/home'
import { MidSection, StorySection, MoreAboutSection } from '../components/about/index'

import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.headingTitle = 'Open the door to a world of the best furniture materials.';
    this.subTitle = 'Whatever your wood furniture needs, you can order quality materials from us.'
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Slider subTitle={this.subTitle} headingTitle={this.headingTitle} theme="about" />
        <div className="container">
          <MidSection />
          <StorySection />
          <MoreAboutSection />
          <TestimonalSection />
          <BlogStorySection />
        </div>
      </Layout>
    );
  }
}

export default IndexPage
