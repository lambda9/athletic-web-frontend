import React, { useState } from "react";
import OurPlanCard from "./OurPlanCard";
import "./OurPlans.css";
import OurPlanData from "./OurPlansData.json";
import PlanDurationSlider from "./PlanDurationSlider";

function OurPlans() {
  const [duration, setDuration] = useState(3);

  const handleChange = (newValue) => {
    setDuration(newValue);
  };

  const newData = OurPlanData.filter((item) => item.duration === duration);

  return (
    <div className="plans-main-comp">
      <div id="plan-main-comp-tint">
        <div className="plan-main-comp-text">
          <h2>Our Pricing Plans</h2>
          <p>
            Start your ftiness journey today with our wide range of Membership
            Plans
          </p>
        </div>
        <PlanDurationSlider duration={duration} handleDuration={handleChange} />
        <div className="plan-main-cards-container">
          {newData.map((item) => {
            return <OurPlanCard key={item.id} obj={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OurPlans;
