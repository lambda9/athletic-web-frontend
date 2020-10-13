import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im9.jpg";
import ReachUs from "./ReachUs";
import RequestCallBackComp from "./RequestCallBackComp";
import AdvertiseComp from "./AdvertiseComp";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: "advertise",
    };
  }

  handleState = (value) => {
    this.setState({
      activeState: value
    })
  }

  renderComp = () => {
    if (this.state.activeState === "rac") {
      return <RequestCallBackComp handleState={this.handleState}/>;
    } else if (this.state.activeState === "advertise") {
      return <AdvertiseComp handleState={this.handleState}/>;
    }
  }

  render() {
    return (
      <div>
        <Hero
          bgImg={bgImg}
          title="Contact us"
          description="Mail, call, text or meet on-site"
        ></Hero>

        <ReachUs />
        {this.renderComp()}
      </div>
    );
  }
}

export default ContactUs;
