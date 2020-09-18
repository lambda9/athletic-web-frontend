import React, { Component } from "react";
import img from "../Images/im11.jpg";
import "./IconSlider.css";
import { MdFitnessCenter } from "react-icons/md";

class IconSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  mouseEnter = () => {
    this.setState({
      isActive: true,
    });
  };

  mouseLeave = () => {
    this.setState({
      isActive: false,
    });
  };
  render() {
    return (
      <div
        className="slider-div"
        onMouseOver={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <div
          className={
            this.state.isActive ? "overlay-div active-overlay-div" : "overlay-div"}>
          <div
            className={
              this.state.isActive ? "icon-div active-icon-div" : "icon-div"}>
            <MdFitnessCenter
              className={this.state.isActive ? "icon active-icon" : "icon"} />
          </div>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
        <img src={img}></img>
      </div>
    );
  }
}

export default IconSlider;
