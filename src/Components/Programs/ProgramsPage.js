import React, { Component } from "react";
import {Link } from 'react-router-dom';
import Hero from "../Hero";
import bgImg from "../../Images/im8.jpg";
import WeightLoss from "./WeightLoss/WeightLoss";
import WeightGain from "./WeightGain/WeightGain";
import ExploreMore from "../ExploreMore/ExploreMore";
import Yoga from "./Yoga";
import ProgramLogoStrip from "./ProgramLogoStrip";
import WTLSlogan from "./WeightLoss/WTLSlogan";
class OurPrograms extends Component {
  exploreLinks = [
    ["/pt", "Personal Training"],
    ["/membership", "Membership"],
  ];

  render() {
    return (
      <div>
        <Hero
          bgImg={bgImg}
          title="Our programs"
          description="keep your energy up and burn calories"
        ></Hero>
        <WeightLoss />
        <Yoga />
        <ProgramLogoStrip />
        <WeightGain />
        <WTLSlogan />
        <ExploreMore linksArr={this.exploreLinks} />
        <div className="pt-still-q">
          <div>Still have question? We can help.</div>
          <Link to="/contactus" style={{ fontSize: "18px" }}>
            Request Callback
          </Link>
        </div>
      </div>
    );
  }
}

export default OurPrograms;
