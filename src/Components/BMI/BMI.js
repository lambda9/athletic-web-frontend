import React, { useState, useEffect } from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";
import BMITable from "./BMITable";
import BMIConclusion from "./BMIConclusion";
import underweight from "../../Images/BMI/underweight.png";
import overweight from "../../Images/BMI/overweight.png";
import obese from "../../Images/BMI/obese.png";
import healthy from "../../Images/BMI/normal.png";

export const healthState = {
	UNDERWEIGHT: "underweight",
	HEALTHY: "healthy",
	OVERWEIGHT: "overweight",
	OBESE: "obese",
	UNSET: "unset",
};

const conclusions = [
	{
		icon: healthy,
		status: healthState.HEALTHY,
		suggestion: "Keep your regular excercise up and stay fit",
	},
	{
		icon: underweight,
		status: healthState.UNDERWEIGHT,
		suggestion: "Maintain your proper diet.",
	},
	{
		icon: overweight,
		status: healthState.OVERWEIGHT,
		suggestion: "Do proper excercise or checkout our weight loss program",
	},
	{
		icon: obese,
		status: healthState.OBESE,
		suggestion: "Consult a doctor and checkout our weight loss program",
	},
];

function BMI() {
	const [state, setState] = useState({
		BMI: 0,
		health: healthState.UNSET,
	});

	const getHealthState = (bmi) => {
		if (bmi <= 0) {
			return healthState.UNSET;
		} else if (bmi > 0 && bmi < 18.5) {
			return healthState.UNDERWEIGHT;
		} else if (bmi <= 24.9) {
			return healthState.HEALTHY;
		} else if (bmi <= 29.9) {
			return healthState.OVERWEIGHT;
		} else {
			return healthState.OBESE;
		}
	};

	const handleBMI = (value) => {
		setState({
			BMI: value,
			health: getHealthState(value),
		});
	};
	return (
		<div className="bmi-main-component">
			<div>
				<h1>BMI CALCULATOR</h1>
			</div>
			<div className="bmi-main-content">
				<BMITable weight={state.health} />
				<div className="bmi-content-right-div">
					<h4>CALCULATE YOUR BMI</h4>
					<BMIinput handleBMI={handleBMI} />s
				</div>
			</div>
			<div className="bmi-concl-main-div">
				{state.BMI <= 0 ? null : (
					<BMIConclusion
						bmi={state.BMI}
						conclusion={
							conclusions.filter((value) => value.status === state.health)[0]
						}
					/>
				)}
			</div>
		</div>
	);
}

export default BMI;
