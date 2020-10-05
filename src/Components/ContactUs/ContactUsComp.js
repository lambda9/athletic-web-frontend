import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactUsEntryFields from "./ContactUsEntryFields";
import "./ContactUsComp.css";
import Title from "../Title/Title";
export class ContactUsComp extends Component {
  render() {
    return (
      <div className="cont-comp-main-div">
        <div className="cont-comp-form-text-div">
          <Title>get in touch</Title>
          <span>We are always ready to hear from you</span>
          <br></br>
          <span>
            Fill out this form and we'll reach you within 24 hours on weekdays and 48
            hours on weekends
          </span>
        </div>

        <div className="cont-comp-form-type-div">
          <div className="cont-comp-left-div">
            <ContactUsEntryFields />
          </div>

          <div className="cont-comp-right-div">
            <Link to="/franchise"> Want to own a Franchise?</Link>
            <Link>Advertise with us</Link>
            <Link>Other Business Related queries</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsComp;
