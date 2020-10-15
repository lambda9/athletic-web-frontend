/* eslint-disable jsx-a11y/alt-text */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import img1 from "../../../Images/HomeWhatWeProvide/img1.jpg";
import img2 from "../../../Images/HomeWhatWeProvide/img2.jpg";
import logo from "../../../Images/HomeWhatWeProvide/logo.png";

const mediaBreakpoint = "@media (max-width: 900px)";

const ImagesDiv = styled.div`
	${mediaBreakpoint} {
		width: 100%;
	}
	width: 70%;
	display: flex;
	& > div {
		position: relative;
	}
	& div > img:first-child {
		width: 100%;
	}
`;

const ImageOverlayText = styled.div`
	position: absolute;
	bottom: 0%;
	left: 50%;
	transform: translateX(-50%);
	text-transform: uppercase;
	font-size: 1rem;
	z-index: 2;
	color: whitesmoke;
	margin-bottom: 1rem;
	background-color: #000000c2;
	padding: 0.2rem 0.5rem;
	border: 2px solid whitesmoke;
`;

const LogoOverlay = styled.img`
	${mediaBreakpoint} {
		width: 3em;
	}
	position: absolute;
	width: 4em;
	left: 2%;
	top: 2%;
`;

const Results = () => {
	return (
		<div
			css={css`
				width: 80%;
				display: flex;
				margin: 2em auto;
				@media (max-width: 900px) {
					flex-direction: column;
				}
			`}
		>
			<ImagesDiv>
				<div>
					<img src={img1} />
					<LogoOverlay src={logo} />
					<ImageOverlayText>Before</ImageOverlayText>
				</div>
				<div>
					<img src={img2} />
					<LogoOverlay src={logo} />
					<ImageOverlayText>After</ImageOverlayText>
				</div>
			</ImagesDiv>
			<div
				css={css`
					width: 30%;
					padding: 1rem;
					border: 2px solid black;
					display: flex;
					flex-direction: column;
					@media (max-width: 900px) {
						width: 100%;
					}
				`}
			>
				<h2
					css={css`
						font-size: 3rem;
					`}
				>
					Devendra Singh
				</h2>
				<p>
					Gained weight in 5 days and 6 months wich goes to gym ofnetly geanve
				</p>
				<h3>2 Months</h3>
			</div>
		</div>
	);
};

export default Results;
