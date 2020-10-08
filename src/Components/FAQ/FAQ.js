import React, { Component } from "react";
import "./FAQ.css";
import QuesAns from "./FAQQuesAns";

class FAQ extends Component {

  state = {
    inputValue: " "
  }
  
  render() {
    const FAQtype = [
      {
        type: "type1",
        keyword: ["type1", "type1ques"]
      },
      {
        type: "type2",
        keyword: ["type2", "type2ques"]
      },
      {
        type: "type3",
        keyword: ["type3", "type3ques"]
      },
    ];
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
              <input type = "text" placeholder = "Enter keywords to search" ></input>
              <button id = "faq-search-button"> Search </button>
            </div>
          </div>
        </div>
        <div className = "faq-main">
          {
            FAQtype.map ( (item) => {
              return (
                <QuesAns type={item.type}></QuesAns>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default FAQ;
