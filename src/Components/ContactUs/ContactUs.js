import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im9.jpg";
import ReachUs from "./ReachUs";
import RequestCallBackComp from './RequestCallBackComp';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Hero
          bgImg={bgImg}
          title="Contact us"
          description="Mail, call, text or meet on-site"
        ></Hero>
      
        <ReachUs />
        <RequestCallBackComp />

      </div>
    );
  }
}

export default ContactUs;
