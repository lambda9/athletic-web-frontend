/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import area from "../../../Images/HomeWhatWeProvide/area.jpeg";
import cooler from "../../../Images/HomeWhatWeProvide/cooler.jpeg";
import sound from "../../../Images/HomeWhatWeProvide/sound.jpeg";
import styled from "@emotion/styled";
import SvgArea from "../Icons/SvgArea";
import SvgAirConditioning from "../Icons/SvgAirConditioning";
import SvgSound from "../Icons/SvgSound";
import FeatureCard from "./FeatureCard";

const MainContainer = styled.div`
	width: 100%;
	margin: auto;
	padding: 2em;
`;

const cardStyle = css`
	margin-bottom: 1rem;
	width: 30%;
	box-shadow: 3px 3px 20px 1px #000000a3;
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;

const svgStyle = css`
	width: 3em;
	padding: 0.2rem;
	fill: blue;
`;

const FeaturesDiv = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin: auto;
	@media screen and (max-width: 600px) {
		flex-direction: column;
		width: 90%;
	}
`;

const Features = () => {
	return (
		<MainContainer>
			<h1>Building</h1>
			<p>Our space let you feel comfortable and airy</p>
			<FeaturesDiv>
				<FeatureCard
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
		</MainContainer>
	);
};

export default Features;
