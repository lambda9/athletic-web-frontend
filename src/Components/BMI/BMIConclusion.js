import React from "react";

function BMIConclusion({ bmi, conclusion }) {
	return (
		<div className="bmi-concl-content">
			<div className="bmi-concl-text-div">
				<img src={conclusion.icon} alt={"health status"}></img>
				<h4 id="bmi-concl-margin">You are {conclusion.status}! </h4>
				<div id="bmi-concl-margin">BMI: {bmi}</div>
			</div>

			<div>{conclusion.suggestion}</div>
		</div>
	);
}

export default BMIConclusion;
