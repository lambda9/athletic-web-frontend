import React from "react";
import "./ContactUs.css";
import { SiGooglemaps } from "react-icons/all";
import Title from "../Title/Title";
// add => address

function AddressComp() {
  return (
    <div className="cont-add-comp-div">
      <h1>Head Office and Gym</h1>
      <span>
        <SiGooglemaps className="add-comp-icon" />
        <div>Near S.R. School</div>
      </span>
      <div className="add-comp-rest-add">
        <div>Meera Nagar, Jhalamand Circle</div>
        <div>Jodhpur, Rajasthan</div>
        <div>India, PIN: 203205</div>

        <div className="add-comp-rest-add-phone">Phone: 1234567</div>
      </div>
    </div>
  );
}

export default AddressComp;
