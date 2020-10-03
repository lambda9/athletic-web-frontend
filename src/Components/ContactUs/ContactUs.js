import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im9.jpg";
import FreeTrial from '../FreeTrial/FreeTrial'
class ContactUs extends Component {
  render() {
    return (
      <div>
        <Hero
          bgImg={bgImg}
          title="Contact us"
          description="Mail, call, text or meet on-site"
        ></Hero>
        <FreeTrial />
      </div>
    );
  }
}

export default ContactUs;
