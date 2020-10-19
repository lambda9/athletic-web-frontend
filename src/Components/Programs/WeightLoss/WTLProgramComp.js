import React from "react";
import wltImg from "../../../Images/WeightGain/wtl2.png";
import MiniTitle from "../../GlobalComponents/Title/MiniTitle";
import "./WeightLoss.css";

function WTLProgramComp() {
	return (
		<div className="wtl-head-img-div">
			<div className="wtl-img-div" style={{ margin: "none" }}>
				<img src={wltImg}></img>
			</div>
			<div className="wtl-head-text-div">
				<MiniTitle
					title={"weight loss program"}
					bottomLineStyle={{ backgroundColor: "#1ca9c9" }}
				/>
				<span>
					Do not loose hope. We are here for you. Our members don’t just lose
					weight. They gain confidence, strength, community, relationships,
					shared goals and good habits.
				</span>
			</div>
		</div>
	);
}

export default WTLProgramComp;
