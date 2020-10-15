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
				direction: 1,
			};

		case "prev":
			return {
				...state,
				currentIndex:
					state.currentIndex - 1 < 0 ? state.len - 1 : state.currentIndex - 1,
				transition: action.transitionDuration,
				activeIndex: state.activeIndex - 1,
				direction: -1,
			};

		case "update":
			console.log("state", state.currentIndex, "data", action.data);
			return {
				...state,
				transition: 0,
				data: getWindow(action.data, state.currentIndex, 2),
				activeIndex: 2,
				direction: 0,
			};
		default:
			throw new Error();
	}
};

// width, height, imageWidth will be applied as vw.
// transitionDelay and transitionDuraction should be passed as milliseconds.
const ProgramCarousel = ({
	data = dt,
	autoStart = false,
	width = 100,
	imageWidth = 29,
	height = 40,
	transitionDelay,
	transitionDuration,
}) => {
	// const currentIndex = useRef(0);

	const offset = -(imageWidth - (width - imageWidth) / 2);

	const [state, dispatch] = useReducer(reducer, {
		currentIndex: 0,
		data: getWindow(data, 0, 2),
		transition: 0,
		activeIndex: 2,
		direction: 0,
		len: data.length,
	});

	console.log(state);
	// useEffect(() => {
	// 	if (autoStart && state.transition === 0) {
	// 		const timeout = setTimeout(nextImg, transitionDelay);
	// 		return () => {
	// 			clearTimeout(timeout);
	// 		};
	// 	}
	// }, [state.transition, autoStart, nextImg, transitionDelay]);

	// useEffect(() => {
	// 	setState((state) => ({
	// 		...state,
	// 		data: getWindow(data, currentIndex.current, 2),
	// 	}));
	// }, [data]);

	// useEffect(() => {
	// 	if (state.direction === 1) {
	// 		currentIndex.current = (currentIndex.current + 1) % data.length;
	// 	} else if (state.direction === -1) {
	// 		currentIndex.current = currentIndex.current - 1;
	// 		if (currentIndex.current < 0) {
	// 			currentIndex.current = data.length - 1;
	// 		}
	// 	}
	// }, [state.direction, data]);

	// const prevImg = () => {
	// 	setState((state) => {
	// 		return {
	// 			...state,
	// 			activeIndex: state.activeIndex - 1,
	// 			transition: transitionDuration,
	// 			direction: -1,
	// 		};
	// 	});
	// };

	const onTransitionEnd = () => {
		dispatch({ type: "update", data: data });
	};

	return (
		<div
			css={css`
				width: ${width}vw;
				height: ${height}vw;
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
				translate={-(state.activeIndex - 1) * imageWidth + offset}
				width={imageWidth}
				onTransitionEnd={onTransitionEnd}
			/>
			<div
				className="pro-car-nextBtn"
				style={{
					display: autoStart ? "none" : "block",
				}}
				onClick={() =>
					dispatch({ type: "next", transitionDuration: transitionDuration })
				}
			>
				&#8250;
			</div>
			<div
				className="pro-car-prevBtn"
				style={{
					display: autoStart ? "none" : "block",
				}}
				// onClick={prevImg}
			>
				&#8249;
			</div>
		</div>
	);
};

export default ProgramCarousel;
