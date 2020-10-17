/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import FeatureCard from "./FeatureCard";
import img1 from "../../../Images/HomeWhatWeProvide/Equipments/img1.jpeg";
import img2 from "../../../Images/HomeWhatWeProvide/Equipments/img2.jpeg";
import img3 from "../../../Images/HomeWhatWeProvide/Equipments/img3.jpeg";

import { MainContainer, FeaturesDiv, cardStyle } from "./Features";

const Equipments = () => {
	return (
		<MainContainer>
			<h1>Equipments</h1>
			<p>World class equipments, well services machines</p>
			<FeaturesDiv>
				<FeatureCard
					src={img1}
					css={cardStyle}
					title={"Cross-fit"}
					desc={"cross fit for wide exercieses strength"}
				/>
				<FeatureCard
					src={img2}
					title={"pro body line"}
					desc={"works as smooth as greeese"}
					css={cardStyle}
				/>
				<FeatureCard
					src={img3}
					title={"Cardio"}
					desc={"3 trademills cycles for cardio and warmup"}
					css={cardStyle}
				/>
			</FeaturesDiv>
		</MainContainer>
	);
};

export default Equipments;
