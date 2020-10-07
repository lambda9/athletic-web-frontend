import React, { Component } from "react";
import "./FAQ.css";
import QuesAns from "./FAQQuesAns";

class FAQ extends Component {
  
  render() {
    const FAQtype = ["type1","type2","type3"];
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
        <div className = "faq-main">
          {
            FAQtype.map ( (item) => {
              return (
                <QuesAns type={item}></QuesAns>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default FAQ;
