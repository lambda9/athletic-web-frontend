import React, { Component } from "react";
import Title from "../Title/Title";
import WhyJoinCard from "./WhyJoinCard";
import './WhyJoinUs.css'

export class WhyJoinUs extends Component {
  render() {
    return (
      <div>
      <div className="wju-main-div" id="myDiv">

      <WhyJoinCard x={10} y={20}/>
      <WhyJoinCard x={40} y={400}/>
      
      <WhyJoinCard x={70} y={100}/>
      </div>
      </div>

    );
  }
}

export default WhyJoinUs;
