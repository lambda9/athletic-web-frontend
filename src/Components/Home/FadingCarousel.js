/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx, keyframes } from "@emotion/core";

import { useEffect, useState } from "react";
import img1 from "../../Images/HomeBackdrop/im1.jpg";
import img2 from "../../Images/HomeBackdrop/im2.jpg";
import img3 from "../../Images/HomeBackdrop/im3.jpg";
import img4 from "../../Images/HomeBackdrop/im4.jpg";
import img5 from "../../Images/HomeBackdrop/im5.jpg";
import CrossFadeImage from "./CrossFadeImage";

const images = [img1, img2, img3, img4, img5];
const headings = [
	"be the change",
	"never give up",
	"the pain",
	"join us",
	"now",
];

const headingsBaseStyle = css({
	position: "absolute",
	opacity: 0,
	bottom: "0%",
	zIndex: 3,
	left: "50%",
	color: "whitesmoke",
	fontFamily: "Montserrat",
	textTransform: "uppercase",
	animationFillMode: "forwards",
	animationTimingFunction: "ease-in-out",
});

const moveUp = (height) => keyframes`
    0% {
			bottom: 0%;
			opacity: 0;
		}
		5% {
			opacity: 0%;
		}
		25%, 75% {
			bottom: ${height}%;
			opacity: 1;
		}
		90% {
			opacity: 0;
		}
		100% {
			bottom: 100%;
			opacity: 0;
		}
`;

const centerTextCss = css`
	${headingsBaseStyle};
	font-size: 5vw;
	transform: translate(-50%, 50%);
	background-color: #ff7500e0;
	padding: 0.5vw 1vw;
	animation-name: ${moveUp(50)};
	animation-delay: 1s;
	animation-duration: 6s;
`;

const subHeadCss = css`
	${headingsBaseStyle};
	font-size: 2vw;
	transform: translateX(-50%);
	padding: 0.5vw;
	animation-name: ${moveUp(70)};
	animation-duration: 6s;
`;

const bottomSubHeadCss = css`
	${headingsBaseStyle};
	font-size: 2vw;
	// color: black;
	transform: translateX(-50%);
	padding: 0.5vw;
	animation-name: ${moveUp(24)};
	animation-delay: 2s;
	animation-duration: 6s;
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
				width="100%"
				height="55vw"
				time={1000}
			/>
			<h2 key={currentIndex} css={subHeadCss}>
				This is nothing special about it
			</h2>
			<h3 key={currentIndex + 1} css={centerTextCss}>
				{headings[currentIndex]}
			</h3>
			<h2
				key={currentIndex + 2}
				css={bottomSubHeadCss}
				className={"button-primary"}
				onAnimationEnd={() => {
					console.log("animation ended");
					setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
				}}
			>
				join us >>
			</h2>
		</div>
	);
};

export default FadingCarousel;
