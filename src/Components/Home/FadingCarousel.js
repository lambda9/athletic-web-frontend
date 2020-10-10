/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";

import { useEffect, useState } from "react";
import img1 from "../../Images/HomeBackdrop/im1.jpg";
import img2 from "../../Images/HomeBackdrop/im2.jpg";
import img3 from "../../Images/HomeBackdrop/im3.jpg";
import img4 from "../../Images/HomeBackdrop/im4.jpg";
import img5 from "../../Images/HomeBackdrop/im5.jpg";
import CrossFadeImage from "./CrossFadeImage";

const images = [img1, img2, img3, img4, img5];

const headingsStyle = css`
	position: absolute;
	z-index: 6;
	left: 0%;
	color: white;
`;

const FadingCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<div
			css={{
				position: "relative",
			}}
		>
			<CrossFadeImage
				image={images[currentIndex]}
				width="100vw"
				height="55vw"
				time={1000}
			/>
			<h3 css={[headingsStyle, { top: "10%" }]}>
				This is nothing special about it
			</h3>
			<h2 css={[headingsStyle, { top: "50%" }]}>Work Hard</h2>
			<h2 css={headingsStyle}>JOIN US</h2>
			<h4 css={[headingsStyle, { top: "70%" }]}>This is small heading</h4>
			<button
				css={{
					zIndex: 4,
				}}
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
