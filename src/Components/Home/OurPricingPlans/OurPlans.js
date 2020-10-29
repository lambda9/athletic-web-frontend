import React, { useState, useEffect } from "react";
import Slider from "../../GlobalComponents/Slider/Slider";
import OurPlanCard from "./OurPlanCard";
import "./OurPlans.css";
import axios from "axios";
import PlanDurationSlider from "./PlanDurationSlider";

function OurPlans() {
  const [duration, setDuration] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [plansData, setPlansData] = useState([]);
  const handleChange = (newValue) => {
    setDuration(newValue);
  };

  const fetchData = () => {
    axios
      .get("http://127.0.0.1:8000/list/")
      .then((res) => {
        setPlansData(res.data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(false);
        setError(err);
        console.log(err, "geting error");
      });
  };

  useEffect(() => fetchData(), []);

  const newData = plansData.filter((item) => item.duration == duration);

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
        <Slider width={80} smallScreen={1} mediumScreen={2} largeScreen={3}>
          {newData.map((item) => {
            return <OurPlanCard key={item.id} obj={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default OurPlans;
