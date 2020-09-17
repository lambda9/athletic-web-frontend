import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Hero tempClass="aboutUs-bg">
          <Banner title="About us"></Banner>
        </Hero>
      </div>
    );
  }
}

export default AboutUs;
