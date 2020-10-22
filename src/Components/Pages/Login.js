import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { css, jsx } from "@emotion/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import "./Login.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  RiLoginCircleFill,
  HiOutlineUser,
  HiOutlineLockClosed,
} from "react-icons/all";
import { Input } from "@material-ui/core";

/** @jsx jsx */

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > div": {
      display: "flex",
      color: "white",
    },
    "& .MuiTextField-root": {
      width: "80%",
      margin: "0.5rem auto",
      marginLeft: "5px",

      ["@media (min-width:750px)"]: {},
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "rgb(255, 255, 255, 0.5)",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "rgb(255, 255, 255, 0.9)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },

    "& .MuiInputLabel-root": {
      color: "white",
    },

    "& .MuiTypography-body1": {
      color: "white",
    },

    "& .MuiFormControlLabel-root": {
      marginTop: "10px",
      marginLeft: "-5px",
    },
  },
});

const CustomCheckBox = withStyles({
  root: {
    color: "rgb(255, 255, 255, 0.9)",
    "& $checked": {
      color: "rgb(255, 255, 255, 0.8)",
    },
  },
})((props) => <Checkbox color="default" {...props} />);

function Login() {
  const classes = useStyles();

  const [loginDt, setLoginDt] = useState({
    userName: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value =
      name == "rememberMe" ? event.target.checked : event.target.value;

    setLoginDt({ ...loginDt, [name]: value });
  };

  return (
    <div className="login-page">
      <div className="login-entry-form">
        <RiLoginCircleFill className="login-icon1" />
        <h2>LOG IN</h2>

        <form className={classes.root}>
          <div>
            <HiOutlineUser className="login-icon" />
            <TextField
              className={classes.root}
              label="Username"
              name="userName"
              value={loginDt.userName}
              onChange={handleChange}
              autoFill="nope"
            />
          </div>
          <div>
            <HiOutlineLockClosed className="login-icon" />
            <TextField
              autoFill="nope"
              type={loginDt.showPassword ? "text" : "password"}
              name="password"
              label="Password"
              value={loginDt.value}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{ color: "white" }}
                      aria-label="toggle password visibility"
                      name="showPassword"
                      onClick={() => {
                        setLoginDt({
                          ...loginDt,
                          ["showPassword"]: !loginDt.showPassword,
                        });
                      }}
                      onMouseDown={(event) => {
                        event.preventDefault();
                      }}
                    >
                      {loginDt.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <FormControlLabel
            control={
              <CustomCheckBox
                checked={loginDt.rememberMe}
                name="rememberMe"
                onChange={handleChange}
              />
            }
            label="Remember Password"
          />

          <button className="login-entry-for-button">Login</button>
          <p>Forgot password ?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
