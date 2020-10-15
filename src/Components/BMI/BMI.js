import React, { useState } from "react";
import "./BMI.css";
import BMIinput from "./BMIinput";
import BMITable from "./BMITable";
import BMIConclusion from './BMIConclusion'

function BMI() {
  const [BMI, setBMI] = useState(0);

  const handleBMI = (value) => {
    setBMI(value);
  };
  return (
    <div className='bmi-main-component'>
      <div>
        <h1>BMI CALCULATOR</h1>
      </div>
      <div className="bmi-main-content">
        <BMITable bmi={BMI} />
        <div className="bmi-content-right-div">
          <h4>Calculate your BMI</h4>
          <BMIinput handleBMI={handleBMI} />
          <BMIConclusion bmi={BMI}/>
        </div>
      </div>
    </div>
  );
}

export default BMI;
