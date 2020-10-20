/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useEffect, useReducer, useRef } from "react";
import ActiveBars from "./ActiveBars";
import { actionTypes, defaultSliderState, sliderReducer } from "./reducer";

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

	useEffect(() => {
		handleMoveRef.current = (e) => {
			if (state.isDragging) {
				dispatch({
					type: actionTypes.dragMove,
					x: e.screenX,
				});
			}
		};
	}, [state.isDragging]);

	useEffect(() => {
		dispatch({
			type: actionTypes.init,
			width: mainRef.current.clientWidth,
			windowWidth: window.innerWidth,
			smallScreenCardCount: smallScreen,
			mediumScreenCardCount: mediumScreen,
			largeScreenCardCount: largeScreen,
			cardCount: children.length,
		});
	}, [children, largeScreen, mediumScreen, smallScreen]);

	useEffect(() => {
		const handleResize = () => {
			dispatch({
				type: actionTypes.resize,
				windowWidth: window.innerWidth,
				width: mainRef.current.clientWidth,
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleTouchStart = (e) => {
			dispatch({
				type: actionTypes.dragStart,
				payload: {
					x: e.changedTouches[0].screenX,
					timeStamp: e.timeStamp,
				},
			});
		};

		const handleTouchMove = (e) => {
			dispatch({
				type: actionTypes.dragMove,
				x: e.changedTouches[0].screenX,
			});
		};

		const handleTouchEnd = (e) => {
			dispatch({
				type: actionTypes.dragEnd,
				x: e.changedTouches[0].screenX,
				width: mainRef.current.clientWidth,
				timeStamp: e.timeStamp,
			});
		};
		mainRef.current.addEventListener("touchstart", handleTouchStart, {
			passive: true,
		});
		mainRef.current.addEventListener("touchmove", handleTouchMove, {
			passive: true,
		});
		mainRef.current.addEventListener("touchend", handleTouchEnd, {
			passive: true,
		});
		let sliderRef = mainRef.current;
		return () => {
			sliderRef.removeEventListener("touchstart", handleTouchStart);
			sliderRef.removeEventListener("touchmove", handleTouchMove);
			sliderRef.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	useEffect(() => {
		const handleMouseDown = (e) => {
			dispatch({
				type: actionTypes.dragStart,
				payload: {
					x: e.screenX,
					timeStamp: e.timeStamp,
				},
			});
		};

		const handleMouseUp = (e) => {
			dispatch({
				type: actionTypes.dragEnd,
				x: e.screenX,
				width: mainRef.current.clientWidth,
				timeStamp: e.timeStamp,
			});
		};

		const handleMouseMove = (e) => handleMoveRef.current(e);
		mainRef.current.addEventListener("mousedown", handleMouseDown, {
			passive: true,
		});
		mainRef.current.addEventListener("mousemove", handleMouseMove, {
			passive: true,
		});
		window.addEventListener("mouseup", handleMouseUp, {
			passive: true,
		});
		let sliderRef = mainRef.current;
		return () => {
			sliderRef.removeEventListener("mousedown", handleMouseDown);
			sliderRef.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	const onClick = (index) => {
		dispatch({
			type: actionTypes.select,
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
					cursor: move;
				`}
			>
				<ScrollDiv
					style={{
						transition: `transform ease-in-out ${state.transitionDuration}s`,
						transform: `translate3d(${
							state.translate - state.index * state.width
						}px, 0px, 0px)`,
					}}
					onTransitionEnd={() => dispatch({ type: actionTypes.transitionEnd })}
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
