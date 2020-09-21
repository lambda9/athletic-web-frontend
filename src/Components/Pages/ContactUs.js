import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Hero tempClass="contactUs-bg">
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
