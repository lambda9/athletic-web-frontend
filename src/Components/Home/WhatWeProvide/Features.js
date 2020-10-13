/** @jsx jsx */
import { jsx } from "@emotion/core";
import CrossFadeImage from "../CrossFadeImage";
import img5 from "../../../Images/HomeBackdrop/im5.jpg";
import styled from "@emotion/styled";

const MainContainer = styled.div`
	display: flex;
	width: 80%;
	margin: auto;
	padding: 2em;
	background-color: cadetblue;
`;

const DetailDiv = styled.div`
	width: 50%;
	text-align: left;
`;

const FeaturesList = styled.ul`
	list-style: none;
	list-style-position: inside;
`;

const Features = () => {
	return (
		<MainContainer>
			<DetailDiv>
				<h1>Building</h1>
				<FeaturesList>
					<li>best envirinment</li>
					<li>open nature</li>
					<li>getmostoutof it</li>
				</FeaturesList>
			</DetailDiv>
			<div
				css={{
					width: "50%",
				}}
			>
				<CrossFadeImage
					image={img5}
					width={"100%"}
					height={"100%"}
					time={500}
					showOverlay={false}
				/>
			</div>
		</MainContainer>
	);
};

export default Features;
