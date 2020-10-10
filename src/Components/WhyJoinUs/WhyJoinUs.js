import React, { Component } from "react";
import "./WhyJoinUs.css";
import WJUcard from "./WJUcard";
import img1 from "../../Images/im3.jpg";
import img2 from "../../Images/im7.jpg";
import img3 from "../../Images/im15.jpg";
import img4 from "../../Images/im5.jpg";
import img5 from "../../Images/im11.jpg";
import img6 from "../../Images/im8.jpg";
import img7 from "../../Images/im9.jpg";
import img8 from "../../Images/im6.jpg";

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
      element.style.backgroundPositionY = -offset * 0.2 + "px";
      console.log(offset, "offset", offset * 0.9);
    }
  };

  render() {
    return (
      <div className="wju-main-div" id="dd">
        <div className="wju-text-div">
          <span>W H Y</span> <br></br>
          <span>J O I N U S</span>
        </div>

        <div className="wju-below-text-line" />

        <div className="wju-card-div">
          <div className="wju-card-slider">
            <WJUcard />
            <WJUcard />
            <WJUcard />
            <WJUcard />
            <WJUcard />
            <WJUcard />
          </div>
        </div>
      </div>
    );
  }
}

export default WhyJoinUs;
