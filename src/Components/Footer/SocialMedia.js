import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  BiPhoneCall,
  SiGooglemaps,
  FaFacebookF,
} from "react-icons/all";

export class SocialMedia extends Component {
  render() {
    return (
      <div className="footer-social-media">
        <div className="footer-social-media-cont">
          <a
            href="https://www.facebook.com/Athletic-Gym-105083634244606"
            target="_blank"
          >
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.instagram.com/theathleticgym/">
            <FaInstagram />
          </a>
          <Link href="/https://www.youtube.com/channel/UCaLrziwKCIUS6PWlwu1Y8Hw/featured">
            <BiPhoneCall />
          </Link>
          <Link to="/">
            <SiGooglemaps />
          </Link>
        </div>
      </div>
    );
  }
}

export default SocialMedia;
