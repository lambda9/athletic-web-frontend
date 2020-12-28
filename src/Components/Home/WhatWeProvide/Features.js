/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Slider from "../../GlobalComponents/Slider/Slider";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

const Features = ({ data, error }) => {
	return (
		<div
			css={css`
				padding: 2rem 0rem;
			`}
		>
			<h2>Features</h2>
			<p>We provide you world class equipments, large area</p>
			<Slider smallScreen={1} mediumScreen={2} largeScreen={3}>
				{data.map((value) => {
					return <FeatureCard {...value} key={value.id} />;
				})}
			</Slider>
		</div>
	);
};

export default Features;
