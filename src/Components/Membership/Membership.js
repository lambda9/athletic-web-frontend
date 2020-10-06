import React, { Component } from "react";
import Hero from "../Hero";
import Title from "../Title/Title";
import IconSlider from "./IconSlider";
import "./Membership.css";
import bgImg from "../../Images/im6.jpg";
import MembershipBG from "./MembershipBG";

class Membership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [
        {
          plan_id: "pl_1",
          title: "personal training yearly",
          price: 22000,
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
          price: 12000,
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
          price: 6500,
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
          price: 2500,
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
          price: 8000,
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
          price: 4500,
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
          price: 2500,
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
          price: 1000,
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
  }

  render() {
    return (
      <div className="membership-page">
        <Hero bgImg={bgImg} title="get membership" description="get today" />

        <div className="plan-bg-container">
          <MembershipBG />
        </div>
        
        <div className="plan-container-center">
          <div className="plan-selectMembership-title">
            <Title>Select membership plan</Title>
          </div>

          <div className="plan-card-container">
            {this.state.plans.map((plan) => {
              return <IconSlider item={plan} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Membership;
