import React from "react";
import Banner from "./Banner";

function Hero(props) {
  return (
    <div
      className="hero-back-drop"
      data-aos="fade-in"
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${props.bgImg})`,
      }}
    >
      <Banner title={props.title} description={props.description} />
    </div>
  );
}

export default Hero;
