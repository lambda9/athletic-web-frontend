import React, { useEffect } from "react";
import "./WeightGain.css";
import wtImg from "../../../Images/WeightGain/bg13.png";
import MiniTitle from "../../Title/MiniTitle";
import Process from "./Process";

// wtg = weight gain

function WeightGain() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    var offset = window.pageYOffset;
    var element = document.getElementById("parallex-child");
    // if (element) {
    //     element.style.backgroundPositionY = -offset * 1 + "px";
    // }
  };

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
      <div className="wtg-our-tech-cards">
        <div className="wtg-our-tech-cards-cont"></div>
      </div>

     
    </div>
  );
}

export default WeightGain;

// <div className="wtg-step-ahead">
// <div>Let's move a step </div>
// <div> Ahead</div>
// </div>