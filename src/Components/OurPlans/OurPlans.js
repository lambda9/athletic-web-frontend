import React from "react";
import OurPlanCard from "./OurPlanCard";
import "./OurPlans.css";
import OurPlanData from "./OurPlansData.json";

function OurPlans() {
  return (
    <div className="plans-main-comp">
      <div className="plan-main-comp-text">
        <h2>Our Pricing Plans</h2>
        <p>Start your ftiness journey today with our wide range of Membership Plans</p>
      </div>
      <div className='plan-main-cards-container'>
        {OurPlanData.map((item) => {
          return <OurPlanCard key={item.id} obj={item} />;
        })}
      </div>
    </div>
  );
}

export default OurPlans;
