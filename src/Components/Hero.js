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
    window.addEventListener("resize", updateWindowDimensions());
  }, [window.innerWidth]);

  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `url(${props.bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        minHeight: `calc(${minHeight}vh - 66px)`,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lavender",
      }}
    >
      <Banner title={props.title} description={props.description} />
    </div>
  );
}

export default Hero;
