import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./FreeTrial/FreeTrial.css";

const PRIME_COLOR = "#459fb6";
const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: `0 auto 0.9rem`,
      ["@media (min-width:750px)"]: {
        margin: "0 auto 1.4rem",
      },
      width: "100%",
    },
  },

  inputRoot: {
    "& label.Mui-focused": {
      color: PRIME_COLOR,
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: PRIME_COLOR,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: PRIME_COLOR,
    },
    "& .MuiInputBase-input": {
      padding: "6px 10px 7px",
    },

    "& .MuiInputLabel-formControl": {
      left: "10px",
    },
    ["@media (max-width:750px)"]: {
      "& .MuiFormLabel-root": {
        fontSize: "14px",
      },
    },
    ["@media (min-width:750px)"]: {
      "& .MuiInputLabel-shrink": {
        transform: "translate(0px, 1.5px) scale(0.75)",
      },
    },
  },
});

function Form(props) {
  const { inputDt, handleChange, handleSubmit, handleReset } = props;

  const classes = useStyles();
  return (
      <form className={classes.root} autoComplete="nope">
        {inputDt.map((item) => {
          return (
            <TextField
              key={item.id}
              className={classes.inputRoot}
              required
              autoComplete="nope"
              onChange={handleChange}
              type={item.type}
              name={item.name}
              value={item.value}
              label={item.label}
              multiline={item.type === "textarea" ? true : false}
              rows={3}
            />
          );
        })}

        <div className="home-enquiry-btn-container">
          <button
            onClick={handleSubmit}
            className="button-primary"
            type="submit"
          >
            Submit
          </button>
          <button onClick={handleReset} className="button-primary  cancel-btn">
            reset
          </button>
        </div>
      </form>
  );
}

export default Form;
