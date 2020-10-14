/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
	width: 40%;
	text-align: left;
`;

const FeaturesList = styled.ul`
	list-style: none;
	font-size: 1.5rem;
	list-style-position: inside;
`;

const Features = () => {
	return (
		<MainContainer>
			<DetailDiv>
				<h1
					css={{
						fontSize: "5rem",
					}}
				>
					Building
				</h1>
				<FeaturesList>
					<li>best envirinment</li>
					<li>open nature</li>
					<li>getmostoutof it</li>
				</FeaturesList>
			</DetailDiv>
			<CrossFadeImage
				image={img5}
				width={"60%"}
				height={"100%"}
				time={500}
				showOverlay={false}
			/>
		</MainContainer>
	);
};

export default Features;
