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
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		if (isPlaying) {
			const timeout = setTimeout(() => {
				setOffset(-width);
				setCurrentIndex((currentIndex + 1) % carouselImages.length);
			}, slideDelay);
			return () => {
				clearTimeout(timeout);
			};
		} else {
			// const timeout = setTimeout(() => {
			// 	setIsPlaying(true);
			// }, 4000);
			// return () => {
			// 	clearTimeout(timeout);
			// };
		}
	});

	const onTransitionEnd = () => {
		console.log("transition end");
		let tempImages = carouselImages.slice();
		tempImages.push(tempImages[0]);
		tempImages.shift();
		setCarouselImages(tempImages);
		setProgressStart(!progressStart);
		setOffset(0);
	};

	const changeImage = (prevIndex, newIndex) => {
		console.log(prevIndex, newIndex);
		console.log("orgIamges", carouselImages);
		let tempImages = carouselImages.slice(newIndex);
		console.log("tempImages", tempImages);
		for (let i = prevIndex; prevIndex < newIndex; i++) {
			console.log("i", i);
			// tempImages.push(carouselImages[i]);
		}
		console.log("transrom", tempImages);
		// setCarouselImages(tempImages);
		// setOffset(-(newIndex - prevIndex) * width);
		// setCurrentIndex(newIndex);
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
								onClick={() => {
									setIsPlaying(false);
									changeImage(currentIndex, index);
								}}
							></span>
						);
					})}
				</div>
				{/* <div className="arrows pointer">
					<span className="navigation">&#10094;</span>
					<span className="navigation">&#10095;</span>
				</div> */}
				{/* <div className="playPause">
					<i
						className={`pointer fa ${
							isPlaying ? "fa-pause-circle" : "fa-play-circle"
						}`}
						onClick={() => setPlaying(!isPlaying)}
					></i>
				</div> */}
				<ProgressBar
					key={progressStart}
					animate={isPlaying}
					time={slideDelay}
				/>
			</div>
		</div>
	);
};

export default Carousel;
