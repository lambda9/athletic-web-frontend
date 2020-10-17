import React from "react";
import "./WeightGain.css";
import wtImg from '../../../Images/bg13.png'
import MiniTitle from '../../Title/MiniTitle'


// wtg = weight gain

function WeightGain() {
  return (
    <div className="wtg-main-comp">
      <div className="wtg-step-ahead">
        <div>Let's move a step </div>
        <div> Ahead</div>
      </div>

      <div className="wtg-our-pro">
        <div className="wtg-our-pro-left-div">
        <MiniTitle title={"be the one always wanted"}/>
        </div>
        <div className="wtg-our-pro-right-div">
        <img src={wtImg}></img>
        </div>
      </div>
    </div>
  );
}

export default WeightGain;
