import React from "react";
import "./Slide.css";
import "./Carousel.css";

const Slide = ({ index, img, currentIndex, width, height }) => {
	let state = index === currentIndex ? "currentSlide" : "hiddenSlide";

	// console.log(colorThief.getColor(img))
	return (
		<img
			className={state}
			src={img}
			alt={"naina"}
			style={{ width: `${width}vw`, height: `${height}vw` }}
		/>
	);
};

export default Slide;
