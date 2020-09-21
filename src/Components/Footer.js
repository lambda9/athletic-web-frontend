import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  SiInstagram,
  SiFacebook,
  FaGooglePlay,
  FaApple,
  FaCopyright,
} from "react-icons/all";

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
          <div className="footer-divs-container">
            <div className="footer-left-div">
              Quick Links
              {this.links.map((item) => {
                return (
                  <Link to={`${item[0]}`} className="aa">
                    {item[1]}
                  </Link>
                );
              })}
            </div>
            <div className="footer-right-div">
              Timmings
              {this.timmings.map((item) => {
                return (
                  <p>
                    {item[0]}: {item[1]}
                  </p>
                );
              })}
            </div>
            <div className="footer-get-app-div"></div>
          </div>
          <div className='footer-social-buttons-container'>
            <div className="footer-social-media">
              <Link>
                <SiFacebook />
              </Link>
              <Link>
                <SiInstagram />
              </Link>
            </div>
            <div className="footer-get-app-bottom">
              <div>Get app on</div>
              <Link>
                <FaGooglePlay />
              </Link>
              <Link>
                <FaApple />{" "}
              </Link>
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
