import React from "react";
import Slide from "./Slide";
import "./Carousel.css";

const SlideContainer = ({
	images,
	offset,
	transitionDelay,
	showAnimation,
	width,
	height,
	onTransitionEnd,
}) => {
	console.log(offset);
	const style = {
		transition: showAnimation
			? "none"
			: `transform ease-in-out ${transitionDelay / 1000}s`,
		transform: `translateX(${offset}vw)`,
	};

	return (
		<div
			style={style}
			className="slideContainer"
			onTransitionEnd={onTransitionEnd}
		>
			{images.map((value, index) => {
				return <Slide key={index} img={value} width={width} height={height} />;
			})}
		</div>
	);
};

export default SlideContainer;
