import React, { Component } from "react";
import Title from "../Title/Title";
import WhyJoinCard from "./WhyJoinCard";
import './WhyJoinUs.css'

export class WhyJoinUs extends Component {
  render() {
    return (
      <div className="wju-main-div">
        <Title>Why join us</Title>
        <WhyJoinCard />
      </div>
    );
  }
}

export default WhyJoinUs;
