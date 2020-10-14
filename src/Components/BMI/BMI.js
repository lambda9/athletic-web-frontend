import React, { useState } from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";
import BMITable from "./BMITable";

function BMI() {
  const [BMI, setBMI] = useState(0);

  const handleBMI = (value) => {
    setBMI(value);
  };
  return (
    <div>
      <div>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="bmi-main-content">
        <BMITable bmi={BMI} />
        <div className="bmi-content-right-div">
          <h4>Calculate your BMI</h4>
          <BMIinput handleBMI={handleBMI} />
        </div>
      </div>
    </div>
  );
}

export default BMI;
