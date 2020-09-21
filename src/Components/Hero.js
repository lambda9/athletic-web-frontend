import React from "react";
import { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mHeight: 80,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    console.log(this.state.mHeight, "component");
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth <= 550) {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
        mHeight: 50,
      });
      return;
    }

    this.setState({
      width: window.innerWidth,
        height: window.innerHeight,
        mHeight: 75,
    })
    console.log(this.state.width, this.state.height, this.state.mHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          backgroundImage: `url(${this.props.bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: `calc(${this.state.mHeight}vh - 66px)`,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "lavender",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Hero;

