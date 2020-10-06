import React from "react";
import "./WhyJoinUs.css";
import img1 from "../../Images/im8.jpg";
import Title from '../Title/Title'
import { Component } from "react";

export class WhyJoinCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 150,
      y: 200,
    };
  }

  componentDidMount() {
    this.element = document.getElementById("myDiv");
    this.circRad = 200;
    this.dx = 3;
    this.dy = 3;
    this.drawCirc();
  }

  drawCirc = () => {
    if (
      this.state.x < 0 ||
      this.state.x > this.element.offsetHeight - this.circRad
    ) {
      this.dx = -this.dx;
    }
    if (
      this.state.y < 0 ||
      this.state.y > this.element.offsetWidth - this.circRad
    ) {
      this.dy = -this.dy;
    }

    this.setState({
      x: this.state.x + this.dx,
      y: this.state.y + this.dy
    });
    window.requestAnimationFrame(this.drawCirc);
  };

  render() {
    console.log("im rendering");

    return (
      <div className="wju-main-div" id="myDiv">
        <div
          className="wju-card"
          
          style={{
            top: `${this.state.x}px`,
            left: `${this.state.y}px`,
          }}
        >
          <img src={img1}></img>
          <p>Hey this is text</p>
        </div>
      </div>
    );
  }
}

export default WhyJoinCard;
