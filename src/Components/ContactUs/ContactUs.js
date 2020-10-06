import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im9.jpg";
import AddressComp from "./AddressComp";
import ReachUs from "./ReachUs";
import GetInTouchComp from "./GetInTouchComp";

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
        <GetInTouchComp />

      </div>
    );
  }
}

export default ContactUs;
