import React from "react";
import { weightState } from "./BMI";
import BMITableRow from "./BMITableRow";

function BMITable(props) {
	const { weight } = props;

	return (
		<div className="bmi-content-left-div">
			<h4>BMI CHART</h4>
			<table>
				<tr>
					<th>BMI</th>
					<th id="no-right-border">Wight Status</th>
				</tr>
				<BMITableRow
					bmiLable={"Below 18.5"}
					weightLable={"underweight"}
					active={weight === weightState.UNDERWEIGHT}
					activeColor={"red"}
				/>
				<BMITableRow
					bmiLable={"18.5 - 24.9"}
					weightLable={"healthy"}
					active={weight === weightState.HEALTHY}
					activeColor={"green"}
				/>
				<BMITableRow
					bmiLable={"25.0 - 29.95"}
					weightLable={"overweight"}
					active={weight === weightState.OVERWEIGHT}
					activeColor={"red"}
				/>
				<BMITableRow
					bmiLable={"30.0 - above"}
					weightLable={"ubese"}
					active={weight === weightState.OBESE}
					activeColor={"red"}
				/>
			</table>
		</div>
	);
}

export default BMITable;
