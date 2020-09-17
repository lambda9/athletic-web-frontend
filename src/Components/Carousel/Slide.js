import React from "react";
import "./Slide.css";
import "./Carousel.css";

const Slide = ({ img, width, height }) => {
	// console.log(colorThief.getColor(img))
	return (
		<img
			src={img}
			alt={"naina"}
			style={{ width: `${width}vw`, height: `${height}vw` }}
		/>
	);
};

export default Slide;
