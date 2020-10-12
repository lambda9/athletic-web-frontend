/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

import { useState } from "react";
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
	"one more",
	"no excuses",
	"don't quit",
];

const subHeadings = [
	"'Unless you puke, faint, or die, keep going.'",
	"'Motivation is what gets you started. Habit is what keeps you going'",
	"'I hate every minute of training. But i said, don’t quit. Suffer now and live the rest of your life as a champion.'",
	"'Do today what others won’t so tomorrow you can do what others can’t.'",
	"'Exercise is done against one’s wishes and maintained only because the alternative is worse.'",
];

const moveUp = (height) => keyframes`
    0% {
			bottom: 10%;
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

const headingsBaseStyle = css`
	position: absolute;
	opacity: 0;
	bottom: 0%;
	z-index: 3;
	left: 50%;
	color: whitesmoke;
	font-family: Montserrat;
	text-transform: uppercase;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
`;

const TopText = styled.h1`
	${headingsBaseStyle};
	font-size: 2vw;
	transform: translateX(-50%);
	padding: 0.5vw;
	animation-name: ${moveUp(65)};
	animation-duration: 5s;
`;

const BottomText = styled.h1`
	${headingsBaseStyle};
	font-size: 2vw;
	transform: translateX(-50%);
	padding: 0.5vw;
	animation-name: ${moveUp(24)};
	animation-delay: 500ms;
	animation-duration: 5s;
`;

const CenterText = styled.h1`
	${headingsBaseStyle};
	font-size: 5vw;
	transform: translate(-50%, 50%);
	background-color: #ff7500e0;
	padding: 0.5vw 1vw;
	animation-name: ${moveUp(50)};
	animation-delay: 250ms;
	animation-duration: 5s;
`;

const FadingCarousel = ({ animationDelay }) => {
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
			<TopText key={currentIndex}>{subHeadings[currentIndex]}</TopText>
			<CenterText key={currentIndex + 1}>{headings[currentIndex]}</CenterText>
			<BottomText
				key={currentIndex + 2}
				className={"button-primary"}
				onAnimationEnd={() => {
					setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
				}}
			>
				{"join us >>"}
			</BottomText>
		</div>
	);
};

export default FadingCarousel;
