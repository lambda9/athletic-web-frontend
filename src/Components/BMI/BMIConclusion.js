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
      <img src={item.icon}></img>

      <div>
        <h4>You are {item.status}! </h4>
        <div>BMI: {bmi}</div>
        <div>{item.suggestion}</div>
      </div>
    </div>
  );
}

export default BMIConclusion;
