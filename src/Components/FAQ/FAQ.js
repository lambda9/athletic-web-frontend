import React, { Component } from "react";
import "./FAQ.css";
import QuesAns from "./FAQQuesAns";

class FAQ extends Component {

  FAQtype = [
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

  input = "";

  state = {
    searched: "false"
  }


  inputKeyword = (e) => {
    this.input = e.target.value;
  }
  
  searchKeyword = () => {
    let key = this.input;
    let indexArr = 0;
    this.FAQtype.forEach ((item)=> {
      let index = item.keyword.indexOf(key);
      if (index != -1) {
        let temp = this.FAQtype[0];
        this.FAQtype[0] = this.FAQtype[indexArr];
        this.FAQtype[indexArr] = temp;
        console.log(this.FAQtype);
        this.setState (
          {
            searched: "true"
          }
        )
      };
      indexArr++;
    })
    
  }

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
              <input type = "text" placeholder = "Enter keywords to search" onChange = {this.inputKeyword.bind(this)}></input>
              <button id = "faq-search-button" onClick = {this.searchKeyword.bind(this)}> Search </button>
            </div>
          </div>
        </div>
        <div className = "faq-main">
          {
            this.FAQtype.map ( (item) => {
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
