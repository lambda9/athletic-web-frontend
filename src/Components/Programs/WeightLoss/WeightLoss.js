import React from "react";
import "./WeightLoss.css";

import WTLProgramComp from "./WTLProgramComp";
import WTLImgCards from "./WTLImgCards";
import WTLAboutCards from "./WTLAboutCards";
import MiniTitle from "../../GlobalComponents/Title/MiniTitle";

function WeightLoss() {
	return (
		<div className="wtl-main-comp">
			<div
				className="wtl-head-div"
				style={{ width: "60%", margin: "4rem auto 1rem" }}
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				<MiniTitle title={"lose weight, live happy"} />
			</div>
			<WTLAboutCards />
			<WTLProgramComp />
			<WTLImgCards />
		</div>
	);
}

export default WeightLoss;
