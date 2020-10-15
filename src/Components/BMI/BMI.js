import React, { useState, useEffect } from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";
import BMITable from "./BMITable";
import BMIConclusion from "./BMIConclusion";

export const weightState = {
	UNDERWEIGHT: 0,
	HEALTHY: 1,
	OVERWEIGHT: 2,
	OBESE: 3,
	UNSET: 4,
};

function BMI() {
	const [BMI, setBMI] = useState(-1);

	const [health, setHealth] = useState(weightState.UNSET);

	const getHealthState = (bmi) => {
		if (bmi <= 0) {
			return weightState.UNSET;
		} else if (bmi > 0 && bmi < 18.5) {
			return weightState.UNDERWEIGHT;
		} else if (bmi <= 24.9) {
			return weightState.HEALTHY;
		} else if (bmi <= 29.9) {
			return weightState.OVERWEIGHT;
		} else {
			return weightState.OBESE;
		}
	};

	useEffect(() => {
		setHealth(getHealthState(BMI));
	}, [BMI]);

	const handleBMI = (value) => {
		setBMI(value);
	};
	return (
		<div className="bmi-main-component">
			<div>
				<h1>BMI CALCULATOR</h1>
			</div>
			<div className="bmi-main-content">
				<BMITable weight={health} />
				<div className="bmi-content-right-div">
					<h4>CALCULATE YOUR BMI</h4>
					<BMIinput handleBMI={handleBMI} />
				</div>
			</div>
			<div className="bmi-concl-main-div">
				{BMI <= 0 ? null : <BMIConclusion bmi={BMI} health={health} />}
			</div>
		</div>
	);
}

export default BMI;
