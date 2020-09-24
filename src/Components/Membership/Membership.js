import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import Title from "../Title/Title";
import IconSlider from "./IconSlider";
import "./Membership.css";
import bgImg from "../../Images/im6.jpg";

class Membership extends Component {
  state = {
    plans: [
      {
        plan_id: "pl_1",
        title: "personal training yearly",
        price: "22,000",
        type: "peak",
        description: [
          "personal training",
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "online nutrition",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "1 year",
      },
      {
        plan_id: "pl_2",
        title: "personal training six months",
        price: "12,000",
        type: "peak",
        description: [
          "personal training",
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "online nutrition",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "6 months",
      },
      {
        plan_id: "pl_3",
        title: "personal training three month",
        price: "6,500",
        type: "peak",
        description: [
          "personal training",
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "online nutrition",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "3 months",
      },
      {
        plan_id: "pl_4",
        title: "personal training monthly",
        price: "2,500",
        type: "peak",
        description: [
          "personal training",
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "online nutrition",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "1 month",
      },
      {
        plan_id: "pl_5",
        title: "regular gym yearly",
        type: "beginner",
        price: "8,000",
        description: [
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "1 year",
      },
      {
        plan_id: "pl_6",
        title: "regular gym six months",
        price: "4,500",
        type: "peak",
        description: [
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "6 months",
      },
      {
        plan_id: "pl_7",
        title: "regular gym three months",
        price: "2,500",
        type: "peak",
        description: [
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "3 months",
      },
      {
        plan_id: "pl_8",
        title: "regular gym one month",
        price: "1,000",
        type: "peak",
        description: [
          "Cardio, Weights & machines",
          "locker rooms with shower",
          "group fitness classes",
          "power half hour circuit training",
          "free t-shirt",
        ],
        duration: "1 month",
      },
    ],
  };

  render() {
    return (
      <div className="membership-page">
        <Hero bgImg={bgImg}>
          <Banner title="get membership" description="get today" />
        </Hero>

        <div className="plan-container">
          <div className="plan-container-center">
          <div className='plan-selectMembership-title'>
          <Title>Select membership plan</Title>
          </div>
            <div className="plan-card-container">
              {this.state.plans.map((plan) => {
                return <IconSlider item={plan} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Membership;
// <Banner title="get membership" description="get today" />
