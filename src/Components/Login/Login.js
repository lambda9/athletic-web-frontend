import React, { useState } from "react";
import LoginFields from "./LoginFields";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "../Footer/SocialMedia";
import GetApp from "../Footer/GetApp";
import axios from "axios";


function Login() {
  const [loginDt, setLoginDt] = useState({
    userName: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = name == "rememberMe" ? event.target.checked : event.target.value;

    setLoginDt({ ...loginDt, [name]: value });
  };

  const handleShowPassword = (event) => {
    setLoginDt({
      ...loginDt,
      ["showPassword"]: !loginDt.showPassword,
    });
  };

  const handleLogin = (event) => {
    console.log("Hey login Data", loginDt)

    let item = {
      email: loginDt.userName,
      password: loginDt.password,
    }
    axios.post("http://127.0.0.1:8000/memberapi/user/", item)
    .then(res => console.log(res, "Response"))
    .catch(err => console.log(err, "error in posting"))  }

  return (
    <div>
      <LoginFields
        loginDt={loginDt}
        handleChange={handleChange}
        handleShowPassword={handleShowPassword}
        handleLogin={handleLogin}
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

export default Login;
