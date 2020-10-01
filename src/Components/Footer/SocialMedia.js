import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SiInstagram, SiFacebook, BiPhoneCall, SiGooglemaps, FaFacebook } from "react-icons/all";

export class SocialMedia extends Component {
  render() {
    return (
      <div className="footer-social-media">
        <div className="footer-social-media-cont">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <SiInstagram />
          </Link>
          <Link>
            <BiPhoneCall />
          </Link>
          <Link>
            <SiGooglemaps />
          </Link>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
