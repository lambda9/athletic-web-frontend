import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SiInstagram, SiFacebook } from "react-icons/all";

export class SocialMedia extends Component {
  render() {
    return (
      <div className="footer-social-media">
        <div className="footer-social-media-cont">
          <Link>
            <SiFacebook />
          </Link>
          <Link>
            <SiInstagram />
          </Link>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
