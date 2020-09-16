import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import "./Carousel.css";

const SlideContainer = ({ images, currentIndex, width, height }) => {
	// let scale = 1.2;
	let imageWidth = width;
	let imageHeight = height;

	const [offset, setOffset] = useState(0);
	useEffect(() => {
		setOffset(-currentIndex * imageWidth);
	}, [currentIndex, imageWidth]);

	return (
		<div
			style={{
				transition: "transform ease-in-out 1.0s",
				transform: `translateX(${offset}vw)`,
			}}
			className="slideContainer"
		>
			{images.map((value, index) => {
				return (
					<Slide
						key={index}
						index={index}
						currentIndex={currentIndex}
						img={value}
						width={imageWidth}
						height={imageHeight}
					/>
				);
			})}
		</div>
	);
};

export default SlideContainer;