import React, { useEffect } from "react";
import "./WeightGain.css";
import wtImg from "../../../Images/WeightGain/bg13.png";
import MiniTitle from "../../Title/MiniTitle";
import Process from "./Process";
import HeadDescBorderCard from "../../CardGroup/HeadDescBorderCard";

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

      <div className="wtg-step-ahead">
        <div>Let's move a </div> 
        <div>STEP</div>
        <div>AHEAD</div>
      </div>
      <div className="wtg-muscle-gain-div">
        <div className="wtg-muscle-head-text">
          <MiniTitle
            title={"muscle gain"}
            bottomLineStyle={{ backgroundColor: "rgb(148,235,192)" }}
          />
          <p>
            We always push ourselves one step ahead. And now here we are, Our
            rigorous training program have always been one the best to gain
            muscles to be a part of something bigger "To be a Athlete".
          </p>
        </div>
        <div className="wtg-muscle-card-cont">
          <HeadDescBorderCard
            heading={"diet plan"}
            description={
              "As per the need our trainers provide you best diet plan to achieve your goal in a proper way"
            }
            styleClass="styleClass"
            styleProp={{
              width: "240px",
              minHeight: "140px",
              padding: "1rem 1rem",
            }}
          />
          <HeadDescBorderCard
            heading={"gear"}
            description={
              "From basic dumbell to heavy weights we got you covered. There is only your dedication we need to achieve your goal"
            }
            styleClass="styleClass"
            styleProp={{
              width: "240px",
              minHeight: "140px",
              padding: "1rem 0.5rem",
            }}
          />
          <HeadDescBorderCard
            heading={"personal trainer"}
            description={
              "Our trainers are one the finest trainers that you can get. Their experience and methods helped already thousands of athletes"
            }
            styleClass="styleClass"
            styleProp={{
              width: "240px",
              minHeight: "140px",
              padding: "1rem 0.5rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default WeightGain;
