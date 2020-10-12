import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SiInstagram, BiPhoneCall, SiGooglemaps, FaFacebook } from "react-icons/all";

export class SocialMedia extends Component {
  
  render() {

    return (

      <div className="footer-social-media">
        <div className="footer-social-media-cont">
          <Link to='/'>
            <FaFacebook />
          </Link>
          <Link to='/'>
            <SiInstagram />
          </Link>
          <Link to='/'>
            <BiPhoneCall />
          </Link>
          <Link to='/'>
            <SiGooglemaps />
          </Link>
        </div>
      </div>

    );

  }

}

export default SocialMedia;
