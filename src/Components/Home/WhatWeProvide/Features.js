/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import area from "../../../Images/HomeWhatWeProvide/area.jpeg";
import cooler from "../../../Images/HomeWhatWeProvide/cooler.jpeg";
import sound from "../../../Images/HomeWhatWeProvide/sound.jpeg";
import styled from "@emotion/styled";
import SvgArea from "../Icons/SvgArea";
import SvgAirConditioning from "../Icons/SvgAirConditioning";
import SvgSound from "../Icons/SvgSound";
import FeatureCard from "./FeatureCard";
import { useCallback, useEffect, useReducer, useRef } from "react";
import ActiveBars from "./ActiveBars";

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em 0em;
`;

export const cardStyle = css`
	width: 27vw;
	padding: 0px 15px;
	& > div {
		box-shadow: 0px 5px 5px 0px #00000029;
		height: 100%;
	}
	margin: 15px 0px;
	@media screen and (max-width: 900px) {
		width: 40vw;
	}
	@media screen and (max-width: 600px) {
		width: 80vw;
	}
`;

const svgStyle = css`
	width: 3em;
	padding: 0.2rem;
	fill: blue;
`;

export const FeaturesDiv = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin: auto;
	@media screen and (max-width: 900px) {
		width: fit-content;
	}
`;

const ScrollDiv = styled.div`
	display: flex;
	width: 162vw;
	justify-content: space-between;
	align-items: stretch;
	margin: auto;
	@media screen and (max-width: 900px) {
		width: 240vw;
	}
	@media screen and (max-width: 600px) {
		width: 480vw;
	}
`;

const arrowStyle = css`
	position: absolute;
	width: 2rem;
	top: 50%;
	transform: translateY(-50%);
`;

const reducer = (state, dispatch) => {
	if (dispatch.type === "dragstart") {
		return {
			...state,
			startTime: dispatch.timeStamp,
			start: dispatch.x,
			transition: 0,
			isDragging: true,
		};
	} else if (dispatch.type === "dragmove") {
		return {
			...state,
			translate: state.isDragging ? dispatch.x - state.start : 0,
			transition: 0,
		};
	} else if (dispatch.type === "dragend") {
		let endTime = dispatch.timeStamp;
		let fixTranslate = state.fixTranslate;
		let nextIndex = state.index;
		if (state.translate < 0 && state.index < state.count - 1) {
			if (
				(Math.abs(state.translate) > 10 && endTime - state.startTime < 250) ||
				Math.abs(state.translate) > dispatch.width / 3
			) {
				fixTranslate = dispatch.width;
				nextIndex = state.index + 1;
			}
		} else if (state.translate >= 0 && state.index > 0) {
			if (
				(Math.abs(state.translate) > 10 && endTime - state.startTime < 250) ||
				Math.abs(state.translate) > dispatch.width / 3
			) {
				fixTranslate = dispatch.width;
				nextIndex = state.index - 1;
			}
		}
		return {
			...state,
			fixTranslate: fixTranslate,
			start: 0,
			translate: 0,
			transition: 0.2,
			index: nextIndex,
			isDragging: false,
		};
	} else if (dispatch.type === "resize") {
		if (dispatch.windowWidth < 600) {
			return {
				...state,
				count: 6,
				width: dispatch.width,
				fixTranslate: 0,
				index: 0,
				display: 1,
			};
		} else if (dispatch.windowWidth < 900) {
			return {
				...state,
				count: 3,
				width: dispatch.width,
				fixTranslate: 0,
				index: 0,
				display: 2,
			};
		} else {
			return {
				...state,
				count: 2,
				fixTranslate: 0,
				width: dispatch.width,
				index: 0,
				display: 3,
			};
		}
	} else if (dispatch.type === "init") {
		if (dispatch.windowWidth < 600) {
			return {
				...state,
				width: dispatch.width,
				count: 6,
				display: 1,
			};
		} else if (dispatch.windowWidth < 900) {
			return {
				...state,
				width: dispatch.width,
				count: 3,
				display: 2,
			};
		} else {
			return {
				...state,
				width: dispatch.width,
				count: 2,
				display: 3,
			};
		}
	} else if (dispatch.type === "select") {
		return {
			...state,
			index: dispatch.index,
		};
	} else {
		throw new Error();
	}
};

const defaultState = {
	start: 0,
	startTime: 0,
	translate: 0,
	fixTranslate: 0,
	transition: 0,
	index: 0,
	isDragging: false,
	// count: window.innerWidth > 900 ? 2 : window.innerWidth > 600 ? 3 : 6,
	// width: window.innerWidth > 900 ? 81 : 80,
	// display: window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1,
};

const Features = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const divRef = useRef(null);
	const mainRef = useRef(null);
	const handleMoveRef = useRef(null);

	const handleTouchStart = (e) => {
		dispatch({
			type: "dragstart",
			x: e.changedTouches[0].screenX,
			timeStamp: e.timeStamp,
		});
	};

	const handleTouchMove = (e) => {
		dispatch({
			type: "dragmove",
			x: e.changedTouches[0].screenX,
		});
	};

	const handleTouchEnd = (e) => {
		dispatch({
			type: "dragend",
			x: e.changedTouches[0].screenX,
			width: mainRef.current.clientWidth,
			timeStamp: e.timeStamp,
		});
	};

	const handleMouseDown = (e) => {
		dispatch({
			type: "dragstart",
			x: e.screenX,
			timeStamp: e.timeStamp,
		});
	};

	const handleMouseUp = (e) => {
		dispatch({
			type: "dragend",
			x: e.screenX,
			width: mainRef.current.clientWidth,
			timeStamp: e.timeStamp,
		});
	};

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (state.isDragging) {
				dispatch({
					type: "dragmove",
					x: e.screenX,
				});
			}
		};
		handleMoveRef.current = handleMouseMove;
	}, [state.isDragging]);

	const handleResize = () => {
		dispatch({
			type: "resize",
			windowWidth: window.innerWidth,
			width: mainRef.current.clientWidth,
		});
	};

	useEffect(() => {
		dispatch({
			type: "init",
			width: mainRef.current.clientWidth,
			windowWidth: window.innerWidth,
		});
		const func = (e) => handleMoveRef.current(e);
		mainRef.current.addEventListener("touchstart", handleTouchStart, {
			passive: true,
		});
		mainRef.current.addEventListener("touchmove", handleTouchMove, {
			passive: true,
		});
		mainRef.current.addEventListener("touchend", handleTouchEnd, {
			passive: true,
		});
		mainRef.current.addEventListener("mousedown", handleMouseDown, {
			passive: true,
		});
		mainRef.current.addEventListener("mousemove", func, {
			passive: true,
		});
		window.addEventListener("mouseup", handleMouseUp, {
			passive: true,
		});
		window.addEventListener("resize", handleResize);
		let sliderRef = mainRef.current;
		return () => {
			sliderRef.removeEventListener("mousedown", handleMouseDown);
			sliderRef.removeEventListener("mousemove", func);
			sliderRef.removeEventListener("touchstart", handleTouchStart);
			sliderRef.removeEventListener("touchmove", handleTouchMove);
			sliderRef.removeEventListener("touchend", handleTouchEnd);
			window.removeEventListener("mouseend", handleMouseUp);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const onClick = (index) => {
		dispatch({
			type: "select",
			index: index,
		});
	};

	return (
		<MainContainer>
			<h1>Features</h1>
			<p>Our space let you feel comfortable and airy. Just do it</p>
			<div
				ref={mainRef}
				css={css`
					position: relative;
					overflow: hidden;
					margin: auto;
					width: 81vw;
					@media screen and (max-width: 900px) {
						width: 80vw;
					}
					label: slider;
				`}
			>
				<ScrollDiv
					style={{
						transition: `transform ease-in-out ${state.transition}s`,
						transform: `translate3d(${
							state.translate - state.index * state.width
						}px, 0px, 0px)`,
					}}
				>
					<FeatureCard
						refs={divRef}
						src={area}
						title="1000 sq feet area"
						desc="you can rome around full area"
						css={cardStyle}
					>
						<SvgArea css={svgStyle} />
					</FeatureCard>
					<FeatureCard
						src={cooler}
						title="Air conditioning"
						desc="2 big coolers to let you feel cold in winter"
						css={cardStyle}
					>
						<SvgAirConditioning css={svgStyle} />
					</FeatureCard>
					<FeatureCard
						src={sound}
						title="Music System"
						desc="listen to music in bull bass"
						css={cardStyle}
					>
						<SvgSound css={svgStyle} />
					</FeatureCard>
					<FeatureCard
						src={sound}
						title="Lele mera"
						desc="listen to music in bull bass"
						css={cardStyle}
					>
						<SvgSound css={svgStyle} />
					</FeatureCard>
					<FeatureCard
						src={sound}
						title="Kya baat hai"
						desc="listen to music in bull bass"
						css={cardStyle}
					>
						<SvgSound css={svgStyle} />
					</FeatureCard>
					<FeatureCard
						src={sound}
						title="Bade harami hore ho beta"
						desc="listen to music in bull bass"
						css={cardStyle}
					>
						<SvgSound css={svgStyle} />
					</FeatureCard>
				</ScrollDiv>
				<ActiveBars
					onClick={onClick}
					count={state.count}
					activeIndex={state.index}
				/>
			</div>
		</MainContainer>
	);
};

export default Features;
