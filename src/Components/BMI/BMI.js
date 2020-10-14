import React from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";

function BMI() {
  return (
    <div>
      <div>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="bmi-main-content">
        <div className="bmi-content-left-div">
          <h4>BMI CHART</h4>
          <table>
            <tr>
              <th>BMI</th>
              <th id="no-right-border">Wight Status</th>
            </tr>
            <tr>
              <td>Below 18.5</td>
              <td id="no-right-border">underweight</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td id="no-right-border">healthy</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td id="no-right-border">overweight</td>
            </tr>
            <tr id="no-bottom-border">
              <td>30.0 - above</td>
              <td id="no-right-border">obese</td>
            </tr>
          </table>
        </div>
        <div className="bmi-content-right-div">
          <h4>Calculate your BMI</h4>
          <BMIinput />
        </div>
      </div>
    </div>
  );
}

export default BMI;
