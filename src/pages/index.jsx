import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider/index"
import { 
  Midsection, 
  EasyOrder, 
  ExploreProducts, 
  BlogStorySection, 
  TestimonalSection 
} from '../components/home/index'
class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.headingTitles = [
      'Order your wholesale furniture supply from us',
      'Open the door to a world of the best furniture materials.',
    ];
    this.subTitle = 'Whatever your wood furniture needs, you can order quality materials from us.'
    this.buttons = [{
      text: 'Order Wholesale',
      url: 'products',
      cls: `hero-btn`
    }]
  }

  render() {
    return (
      <Layout>
        <Slider 
          subTitle={this.subTitle} 
          headingTitles={this.headingTitles} 
          buttons={this.buttons}
        />
        <div className="container">
          <Midsection />
          <EasyOrder />
          <ExploreProducts />
          <TestimonalSection />
          <BlogStorySection />
        </div> 
      </Layout>
    );
  }
}

export default IndexPage
