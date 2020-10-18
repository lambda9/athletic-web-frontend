import React from "react";
import img from "../../Images/WeightGain/yoga.png";
import MiniTitle from "../Title/MiniTitle";

function Yoga() {
  return (
    <div className="pro-yoga-main-div">
      <div className="pro-yoga-text-div">
        <div>
          <MiniTitle
            title={"just-you"}
            bottomLineStyle={{
              backgroundColor: "rgb(123,166,181)",
              width: "50px",
            }}
          />
          To stay fit and healthy, all you need is just you, relaxing mind and
          environment. Be a part of yoga program and be proud of our Indian
          culture
        </div>
      </div>
    </div>
  );
}

export default Yoga;
