import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import bgImg from "../../Images/im4.jpg";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Hero bgImg={bgImg} title="gallery"
        description="checkout our latest pics and moments">
          
        </Hero>
      </div>
    );
  }
}

export default Gallery;
