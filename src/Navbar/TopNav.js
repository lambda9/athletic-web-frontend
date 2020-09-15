import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarCSS.css";
import { Button } from "reactstrap";
import logo from "./logo.png";

class TopNav extends Component {
  render() {
    return (
      <div className='nav-main'>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo}></img>
          </Link>
        </div>
        
        <nav className="navbar">
        
          <div className="nav-toggle-btn" onClick={this.props.toggleFun}>
            <div
              class={this.props.sideNavState ? "bar1 change1" : "bar1"}
            ></div>
            <div
              class={this.props.sideNavState ? "bar2 change2" : "bar2"}
            ></div>
            <div
              class={this.props.sideNavState ? "bar3 change3" : "bar3"}
            ></div>
          </div>

          <div className="nav-links-container">
            <Link href="/">Home</Link>
            <Link href="/">Programs</Link>
            <Link href="/">Membership</Link>
            <Link href="/">Blogs</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>

            <div className="nav-links-container-btn">
              <button>Free Trial</button>
              <button>Login</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default TopNav;
