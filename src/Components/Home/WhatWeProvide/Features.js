/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import area from "../../../Images/HomeWhatWeProvide/area.jpeg";
import cooler from "../../../Images/HomeWhatWeProvide/cooler.jpeg";
import sound from "../../../Images/HomeWhatWeProvide/sound.jpeg";
// import left from "../../../Images/HomeWhatWeProvide/left-arrow.png";
// import right from "../../../Images/HomeWhatWeProvide/right-arrow.png";
import styled from "@emotion/styled";
import SvgArea from "../Icons/SvgArea";
import SvgAirConditioning from "../Icons/SvgAirConditioning";
import SvgSound from "../Icons/SvgSound";
import FeatureCard from "./FeatureCard";
import { useEffect, useReducer, useRef } from "react";
import ActiveBars from "./ActiveBars";

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em 0em;
`;

export const cardStyle = css`
	width: 30%;
	box-shadow: 5px 5px 15px 0px #00000094;
	@media screen and (max-width: 900px) {
		width: 80vw;
		margin-right: 10vw;
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

const arrowStyle = css`
	position: absolute;
	width: 2rem;
	top: 50%;
	transform: translateY(-50%);
`;

const reducer = (state, dispatch) => {
	if (dispatch.type === "touchstart") {
		return {
			...state,
			startTime: new Date().getMilliseconds(),
			start: dispatch.x,
			transition: 0,
		};
	} else if (dispatch.type === "touchmove") {
		return {
			...state,
			translate: dispatch.x - state.start,
			transition: 0,
		};
	} else if (dispatch.type === "touchend") {
		let endTime = new Date().getMilliseconds();
		let fixTranslate = state.fixTranslate;
		let nextIndex = state.index;
		if (state.translate < 0 && state.fixTranslate > -2 * dispatch.width) {
			if (
				(Math.abs(state.translate) > 10 && endTime - state.startTime < 250) ||
				Math.abs(state.translate) > dispatch.width / 3
			) {
				fixTranslate = state.fixTranslate - dispatch.width;
				nextIndex = state.index + 1;
			}
		} else if (state.translate >= 0 && state.fixTranslate < 0) {
			if (
				(Math.abs(state.translate) > 10 && endTime - state.startTime < 250) ||
				Math.abs(state.translate) > dispatch.width / 3
			) {
				fixTranslate = state.fixTranslate + dispatch.width;
				nextIndex = state.index - 1;
			}
		}
		return {
			...state,
			fixTranslate: fixTranslate,
			start: 0,
			translate: 0,
			transition: 0.1,
			index: nextIndex,
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
};

const Features = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);
	const divRef = useRef(null);
	const mainRef = useRef(null);

	const handleTouchStart = (e) => {
		dispatch({ type: "touchstart", x: e.changedTouches[0].screenX });
	};

	const handleTouchMove = (e) => {
		dispatch({
			type: "touchmove",
			x: e.changedTouches[0].screenX,
		});
	};

	const handleTouchEnd = (e) => {
		let margin = parseFloat(
			window.getComputedStyle(divRef.current).marginRight
		);
		dispatch({
			type: "touchend",
			x: e.changedTouches[0].screenX,
			width: divRef.current.clientWidth + margin,
		});
	};

	useEffect(() => {
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

	return (
		<MainContainer>
			<h1>Building</h1>
			<p>Our space let you feel comfortable and airy. Just do it</p>
			<div
				ref={mainRef}
				css={css`
					position: relative;
					overflow: hidden;
					margin: auto;
					width: 100%;
					padding: 2rem 10vw;
					label: slider;
				`}
			>
				<FeaturesDiv
					css={{
						transition: `transform ease-in-out ${state.transition}s`,
						transform: `translate3D(${
							state.fixTranslate + state.translate
						}px, 0, 0)`,
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
				</FeaturesDiv>
				<ActiveBars
					css={css`
						display: none;
						@media screen and (max-width: 550px) {
							display: flex;
						}
					`}
					count={3}
					activeIndex={state.index}
				/>
				{/* <img
					src={left}
					css={[
						arrowStyle,
						css`
							left: 0%;
						`,
					]}
					alt={"left-arrow"}
				/>
				<img
					src={right}
					css={[
						arrowStyle,
						css`
							right: 0%;
						`,
					]}
					alt="right-arrow"
				/> */}
			</div>
		</MainContainer>
	);
};

export default Features;
