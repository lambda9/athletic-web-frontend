import React from "react";
import img from '../Images/im6.jpg'


function Hero(props) {
  let tt = "banner-bg ";
  let bg = {
    backgroundImages: `url(${img}) center/cover no-repeat`
  }

  let bannerBg = {
    minHeight: "calc(55vh - 66px)",
    background: `url(${img}) center/cover no-repeat`,
    backgroundColor: "lavender",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "var(--mainTransition)"
  }
  
  return <div style={bannerBg}>{props.children}</div>;
}

export default Hero;
