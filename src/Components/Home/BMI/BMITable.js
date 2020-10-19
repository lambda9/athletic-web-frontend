import React from "react";
import { healthState } from "./BMI";
import BMITableRow from "./BMITableRow";

function BMITable(props) {
  const { weight } = props;

  return (
    <div className="bmi-content-left-div">
      <h4>BMI CHART</h4>
      <table>
        <tbody>
          <tr>
            <th>BMI</th>
            <th id="no-right-border">Wight Status</th>
          </tr>
          <BMITableRow
            bmiLable={"Below 18.5"}
            weightLable={"underweight"}
            active={weight === healthState.UNDERWEIGHT}
          />
          <BMITableRow
            bmiLable={"18.5 - 24.9"}
            weightLable={"healthy"}
            active={weight === healthState.HEALTHY}
            activeColor={"green"}
          />
          <BMITableRow
            bmiLable={"25.0 - 29.95"}
            weightLable={"overweight"}
            active={weight === healthState.OVERWEIGHT}
          />
          <BMITableRow
            bmiLable={"30.0 - above"}
            weightLable={"obese"}
            active={weight === healthState.OBESE}
          />
        </tbody>
      </table>
    </div>
  );
}

export default BMITable;
