import React, { useState, useEffect } from "react";
import Slides from "./Slides";
import "./Carousel.css";
import ProgressBar from "./ProgressBar";

const Carousel = ({
	images,
	width,
	heightToWidthRatio,
	slideDelay,
	transitionDelay,
}) => {
	let height = width * heightToWidthRatio;

	const [offset, setOffset] = useState(0);
	const [carouselImages, setCarouselImages] = useState(images);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [progressStart, setProgressStart] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setOffset(-width);
			setCurrentIndex((currentIndex + 1) % carouselImages.length);
		}, slideDelay);
		return () => {
			clearTimeout(timeout);
		};
	});

	const onTransitionEnd = () => {
		let tempImages = carouselImages.slice();
		tempImages.push(tempImages[0]);
		tempImages.shift();
		setCarouselImages(tempImages);
		setProgressStart(!progressStart);
		setOffset(0);
	};

	const onImageSet = () => {
		setProgressStart(!progressStart);
	};

	const onImageStart = () => {
		setCurrentIndex((currentIndex + 1) % 3);
	};

	return (
		<div className="carouselContainer">
			<div
				className="carousel"
				style={{
					width: `${width}vw`,
					height: `${height}vw`,
				}}
			>
				<Slides
					images={carouselImages}
					onImageSet={onImageSet}
					onImageStart={onImageStart}
					transitionDelay={transitionDelay}
					offset={offset}
					width={width}
					height={height}
					showAnimation={offset === 0}
					onTransitionEnd={onTransitionEnd}
				/>
				<div className="indicators">
					{carouselImages.map((value, index) => {
						return (
							<span
								key={index}
								className={`indicator pointer ${
									index === currentIndex ? "active" : ""
								}`}
								style={{
									transition: `all linear ${transitionDelay / 1000}s`,
								}}
							></span>
						);
					})}
				</div>
				<ProgressBar key={progressStart} animate={true} time={slideDelay} />
			</div>
		</div>
	);
};

export default Carousel;
