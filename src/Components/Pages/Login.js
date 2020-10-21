import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { css, jsx } from "@emotion/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Login.css";
import {
  RiLoginCircleFill,
  HiOutlineUser,
  HiOutlineLockClosed,
} from "react-icons/all";

/** @jsx jsx */

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > div": {
      display: "flex",
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
              id="input-with-icon-grid"
              label="Username"
              autoFill="nope"
            />
          </div>
          <div>
            <HiOutlineLockClosed className="login-icon" />
            <TextField
              autoFill="nope"
              id="input-with-icon-grid"
              label="Password"
            />
          </div>
          <FormControlLabel
            control={<CustomCheckBox checked={true} name="checkedF" />}
            label="Remember Password"
          />

          <button>Login</button>
          <p>Forgot password ?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
