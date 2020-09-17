import React from "react";

function Hero(props) {
  let tt = "banner-bg " + props.tempClass;
  return <div className={tt}>{props.children}</div>;
}

export default Hero;
