import React, { Component } from "react";
import Hero from '../Hero'
import Banner from '../Banner'
import bgImg from '../../Images/im4.jpg'

class Gallery extends Component {
  render() {
    return (
      <div>
        <Hero img={bgImg}>
          <Banner
            title="gallery"
            description="checkout our latest pics and moments"
          ></Banner>
        </Hero>
      </div>
    );
  }
}

export default Gallery;
