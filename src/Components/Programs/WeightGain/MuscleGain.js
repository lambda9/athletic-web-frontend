import React from "react";
import MiniTitle from "../../Title/MiniTitle";
import HeadDescBorderCard from "../../CardGroup/HeadDescBorderCard";
import "./WeightGain.css";

function MuscleGain() {
  const muscleGainDt = [
    {
      id: 0,
      heading: "diet plan",
      description:
        "As per the need our trainers provide you best diet plan to achieve your goal in a proper way",
    },
    {
      id: 1,
      heading: "gear",
      description:
        "From basic dumbell to heavy weights we got you covered. There is only your dedication we need to achieve your goal",
    },
    {
      id: 2,
      heading: "personal trainer",
      description:
        "Our trainers are one the finest trainers that you can get. Their experience and methods helped already thousands of athletes",
    },
  ];

  return (
    <div className="wtg-muscle-gain-div">
      <div
        className="wtg-muscle-head-text"
        data-aos="fade-up"
        data-aos-duration="800"
      >
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
        {muscleGainDt.map((item) => {
          return (
            <HeadDescBorderCard
              id={item.id}
              dataAos="fade-up"
              heading={item.heading}
              description={item.description}
              styleClass="styleClass"
              styleProp={{
                width: "240px",
                minHeight: "140px",
                padding: "1rem 1rem",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MuscleGain;
