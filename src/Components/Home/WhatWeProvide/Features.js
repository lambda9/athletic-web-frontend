/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useCallback, useEffect, useReducer, useRef } from "react";
import ActiveBars from "./ActiveBars";

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em 0em;
`;

export const CardContainer = styled.div`
	width: 27vw;
	padding: 0px 15px;
	& * {
		user-select: none;
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
	width: fit-content;
	align-items: stretch;
	margin: auto;
	will-change: transform;
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
			translate: dispatch.x - state.start,
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

const Features = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultState);
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
		const handleMouseMove = (e) => handleMoveRef.current(e);
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
		mainRef.current.addEventListener("mousemove", handleMouseMove, {
			passive: true,
		});
		window.addEventListener("mouseup", handleMouseUp, {
			passive: true,
		});
		window.addEventListener("resize", handleResize);
		let sliderRef = mainRef.current;
		return () => {
			sliderRef.removeEventListener("mousedown", handleMouseDown);
			sliderRef.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);

			sliderRef.removeEventListener("touchstart", handleTouchStart);
			sliderRef.removeEventListener("touchmove", handleTouchMove);
			sliderRef.removeEventListener("touchend", handleTouchEnd);
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
					cursor: pointer;
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
					{children.map((child, index) => {
						return <CardContainer key={index}>{child}</CardContainer>;
					})}
				</ScrollDiv>
			</div>
			<ActiveBars
				onClick={onClick}
				count={state.count}
				activeIndex={state.index}
			/>
		</MainContainer>
	);
};

export default Features;
