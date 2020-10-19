import React from "react";
import "./Covid.css";
import i1 from "../../Images/Programs/i1.png";
import i2 from "../../Images/Programs/i2.png";
import i3 from "../../Images/Programs/i3.png";
import i4 from "../../Images/Programs/i4.png";
import CovidCard from "./CovidCard";

function Covid() {
  const card = [
    {
      img: i1,
      desc: "Do not forget to wear a mask",
    },
    {
      img: i2,
      desc: "Wash your hands frequently",
    },
    {
      img: i3,
      desc: "Bring your essentials with you",
    },
    {
      img: i4,
      desc: "Stay at home if you are sick",
    },
  ];
  return (
    <div className="covid">
      <h1>Your safety is our priority</h1>
      <p className="covid-desc">
        During these difficult times of the pandemic, we continue to be at your
        service. But here are a few measures that we expect all our members to
        follow.
      </p>
      <div className="covid-grid">
        {card.map((items, index) => {
          return <CovidCard key={index} img={items.img} desc={items.desc} />;
        })}
      </div>
    </div>
  );
}

export default Covid;
