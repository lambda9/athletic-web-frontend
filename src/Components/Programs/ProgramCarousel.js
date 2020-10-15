/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";
import Slider from "./Slider";

const dt = [
	{
		id: 0,
		img: img1,
		title: "Cardio",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
	},
	{
		id: 1,
		img: img2,
		title: "Zumba",
		desc: "Are you increased weight and below bottom high five",
	},
	{
		id: 2,
		img: img3,
		title: "Yoga",
		desc: "Are you increased weight and below bottom high five",
	},
	{
		id: 3,
		img: img4,
		title: "Weight Loss",
		desc: "increase you weight loss in less than hour",
	},
	{
		id: 4,
		img: img5,
		title: "Weight Gain",
		desc: "did weight stop you from getting gf get here and we'll share",
	},
	{
		id: 5,
		img: img6,
		title: "Strength",
		desc: "increase stamina strength to by building a weight",
	},
];

const getWindow = (arr, middleIndex, offset) => {
	let startIndex = middleIndex - offset;
	if (startIndex < 0) {
		startIndex += arr.length;
	}
	let newArr = [];
	for (let i = 0; i < offset * 2 + 1; i++) {
		newArr.push(arr[startIndex]);
		startIndex = (startIndex + 1) % arr.length;
	}
	return newArr;
};

const reducer = (state, action) => {
	switch (action.type) {
		case "next":
			return {
				...state,
				currentIndex: (state.currentIndex + 1) % state.len,
				transition: action.transitionDuration,
				activeIndex: state.activeIndex + 1,
			};

		case "prev":
			return {
				...state,
				currentIndex:
					state.currentIndex - 1 < 0 ? state.len - 1 : state.currentIndex - 1,
				transition: action.transitionDuration,
				activeIndex: state.activeIndex - 1,
			};

		case "update":
			return {
				...state,
				transition: 0,
				data: getWindow(action.data, state.currentIndex, 2),
				activeIndex: 2,
			};

		case "resize":
			return {
				...state,
				imageWidth: action.imageWidth,
				height: action.height,
			};

		default:
			throw new Error();
	}
};

// width, height, imageWidth will be applied as vw.
// transitionDelay and transitionDuraction should be passed as milliseconds.
const ProgramCarousel = ({
	data = dt,
	autoStart = true,
	width = 100,
	transitionDelay,
	transitionDuration,
}) => {
	const [state, dispatch] = useReducer(reducer, {
		currentIndex: 0,
		data: getWindow(data, 0, 2),
		transition: 0,
		activeIndex: 2,
		len: data.length,
		imageWidth: window.innerWidth < 900 ? 65 : 30,
		height: window.innerWidth < 900 ? 60 : 30,
	});
	const offset = -(state.imageWidth - (width - state.imageWidth) / 2);

	useEffect(() => {
		if (autoStart && state.transition === 0) {
			const timeout = setTimeout(
				() =>
					dispatch({ type: "next", transitionDuration: transitionDuration }),
				transitionDelay
			);
			return () => {
				clearTimeout(timeout);
			};
		}
	});

	const handleResize = () => {
		let imgWidth = window.innerWidth < 900 ? 65 : 30;
		let height = window.innerWidth < 900 ? 60 : 30;
		dispatch({ type: "resize", imageWidth: imgWidth, height: height });
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	});

	return (
		<div
			css={css`
				width: ${width}vw;
				height: ${state.height}vw;
				display: flex;
				align-items: center;
				overflow: hidden;
				margin: auto;
			`}
		>
			<Slider
				images={state.data}
				transition={`transform ease-in-out ${state.transition / 1000}s`}
				activeIndex={state.activeIndex}
				translate={-(state.activeIndex - 1) * state.imageWidth + offset}
				width={state.imageWidth}
				onTransitionEnd={() => dispatch({ type: "update", data: data })}
			/>
			<div
				css={{
					display: autoStart ? "none" : "block",
				}}
				onClick={() =>
					dispatch({ type: "next", transitionDuration: transitionDuration })
				}
			>
				&#8250;
			</div>
			<div
				css={{
					display: autoStart ? "none" : "block",
				}}
				onClick={() =>
					dispatch({ type: "prev", transitionDuration: transitionDuration })
				}
			>
				&#8249;
			</div>
		</div>
	);
};

export default ProgramCarousel;
