/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import area from "../../../Images/HomeWhatWeProvide/area.jpeg";
import cooler from "../../../Images/HomeWhatWeProvide/cooler.jpeg";
import sound from "../../../Images/HomeWhatWeProvide/sound.jpeg";
import left from "../../../Images/HomeWhatWeProvide/left-arrow.png";
import right from "../../../Images/HomeWhatWeProvide/right-arrow.png";
import styled from "@emotion/styled";
import SvgArea from "../Icons/SvgArea";
import SvgAirConditioning from "../Icons/SvgAirConditioning";
import SvgSound from "../Icons/SvgSound";
import FeatureCard from "./FeatureCard";
import { useEffect, useReducer, useRef, useState } from "react";

export const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em 0em;
`;

export const cardStyle = css`
	margin-bottom: 1rem;
	width: 30%;
	box-shadow: 5px 5px 15px 0px #00000094;
	@media screen and (max-width: 900px) {
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
			start: dispatch.x,
			transition: 0,
		};
	} else if (dispatch.type === "touchmove") {
		// console.log("move", dispatch);
		return {
			...state,
			translate: dispatch.x - state.start,
			transition: 0,
		};
	} else if (dispatch.type === "touchend") {
		// console.log("end", dispatch);
		if (state.translate < 0) {
			if (Math.abs(state.translate) > dispatch.width / 2) {
				return {
					fixTranslate: state.fixTranslate - dispatch.width,
					translate: 0,
					start: 0,
					transition: 0.2,
				};
			}
		} else {
			if (Math.abs(state.translate) > dispatch.width / 2) {
				return {
					fixTranslate: state.fixTranslate + dispatch.width,
					translate: 0,
					start: 0,
					transition: 0.2,
				};
			}
		}
		return {
			...state,
			start: 0,
			translate: 0,
			transition: 0.2,
		};
	} else {
		throw new Error();
	}
};

const defaultState = {
	start: 0,
	translate: 0,
	fixTranslate: 0,
	transition: 0,
};

const Features = () => {
	// const [start, setStart] = useState(0);
	// const [translate, setTranslate] = useState(0);
	// const [fixTranslate, setFixTranslate] = useState(0);
	const [state, dispatch] = useReducer(reducer, defaultState);
	const divRef = useRef(null);
	const mainRef = useRef(null);

	// console.log("start", start);
	// console.log("translate", translate);
	// console.log("fix", fixTranslate);

	useEffect(() => {
		mainRef.current.addEventListener(
			"touchstart",
			(e) => {
				dispatch({ type: "touchstart", x: e.changedTouches[0].screenX });
			},
			{ passive: true }
		);
		mainRef.current.addEventListener(
			"touchmove",
			(e) => {
				dispatch({
					type: "touchmove",
					x: e.changedTouches[0].screenX,
				});
			},
			{ passive: true }
		);
		mainRef.current.addEventListener(
			"touchend",
			(e) => {
				dispatch({
					type: "touchend",
					x: e.changedTouches[0].screenX,
					width: divRef.current.clientWidth,
				});
			},
			{ passive: true }
		);
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
					width: 80vw;
					label: slider;
				`}
			>
				<FeaturesDiv
					style={{
						transition: `transform ease-in-out ${state.transition}s`,
						transform: `translateX(${state.fixTranslate + state.translate}px)`,
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
				<img
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
				/>
			</div>
		</MainContainer>
	);
};

export default Features;
