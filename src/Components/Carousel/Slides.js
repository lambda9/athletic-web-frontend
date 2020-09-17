import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import "./Carousel.css";

const SlideContainer = ({
	images,
	onImageSet,
	onImageStart,
	width,
	height,
}) => {
	const SLIDE_DELAY = 4000;

	const [carouselImages, setCarouselImages] = useState(images);

	const [style, setStyle] = useState({
		transition: "none",
		transform: "0vw",
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStyle({
				transition: "all ease-in-out 2.0s",
				transform: `translateX(-${imageWidth}vw)`,
			});
			onImageStart();
		}, SLIDE_DELAY);

		return () => {
			clearTimeout(timeout);
		};
	});

	const transitionEnd = () => {
		let tempImages = carouselImages.slice();
		let firstImage = tempImages.shift();
		tempImages.push(firstImage);
		setCarouselImages(tempImages);
		setStyle({
			transition: "none",
			transform: "translateX(0vw)",
		});
		onImageSet();
	};

	// console.log("container created");
	let imageWidth = width;
	let imageHeight = height;

	useEffect(() => {});

	return (
		<div
			style={style}
			className="slideContainer"
			onTransitionEnd={transitionEnd}
		>
			{carouselImages.map((value, index) => {
				return (
					<Slide
						key={index}
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
