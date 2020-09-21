import React from "react";
import { Component } from "react";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mHeight: 75,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  bannerBg = {
    display: "flex",
    backgroundImage: `url(${this.props.bgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    minHeight: `calc(55vh - 66px)`,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lavender",
  };

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
        mHeight: 55,
      });
    }
    console.log(this.state.width, this.state.height, this.state.mHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return <div style={this.bannerBg}>{this.props.children}</div>;
  }
}

export default Hero;

// function Hero(props) {
// let bannerBg = {
//   display: "flex",
//   backgroundImage: `url(${props.bgImg})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   minHeight: "calc(75vh - 60px)",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "lavender",
// }
//   return <div style={bannerBg}>{props.children}</div>;
// }
// export default Hero;
