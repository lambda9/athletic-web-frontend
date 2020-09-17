import React, { useState, useEffect } from "react";
import Slides from "./Slides";
import "./Carousel.css";
import ProgressBar from "./ProgressBar";

const Carousel = ({ images, width, heightToWidthRatio }) => {
	// const SLIDE_DELAY = 6000;

	let height = width * heightToWidthRatio;

	const [currentIndex, setCurrentIndex] = useState(0);
	const [progressStart, setProgressStart] = useState(true);

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
					images={images}
					onImageSet={onImageSet}
					onImageStart={onImageStart}
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
									setCurrentIndex(index);
								}}
							></span>
						);
					})}
				</div>
				{/* <div className="arrows pointer">
					<span className="navigation" onClick={() => showPrevSlide()}>
						&#10094;
					</span>
					<span className="navigation" onClick={() => showNextSlide()}>
						&#10095;
					</span>
				</div> */}
				{/* <div className="playPause">
					<i
						className={`pointer fa ${
							isPlaying ? "fa-pause-circle" : "fa-play-circle"
						}`}
						onClick={() => setPlaying(!isPlaying)}
					></i>
				</div> */}
				<ProgressBar key={progressStart} animate={true} time={4000} />
			</div>
		</div>
	);
};

export default Carousel;
