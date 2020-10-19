import React from "react";
import "./ContactUs.css";
import { SiGooglemaps, RiPhoneFill, MdMail, CgEye } from "react-icons/all";
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

        <div className="add-comp-rest-add-phone">
          <div>
            <RiPhoneFill /> 1234567
          </div>
          <div>
            <MdMail /> abc@ahtleticgym.com
          </div>
          <div>
            <CgEye /> Explore Gym
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComp;
