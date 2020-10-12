import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "./SocialMedia";
import GetApp from "./GetApp";

class Footer extends Component {
  links = [
    ["/", "home"],
    ["programs", "programs"],
    ["membership", "membership"],
    ["gallery", "gallery"],
    ["aboutUs", "about us"],
    ["contactUs", "contact us"],
    ["faq", "FAQ"],
    ["news","Latest News"],
    ['blog', 'Blog'],
    ['advertise', "Advertise With Us"]
  ];

  timmings = [
    ["Week Days", "8 A.M. - 10 P.M."],
    ["Weekends", "8 A.M. - 10 P.M."],
  ];

  render() {
    return (
      <div className="footer-comp">
        <div className="footer-bg">
          <div className="footer-link-timmings">
            <div className="footer-quick-links-div">
              <div className="footer-quick-links-cont">
                <span>Quick Links</span>
                {this.links.map((item) => {
                  return <Link to={`${item[0]}`} key={item[0]}>{item[1]}</Link>;
                })}
              </div>
            </div>
            <div className="footer-timmings-div">
              <div className="footer-timmings-cont">
                <span>Timings</span>
                <br />

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
              <GetApp />
            </div>
          </div>
          <div className="footer-buttons">
            <SocialMedia />
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
