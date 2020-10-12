import React, { Component } from "react";
import "./Footer.css";
import Quicklinks from "./QuickLinks";
import Footerhead from "./FooterHeads";
import Newsletter from "./Newsletter";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "./SocialMedia";
import GetApp from "./GetApp";

class Footer extends Component {

   links1 = [
    ["/", "Home"],
    ["gallery", "Gallery"],
    ["programs", "Programs"],
    ["membership", "Membership"],
    ["aboutUs", "About us"]
  ];

  links2 = [
    ["faq", "FAQ"],
    ['blog', 'Blog'],
    ["news","Latest News"],
    ["contactUs", "Contact Us"],
    ['advertise', "Advertise with us"]
  ];

  render () {

    return (
      
      <div className = "footer-component">
        <div className = "footer-text">
          WORK HARD . PLAY HARD
        </div>
        <div className = "footer-main">
          <div className = "footer-child">
            <Footerhead head = "Stay connected" />
            <div className = "footer-child-content">
              <SocialMedia />
            </div>
          </div>
          <div className = "footer-child">
            <Footerhead head = "Quick links" />
            <div className = "footer-child-content">
              <div className = "footer-link-group">
                <Quicklinks group = {this.links1} />
                <Quicklinks group = {this.links2} />
              </div>
            </div>
          </div>
          <div className = "footer-child">
            <Footerhead head = "Newsletter" />
            <div className = "footer-child-content">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default Footer;