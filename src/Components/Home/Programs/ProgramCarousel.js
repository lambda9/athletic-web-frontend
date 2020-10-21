/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
import { useEffect, useReducer } from "react";
import "./Programs.css";
import Slider from "./Slider";

import { programs } from "./programsData";
import { init, reducer } from "./reducer";

// width, height, imageWidth will be applied as vw.
// transitionDelay and transitionDuraction should be passed as milliseconds.
const ProgramCarousel = ({
	data = programs,
	autoStart = true,
	width,
	transitionDelay,
	transitionDuration,
}) => {
	const [state, dispatch] = useReducer(reducer, data, init);
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
		let imgWidth = window.innerWidth < 900 ? 60 : 30;
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
		</div>
	);
};

export default ProgramCarousel;
