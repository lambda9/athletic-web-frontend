/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useEffect, useReducer, useRef } from "react";
import ActiveBars from "./ActiveBars";
import { defaultSliderState, sliderReducer } from "./reducer";

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em 0em;
`;

export const CardContainer = styled.div`
	width: ${(props) => props.largeWidth}vw;
	padding: 0px 15px;
	& * {
		user-select: none;
	}
	margin: 15px 0px;
	@media screen and (max-width: 900px) {
		width: ${(props) => props.mediumWidth}vw;
	}
	@media screen and (max-width: 600px) {
		width: ${(props) => props.smallWidth}vw;
	}
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

const Slider = ({
	smallScreen,
	mediumScreen,
	largeScreen,
	children,
	width = 80,
	showBars = true,
}) => {
	const [state, dispatch] = useReducer(sliderReducer, defaultSliderState);
	const mainRef = useRef(null);
	const handleMoveRef = useRef(null);

	// console.log("chi;derem", children);

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
			smallScreenCardCount: smallScreen,
			mediumScreenCardCount: mediumScreen,
			largeScreenCardCount: largeScreen,
			cardCount: children.length,
		});
	}, [children, largeScreen, mediumScreen, smallScreen]);

	useEffect(() => {
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
			<div
				ref={mainRef}
				css={css`
					position: relative;
					overflow: hidden;
					margin: auto;
					width: ${width}vw;
					cursor: pointer;
				`}
			>
				<ScrollDiv
					style={{
						transition: `transform ease-in-out ${state.transitionDuration}s`,
						transform: `translate3d(${
							state.translate - state.index * state.width
						}px, 0px, 0px)`,
					}}
					onTransitionEnd={() => dispatch({ type: "transitionend" })}
				>
					{children.map((child, index) => {
						return (
							<CardContainer
								largeWidth={width / largeScreen}
								mediumWidth={width / mediumScreen}
								smallWidth={width / smallScreen}
								key={index}
							>
								{child}
							</CardContainer>
						);
					})}
				</ScrollDiv>
			</div>
			{showBars ? (
				<ActiveBars
					onClick={onClick}
					count={state.bars}
					activeIndex={state.index}
				/>
			) : null}
		</MainContainer>
	);
};

export default Slider;
