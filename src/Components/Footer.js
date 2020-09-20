import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
        <div className=''>
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
        </div>

          <div className='footer-social-div'>Hey babes</div>
        </div>
      </div>
    );
  }
}

export default Footer;
