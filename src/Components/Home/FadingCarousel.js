/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";

import { useState } from "react";
import img1 from "../../Images/landingBackdrop.png";
import img2 from "../../Images/Carousel/img2.jpg";
import img3 from "../../Images/Carousel/img3.jpg";
import img4 from "../../Images/Carousel/img4.jpg";
import CrossFadeImage from "./CrossFadeImage";

const images = [img1, img2, img3, img4];

const headingsStyle = css`
	position: absolute;
	z-index: 6;
	left: 0%;
	color: white;
`;

const FadingCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div
			css={{
				position: "relative",
			}}
		>
			<CrossFadeImage
				image={images[currentIndex]}
				width="100vw"
				height="45vw"
				time={500}
			/>
			<h3 css={[headingsStyle, { top: "10%" }]}>
				This is nothing special about it
			</h3>
			<h2 css={[headingsStyle, { top: "50%" }]}>Main Heading</h2>
			<h4 css={[headingsStyle, { top: "70%" }]}>This is small heading</h4>
			<button
				onClick={() => {
					setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
				}}
			>
				Change
			</button>
		</div>
	);
};

export default FadingCarousel;
