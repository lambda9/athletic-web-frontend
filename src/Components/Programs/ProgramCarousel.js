/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
import { useEffect, useReducer } from "react";
import "./Programs.css";
import Slider from "./Slider";

import { programs } from "./programs";
import { reducer } from "./reducer";

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

// width, height, imageWidth will be applied as vw.
// transitionDelay and transitionDuraction should be passed as milliseconds.
const ProgramCarousel = ({
	data = programs,
	autoStart = false,
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
		imageWidth: window.innerWidth < 900 ? (100 - 10) / 1.5 : (60 - 6) / 1.5,
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
		let imgWidth = window.innerWidth < 900 ? (100 - 10) / 1.5 : (60 - 6) / 1.5;
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
				width: ${width}%;
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
