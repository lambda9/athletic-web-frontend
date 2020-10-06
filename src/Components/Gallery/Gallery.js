import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im4.jpg";
import GalleryCard from "./GalleryCard";
import "./Gallery.css";
import Title from "../Title/Title";
import GalleryBG from "./GalleryBG";

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-page">
        <Hero bgImg={bgImg} title="Gallery" description="latest pics" />

        <div className="gallery-bg-main-div">
          <GalleryBG />
        </div>

        <div className="gallery-page-content">
          <div>
            <h1>We believe in transparency between us and our cutomers</h1>
            <h4>Checkout our actual images from gym</h4>
          </div>
          <Title>Equipments</Title>
          <GalleryCard images={[]} />
          <Title>gym building</Title>
          <GalleryCard images={[]} />
        </div>
      </div>
    );
  }
}

export default Gallery;
