import React, { Component } from "react";
import Hero from '../Hero'
import Banner from '../Banner'
class Membership extends Component {
  render() {
    return (
      <div>
        <Hero tempClass="membership-bg">
          <Banner
            title="Get membership"
            description="Be our member and get complete benefits"
          ></Banner>
        </Hero>
      </div>
    );
  }
}

export default Membership;
