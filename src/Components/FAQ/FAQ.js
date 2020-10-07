import React, { Component } from "react";
import "./FAQ.css";

class FAQ extends Component {
  
  render() {
    return (
      <div className = "faq-page">
        <div className = "faq-hero">
          <div className = "faq-hero-child1">
            How can we help you ?
          </div>
          <div className = "faq-hero-child2">
            <div className = "faq-hero-text">
              FAQ
            </div>
            <div className = "faq-hero-search">
              <input type = "text" placeholder = "Enter keywords to search"></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
