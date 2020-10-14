import React from "react";

function BMIConclusion(props) {
  const { bmi } = props;

  return (
    <div>
      <div>
        <h4>BMI: </h4>
        <div>{bmi}</div>
      </div>
    </div>
  );
}

export default BMIConclusion;
