import React from "react";
import IconHeadDescCard from "../../CardGroup/IconHeadDescCard";
import "./WeightGain.css";
import weightIcon from "../../../Images/WeightGain/weightIcon.png";
import strategyIcon from "../../../Images/WeightGain/strategyIcon.png";
import supplementIcon from "../../../Images/WeightGain/supplementIcon.png";
import MiniTitle from "../../Title/MiniTitle";

function Process() {
  return (
    <div className="wtg-process">
      <MiniTitle title={"p r o c e s s"}  />
      <div className="wtg-process-card-cont">
        <IconHeadDescCard
          icon={supplementIcon}
          heading={"protein"}
          description={
            "Calculated calorie and protein diet is necessary for desired outputs"
          }
        />
        <IconHeadDescCard
          icon={strategyIcon}
          heading={"strategy"}
          description={
            "Build with a lot of research and experience. A plan which is necesssary from diet to training"
          }
        />
        <IconHeadDescCard
          icon={weightIcon}
          heading={"workout"}
          description={
            "Do proper excercise in the guidance of our trainers and shape your body"
          }
        />
      </div>
    </div>
  );
}

export default Process;
