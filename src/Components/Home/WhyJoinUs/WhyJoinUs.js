import React, { Component } from "react";
import "./WhyJoinUs.css";
import WJUcard from "./WJUcard";
import data from "./data.json";

export class WhyJoinUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 1,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var offset = window.pageYOffset;
    var element = document.getElementById("dd");
    if (element) {
      element.style.backgroundPositionY = -offset * 0.3 + "px";
    }
  };

  render() {
    return (
      <div className="wju-main-div">
        <div className="wju-text-div">
		  <span>WHY</span>
          <span>JOIN</span>
          <span>US ?</span>
		  
        </div>
        <div>
          <div className="wju-card-div" style={{paddingBottom: "0"}}>
            {data.map((value) => {
              return value.id % 2 === 0 ? (
                <WJUcard
                  key={value.id}
                  heading={value.heading}
                  content={value.content}
                />
              ) : null;
            })}
          </div>
          <div className="wju-card-div" style={{paddingTop: "0"}}>
            {data.map((value) => {
              return value.id % 2 === 1 ? (
                <WJUcard
                  key={value.id}
                  heading={value.heading}
                  content={value.content}
                />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default WhyJoinUs;
