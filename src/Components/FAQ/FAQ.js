import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePageFAQ from "./HomePageFAQ";

class FAQ extends Component {
  render() {
    return (
      <div className="faq-page">
        <h1>Im from FAQ</h1>

        <div>
          <HomePageFAQ />
          <div className="home-page-faq-btn-div">
            <Link to="/faq" className="button-primary">
              checkout more
            </Link>
            <Link to="/" className="button-primary">
              Ask Your Question
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
