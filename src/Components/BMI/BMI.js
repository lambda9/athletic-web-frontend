import React, { useState, useEffect } from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";
import BMITable from "./BMITable";
import BMIConclusion from "./BMIConclusion";

function BMI() {
  const [BMI, setBMI] = useState(0);

  const [health, setHealth] = useState({
    underweight: false,
    healthy: false,
    overweight: false,
    obese: false,
  });

  useEffect(() => {
    setHealth({
      underweight: 0 < BMI && BMI < 18.5 ? true : false,
      healthy: 18.5 <= BMI && BMI <= 24.9 ? true : false,
      overweight: 24.9 < BMI && BMI <= 29.9 ? true : false,
      obese: 29.9 < BMI ? true : false,
    });
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
        <BMITable health={health} />
        <div className="bmi-content-right-div">
          <h4>CALCULATE YOUR BMI</h4>
          <BMIinput handleBMI={handleBMI} />
        </div>
      </div>
      <div className="bmi-concl-main-div">
        {BMI === 0 ? null : <BMIConclusion bmi={BMI} health={health} />}
      </div>
    </div>
  );
}

export default BMI;
