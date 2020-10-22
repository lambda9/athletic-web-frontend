/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
import { useEffect, useReducer } from "react";
import "./Programs.css";
import Slider from "./Slider";

import { programs } from "./programsData";
import { init, reducer } from "./reducer";
import { StarTwoTone } from "@material-ui/icons";
import ProgramSlide from "./ProgramSlide";

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
			<div
				style={{
					transition: `transform ease-in-out ${state.transition / 1000}s`,
					transform: `translateX(${
						-(state.activeIndex - 1) * state.imageWidth + offset
					}vw)`,
				}}
				css={css`
					display: flex;
					align-items: center;
					width: fit-content;
					height: 90%;
					& > div {
						padding: 3vw;
						z-index: 0;
					}
					& img {
						width: 100%;
					}
				`}
				onTransitionEnd={() => dispatch({ type: "update", data: data })}
			>
				{state.data.map((item, index) => {
					return (
						<div
							key={item.id}
							css={css`
								width: ${state.imageWidth}vw;
								transition: transform ease-in-out 0.5s;
								transform: scale(
									${index === state.activeIndex ? 1 + 12 / state.imageWidth : 1}
								);
							`}
							onTransitionEnd={(e) => {
								e.stopPropagation();
							}}
						>
							<ProgramSlide css={{ width: "100%" }} {...item} />
						</div>
					);
				})}
			</div>
			);
		</div>
	);
};

export default ProgramCarousel;
