import React from "react";
import IconHeadDescCard from "../../GlobalComponents/CardGroup/IconHeadDescCard";
import "./WeightGain.css";
import weightIcon from "../../../Images/WeightGain/weightIcon.png";
import strategyIcon from "../../../Images/WeightGain/strategyIcon.png";
import supplementIcon from "../../../Images/WeightGain/supplementIcon.png";
import MiniTitle from "../../GlobalComponents/Title/MiniTitle";

function Process() {
	const processCardDt = [
		{
			id: 0,
			icon: supplementIcon,
			heading: "protein",
			description:
				"Calculated calorie and protein diet is necessary for desired outputs",
		},
		{
			id: 1,
			icon: strategyIcon,
			heading: "strategy",
			description:
				"Build with a lot of research and experience. A plan which is necesssary from diet to training",
		},
		{
			id: 2,
			icon: weightIcon,
			heading: "workout",
			description:
				"Do proper excercise in the guidance of our trainers and shape your body",
		},
	];

	return (
		<div className="wtg-process">
			<MiniTitle title={"p r o c e s s"} />
			<div className="wtg-process-card-cont">
				{processCardDt.map((item) => {
					return (
						<IconHeadDescCard
							id={item.id}
							dataAos="fade-up"
							icon={item.icon}
							heading={item.heading}
							description={item.description}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Process;
