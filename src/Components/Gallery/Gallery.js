import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import bgImg from "../../Images/im4.jpg";
import GalleryCard from "./GalleryCard";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Hero bgImg={bgImg}>
          <Banner
            title="gallery"
            description="checkout our latest pics and moments"
          ></Banner>
        </Hero>
        <div className="gallery-page">
          <GalleryCard images={[]} />
          <GalleryCard images={[]} />

        </div>
      </div>
    );
  }
}

export default Gallery;
