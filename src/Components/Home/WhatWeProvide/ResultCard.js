/* eslint-disable jsx-a11y/alt-text */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

import img1 from "../../../Images/HomeWhatWeProvide/img1.jpg";
import img2 from "../../../Images/HomeWhatWeProvide/img2.jpg";
import logo from "../../../Images/HomeWhatWeProvide/logo.png";

const mediaBreakpoint = "@media (max-width: 900px)";

const ImagesDiv = styled.div`
	display: flex;
	width: 100%;
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

const ResultCard = () => {
	return (
		<div
			css={css`
				width: 90%;
				margin: auto;
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
					width: 100%;
					padding: 0.5rem;
					border: 2px solid black;
					display: flex;
					flex-direction: column;
					border-top: none;
					& * {
						margin-bottom: 0.2rem;
					}
				`}
			>
				<h3>Devendra Singh</h3>
				<p>
					Gained weight in 5 days and 6 months wich goes to gym ofnetly geanve
				</p>
				<h5>2 Months</h5>
			</div>
		</div>
	);
};

export default ResultCard;
