import React from "react";
import "./WhyJoinUs.css";
import img1 from "../../Images/im8.jpg";
import Title from "../Title/Title";
import { Component } from "react";

export class WhyJoinCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: this.props.x,
      y: this.props.y,
    };
  }

  componentDidMount() {
    // this.element = document.getElementById("myDiv");
    this.circRad = 200;
    this.dx = 1;
    this.dy = 1;
    this.drawCirc();
  }

  componentDidUpdate() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    var tempWidth = window.innerWidth;
    var tempHeight = window.innerHeight;

    if (this.x > tempWidth) {
      this.setState({
        x: tempWidth,
      });
    }

    if (this.y > tempHeight) {
      this.setState({
        y: tempHeight,
      });
    }
  };

  drawCirc = () => {
    // if (
    //   this.state.x < 0 ||
    //   this.state.x > this.element.offsetWidth - this.circRad
    // ) {
    //   this.dx = -this.dx;
    // }
    if (
      this.state.y < 0 ||
      this.state.y > 600 - this.circRad
    ) {
      this.dy = -this.dy;
    }

    this.setState({
      //   x: this.state.x + this.dx,
      y: this.state.y + this.dy,
    });
    window.requestAnimationFrame(this.drawCirc);
  };

  render() {
    return (
        <div
          className="wju-card"
          style={{
            top: `${this.state.y}px`,
            left: `${this.state.x}px`,
          }}
        >
          <img src={img1}></img>
          <p>Hey this is text</p>
        </div>
    );
  }
}

export default WhyJoinCard;
