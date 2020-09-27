import React, { useState, useEffect } from "react";
import Banner from "./Banner";

function Hero(props) {
  return (
    <div
      className="hero-back-drop"
      style={{
        backgroundImage: `url(${props.bgImg})`,
      }}
    >
      <Banner title={props.title} description={props.description} />
    </div>
  );
}

export default Hero;
