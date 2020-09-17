import React, { Component } from "react";
import Hero from '../Hero'
import Banner from '../Banner'
class Gallery extends Component {
  render() {
    return (
      <div>
        <Hero tempClass="gallery-bg">
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
