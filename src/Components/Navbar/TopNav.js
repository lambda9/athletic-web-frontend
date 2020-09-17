import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";

class TopNav extends Component {
  render() {
    return (
      <div className="nav-main">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt={"logo"}></img>
          </Link>
        </div>

        <nav className="navbar">
          <div className="nav-toggle-btn" onClick={this.props.toggleFun}>
            <div
              className={this.props.sideNavState ? "bar1 change1" : "bar1"}
            ></div>
            <div
              className={this.props.sideNavState ? "bar2 change2" : "bar2"}
            ></div>
            <div
              className={this.props.sideNavState ? "bar3 change3" : "bar3"}
            ></div>
          </div>

          <div className="nav-links-container">
            <Link to="/">Home</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/membership">Membership</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/contactUs">Contact Us</Link>

            <div className="nav-links-container-btn">
              <button href="/">Free Trial</button>
              <button href="/">Login</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNav;
