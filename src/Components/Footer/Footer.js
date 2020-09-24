import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "./SocialMedia";
import GetApp from "./GetApp";

class Footer extends Component {
  links = [
    ["/h", "home"],
    ["programs", "programs"],
    ["membership", "membership"],
    ["gallery", "gallery"],
    ["aboutUs", "about us"],
    ["contactUs", "contact us"],
  ];

  timmings = [
    ["monday", "8 A.M. - 10 P.M."],
    ["Tuesday", "8 A.M. - 10 P.M."],
    ["wednesday", "8 A.M. - 10 P.M."],
    ["thursday", "8 A.M. - 10 P.M."],
    ["friday", "8 A.M. - 10 P.M."],
    ["saturday", "8 A.M. - 10 P.M."],
    ["sunday", "8 A.M. - 10 P.M."],
  ];

  render() {
    return (
      <div className="footer-comp">
        <div className="footer-bg">
          <div className="footer-link-timmings">
            <div className="footer-quick-links-div">
              <div className="footer-quick-links-cont">
                Quick Links
                {this.links.map((item) => {
                  return (
                    <Link to={`${item[0]}`} className="aa">
                      {item[1]}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="footer-timmings-div">
              <div className="footer-timmings-cont">
                Timmings
                {this.timmings.map((item) => {
                  return (
                    <p>
                      {item[0]}: {item[1]}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="footer-buttons-right">
              <div className="footer-social-div">
                <SocialMedia />
              </div>
              <div className="footer-get-app-div">
                <GetApp />
              </div>
            </div>
          </div>
          <div className="footer-buttons">
            <div className="footer-social-div">
              <SocialMedia />
            </div>
            <div className="footer-get-app-div">
              <GetApp />
            </div>
          </div>
          <div className="footer-copyright">
            <div>
              <FaCopyright /> Athletic gym and fitness center
            </div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
