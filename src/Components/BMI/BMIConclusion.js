import React, { useState, useEffect } from "react";
import underweight from "../../Images/BMI/underweight.png";
import overweight from "../../Images/BMI/overweight.png";
import obese from "../../Images/BMI/obese.png";
import healthy from "../../Images/BMI/normal.png";

function BMIConclusion(props) {
  const { bmi, health } = props;
  const [item, setItem] = useState({
    icon: healthy,
    status: "Healthy",
    suggestion: "Keep your regular excercise up and stay fit",
  });

  const getHealth = () => {
    console.log(health, health.healthy, "im in");
    if (health.underweight) {
      setItem({
        icon: underweight,
        status: "Underweight",
        suggestion: "Maintain your proper diet.",
      });
    } else if (health.healthy) {
      setItem({
        icon: healthy,
        status: "Healthy",
        suggestion: "Keep your regular excercise up and stay fit",
      });
    } else if (health.overweight) {
      setItem({
        icon: overweight,
        status: "Overweight",
        suggestion: "Do proper excercise or checkout our weight loss program",
      });
    } else if (health.obese) {
      setItem({
        icon: obese,
        status: "Obese",
        suggestion: "Consult a doctor and checkout our weight loss program",
      });
    }
  };

  useEffect(() => {
    getHealth();
  }, [bmi, health]);

  return (
    <div className="bmi-concl-content">
      <div className="bmi-concl-text-div">
        <img src={item.icon}></img>
        <h4 id="bmi-concl-margin">You are {item.status}! </h4>
        <div  id="bmi-concl-margin">BMI: {bmi}</div>
      </div>

      <div>{item.suggestion}</div>
    </div>
  );
}

export default BMIConclusion;
