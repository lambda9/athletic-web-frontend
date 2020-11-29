import React, { Component, useState } from "react";
import LoginFields from "./LoginFields";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "../Footer/SocialMedia";
import GetApp from "../Footer/GetApp";
import axios from "axios";
import UserContext, { UserConsumer } from "../GlobalComponents/UserContext";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginFields />
        <div>
          {this.context.loginDt.user ? <h1>Logged In</h1> : <h1>No user</h1>}
        </div>
        <div className="login-page-footer">
          <div>
            <FaCopyright /> Athletic gym and fitness center
          </div>

          <div className="footer-child-content">
            <SocialMedia />
          </div>
          <div className="footer-child-content">
            <GetApp />
          </div>
        </div>
      </div>
    );
  }
}

Login.contextType = UserContext;

export default Login;
