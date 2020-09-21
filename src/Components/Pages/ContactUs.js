import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import bgImg from '../../Images/im9.jpg'

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Hero bgImg={bgImg}>
          <Banner
            title="Contact us"
            description="Mail, call, text or meet on-site"
          ></Banner>
        </Hero>
      </div>
    );
  }
}

export default ContactUs;
