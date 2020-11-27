import React, { Component, useState } from "react";
import LoginFields from "./LoginFields";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "../Footer/SocialMedia";
import GetApp from "../Footer/GetApp";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      rememberMe: false,
      showPassword: false,
    };
  }

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        rememberMe: true,
        email: localStorage.username,
        password: localStorage.password,
      });
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value =
      name == "rememberMe" ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleShowPassword = (event) => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleLogin = (event) => {
    console.log("Hey login Data", this.state);
    const { username, password, rememberMe } = this.state;
    if (rememberMe && username !== "") {
      localStorage.username = username;
      localStorage.password = password;
      localStorage.checkbox = rememberMe;
    }
    let item = {
      email: username,
      password: password,
    };
    axios
      .post("http://127.0.0.1:8000/memberapi/user/", item)
      .then((res) => console.log(res, "Response"))
      .catch((err) => console.log(err, "error in posting"));
  };

  render() {
    return (
      <div>
        <LoginFields
          loginDt={this.state}
          handleChange={this.handleChange}
          handleShowPassword={this.handleShowPassword}
          handleLogin={this.handleLogin}
        />

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

export default Login;
