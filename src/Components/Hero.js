import React, { useState, useEffect } from "react";
import Banner from "./Banner";

function Hero(props) {
  const [minHeight, setMinHeight] = useState(80);

  const updateWindowDimensions = () => {
    if (window.innerWidth <= 550) {
      setMinHeight(50);
      return;
    }

    setMinHeight(80);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <div
      className="hero-back-drop"
      style={{
        backgroundImage: `url(${props.bgImg})`,
        minHeight: `calc(${minHeight}vh - 66px)`,
      }}
    >
      <Banner title={props.title} description={props.description} />
    </div>
  );
}

export default Hero;
