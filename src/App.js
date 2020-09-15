import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel1 from "./Homepage/Carousel1";
import NavMain from "./Navbar/NavMain";
import ServicesLogo from "./Services/ServicesLogo";

class App extends Component {
  render() {
    return (
      <Router>
        <NavMain />
        <ServicesLogo />
      </Router>
    );
  }
}

export default App;
