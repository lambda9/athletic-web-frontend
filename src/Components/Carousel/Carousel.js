import React, { useState, useEffect } from "react";
import Slides from "./Slides";
import "./Carousel.css";
import ProgressBar from "./ProgressBar";

const Carousel = ({ images, width, heightToWidthRatio }) => {
	const SLIDE_DELAY = 4000;

	let height = width * heightToWidthRatio;

	const [currentIndex, setCurrentIndex] = useState(0);
	// const [isPlaying, setPlaying] = useState(false);

	useEffect(() => {
		// setDelay(content[currentIndex].wordCount * 300);
		// if (isPlaying) {
		const timeout = setTimeout(() => {
			setCurrentIndex((currentIndex + 1) % images.length);
		}, SLIDE_DELAY);
		return () => {
			clearTimeout(timeout);
		};
		// }
	}, [currentIndex, images]);

	const showPrevSlide = () => {
		// setPlaying(false);
		if (currentIndex >= 1) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const showNextSlide = () => {
		// setPlaying(false);
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	return (
		<div className="carouselContainer">
			<div
				className="carousel"
				style={{
					width: `${width}vw`,
					height: `${height}vw`,
					boxShadow: `0 0 20px #111111`,
				}}
			>
				<Slides
					images={images}
					currentIndex={currentIndex}
					width={width}
					height={height}
				/>
				<div className="indicators">
					{images.map((value, index) => {
						return (
							<span
								key={index}
								className={`indicator pointer ${
									index === currentIndex ? "active" : ""
								}`}
								onClick={() => {
									// setPlaying(false);
									setCurrentIndex(index);
								}}
							></span>
						);
					})}
				</div>
				<div className="arrows pointer">
					<span className="navigation" onClick={() => showPrevSlide()}>
						&#10094;
					</span>
					<span className="navigation" onClick={() => showNextSlide()}>
						&#10095;
					</span>
				</div>
				{/* <div className="playPause">
					<i
						className={`pointer fa ${
							isPlaying ? "fa-pause-circle" : "fa-play-circle"
						}`}
						onClick={() => setPlaying(!isPlaying)}
					></i>
				</div> */}
				<ProgressBar key={currentIndex} animate={true} time={SLIDE_DELAY} />
			</div>
		</div>
	);
};

export default Carousel;
