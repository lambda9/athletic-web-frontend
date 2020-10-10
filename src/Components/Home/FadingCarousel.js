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

const headingsStyle = css`
	position: absolute;
	z-index: 3;
	left: 10%;
	color: white;
`;

const moveFromDownSub = keyframes`
    0% {
			bottom: 0%;
			opacity: 0;
		}
		5% {
			opacity: 0%;
		}
		20%, 80% {
			bottom: 70%;
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

const moveFromDown = keyframes`
	0% {
		bottom: 0%;
		opacity: 0;
	}
	5% {
			opacity: 0%;
		}
	20%, 80% {
		bottom: 50%;
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

const moveToUp = keyframes`
  from {
		bottom: 50%;
		opacity: 1;
	}
	to {
		bottom 100%;
		opacity: 0;
	}
`;

const centerTextCss = css`
	position: absolute;
	opacity: 0;
	font-size: 5vw;
	bottom: 0%;
	left: 50%;
	transform: translateX(-50%);
	color: whitesmoke;
	font-family: "Montserrat";
	background-color: #ff7500a0;
	padding: 0.5rem;
	z-index: 5;
	text-transform: uppercase;
	animation-name: ${moveFromDown};
	animation-delay: 1s;
	animation-duration: 6s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
`;

const subHeadCss = css`
  position: absolute;
	opacity: 0;
	font-size: 2vw;
	bottom: 0%;
	left: 50%;
	transform: translateX(-50%);
	color: whitesmoke;
	font-family: "Montserrat";
	padding: 0.5rem;
	z-index: 5;
	text-transform: uppercase;
	animation-name: ${moveFromDownSub};
	animation-duration: 6s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;n
`;

const FadingCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [key, setKey] = useState(0);

	const onImageSet = () => {
		console.log("image set");
		setKey((key) => key + 1);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
		}, 6000);
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
				onImageSet={onImageSet}
			/>
			<h3 key={currentIndex} css={subHeadCss}>
				This is nothing special about it
			</h3>
			<h2 key={currentIndex + 1} css={centerTextCss}>
				{headings[currentIndex]}
			</h2>
			{/* <h2 css={subHeadCss}>JOIN US</h2> */}
		</div>
	);
};

export default FadingCarousel;
