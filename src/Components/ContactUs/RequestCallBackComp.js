import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactUsEntryFields from "./ContactUsEntryFields";
import "./RequestCallBackComp.css";
import Title from "../Title/Title";
import AdvertiseComp from "./AdvertiseComp";

// git => get in touch
// rac => request a call back

export class RequestCallBackComp extends Component {
  render() {
    return (
      <div className="cont-rac-main-div" id="rac">
        <div className="cont-rac-text-div">
          <Title>Request a call back</Title>
          <span>We are always ready to hear from you</span>
          <br></br>
          <span>
            Fill out this form and we'll reach you within 24 hours on weekdays
            and 48 hours on weekends
          </span>
        </div>

        <div className="cont-rac-form-div">
          <div className="cont-rac-left-div">
            <ContactUsEntryFields />
          </div>

          <div className="cont-rac-right-div">
            <a href='#franchise' onClick={() => this.props.handleState('franchise')}>Want to own a Franchise?</a>
            <a href="#advertise" onClick={() => this.props.handleState('advertise')}>Advertise with us</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestCallBackComp;
