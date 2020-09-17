import React, { Component } from "react";
import "./Banner.css";
import img1 from "../Images/im1.jpg";
import Title from "./Title/Title";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
class Hero extends Component {
  render() {
    return (
      <div className="banner">
        <Title>{this.props.title}</Title>
        <p>{this.props.description}</p>
        <Link to="/h" className="button-primary">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default Hero;
