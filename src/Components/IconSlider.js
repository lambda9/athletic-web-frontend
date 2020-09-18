import React, { Component } from "react";
import img from "../Images/im11.jpg";
import {} from 'react-icons/fa'
import "./IconSlider.css";
import { MdFitnessCenter } from "react-icons/md";
import {Link} from 'react-router-dom'
import Title from "./Title/Title";

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
          <h4>Benefits</h4>
          <p> {
            this.props.description.map(plan => {
              return (
              <div>{plan}</div>
            )
          })
          }
          </p>
          <Link to='/' className='button-primary'>Buy now</Link>
        </div>
        <div className='slider-card-content'>
              <p>{this.props.type}</p>
              <Title >{this.props.title}</Title>
              <h1>&#8377; {this.props.price}</h1>
              <h3>for {this.props.duration}</h3>
        </div>
        
      </div>
    );
  }
}

export default IconSlider;
