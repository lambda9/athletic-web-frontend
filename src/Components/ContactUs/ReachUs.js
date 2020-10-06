import React from "react";
import Title from "../Title/Title";
import AddressComp from "./AddressComp";
import "./ContactUs.css";

function ReachUs() {
  return (
    <div className="cont-reach-main-div">
      <Title>Reach to us</Title>

      <div className="cont-reach-text">
        <div>We are always pleased by your presence</div>
      </div>

      <div className="cont-reach-add-map-div">
        <div className="cont-reach-left-div">
          <AddressComp />
        </div>

        <div className="cont-reach-right-div">
          <div>hey bro! I'm google maps component</div>
        </div>
      </div>
    </div>
  );
}

export default ReachUs;
