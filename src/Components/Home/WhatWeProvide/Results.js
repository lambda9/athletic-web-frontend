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

const Results = () => {
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
					padding: 1rem;
					border: 2px solid black;
					display: flex;
					flex-direction: column;
					border-top: none;
					@media screen and (max-width: 600px) {
						& h2 {
							font-size: 1.2rem;
						}
						& p {
							font-size: 0.7rem;
						}
						& h4 {
							font-size: 1rem;
						}
						padding: 0.5rem;
					}
				`}
			>
				<h2
				// css={css`
				// 	font-size: 3rem;
				// `}
				>
					Devendra Singh
				</h2>
				<p>
					Gained weight in 5 days and 6 months wich goes to gym ofnetly geanve
				</p>
				<h4>2 Months</h4>
			</div>
		</div>
	);
};

export default Results;
