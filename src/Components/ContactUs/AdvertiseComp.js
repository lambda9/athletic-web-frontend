import React, { Component } from "react";
import "./AdvertiseComp.css";
import "./RequestCallBackComp.css";
import { Link } from "react-router-dom";
import AdvertiseContent from "./AdvertiseContent";
import ContactUsEntryFields from "./ContactUsEntryFields";
import Title from "../Title/Title";

class AdvertiseComp extends Component {
  render() {
    return (
      <div className="ad-main-comp" id="advertise">
<Title>Reach the right audience</Title>
      <div className="ad-right-msg">With Right Message at Right time</div>

        <AdvertiseContent />
        <div className="cont-rac-form-div">
          <div className="cont-rac-left-div">
            <ContactUsEntryFields />
          </div>

          <div className="cont-rac-right-div">
            <a href="#"> Want to own a Franchise?</a>
            <a href="#rac" onClick={() => this.props.handleState("rac")}>Enquire</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvertiseComp;
