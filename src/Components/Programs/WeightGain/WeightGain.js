import React, { useEffect } from "react";
import "./WeightGain.css";
import wtImg from "../../../Images/WeightGain/bg13.png";
import MiniTitle from "../../Title/MiniTitle";
import Process from "./Process";
import MuscleGain from "./MuscleGain";

// wtg = weight gain

function WeightGain() {
  return (
    <div className="wtg-main-comp">
      <div className="wtg-our-pro" id="parallex-child">
        <div className="wtg-our-pro-left-div">
          <div style={{ margin: "auto" }}>
            <MiniTitle
              title={"weight gain"}
              bottomLineStyle={{ backgroundColor: "rgb(86,220,210)" }}
            />
            <p>
              Build your personality that you always wanted. With best
              supplements providing calories and protiens to your body
              requirements and best training methods that helps to burn
              excessive fat.
            </p>
          </div>
        </div>
        <div className="wtg-our-pro-right-div">
          <img src={wtImg}></img>
        </div>
      </div>

      <Process />

      <div className="wtg-step-ahead-main-div">
        <div className="wtg-step-ahead">
          <div>Let's move a </div>
          <div>STEP</div>
          <div>AHEAD</div>
        </div>
      </div>

      <MuscleGain />
    </div>
  );
}

export default WeightGain;
