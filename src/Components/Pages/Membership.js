import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import Title from "../Title/Title";
import IconSlider from "../IconSlider";
import "./Membership.css";

class Membership extends Component {
  state = {
    plans: [
      {
        plan_id: 1,
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
        plan_id: 2,
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
        plan_id: 3,
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
        plan_id: 4,
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
        plan_id: 5,
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
        plan_id: 6,
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
        plan_id: 7,
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
        plan_id: 8,
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
      <div>
        <Hero tempClass="membership-bg">
          <Banner
            title="Get membership"
            description="Be our member and get complete benefits"
          ></Banner>
        </Hero>

        <div className="plan-container">
          <div className="plan-container-center">
            <Title>Select membership plan</Title>
            <div className="plan-card-container">
              {this.state.plans.map((plan) => {
                return (
                  <IconSlider
                    type={plan.type}
                    title={plan.title}
                    price={plan.price}
                    duration={plan.duration}
                    description={plan.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Membership;
