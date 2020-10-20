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
      <div className="wju-main-div" >
        <div className="wju-text-div">
          <span>WHY JOIN US ?</span>
        </div>
        <div className="wju-card-div">
          <div className="wju-card-slider">
            {data.map((value) => {
              return (
                <WJUcard
                  key={value.id}
                  heading={value.heading}
                  content={value.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default WhyJoinUs;
