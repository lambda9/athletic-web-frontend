import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im9.jpg";
import FreeTrialModal from '../FreeTrial/FreeTrialModal'
class ContactUs extends Component {
  render() {
    return (
      <div>
        <Hero
          bgImg={bgImg}
          title="Contact us"
          description="Mail, call, text or meet on-site"
        ></Hero>
        <FreeTrialModal />
      </div>
    );
  }
}

export default ContactUs;
