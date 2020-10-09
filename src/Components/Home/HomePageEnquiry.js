import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

const PRIME_COLOR = "#459fb6";
const useStyles = makeStyles({
  root: {
    "& .MuiTextField-root": {
      margin: `0 auto 1rem`,
      ["@media (min-width:750px)"]: {
        margin: "0 auto 1.4rem",
      },
      width: "100%",
    },
  },

  inputRoot: {
    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      ["@media (min-width:750px)"]: {
        fontSize: "18px",
      },
      "& fieldset": {
        borderColor: PRIME_COLOR,
      },
      "&:hover fieldset": {
        color: PRIME_COLOR,
        borderColor: PRIME_COLOR,
      },
      "&.Mui-focused fieldset": {
        borderColor: PRIME_COLOR,
      },
    },
    "& .MuiOutlinedInput-input ": {
      padding: "12px 10px",
      ["@media (min-width:750px)"]: {
        padding: "18px 14px",
      },
    },

    ["@media (max-width:750px)"]: {
      "& .MuiInputLabel-outlined": {
        transform: "translate(14px, 12px) scale(1)",
      },
      "& .MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.75)",
      },
    },
    ["@media (min-width:750px)"]: {
      "& .MuiInputLabel-outlined": {
        transform: "translate(14px, 20px) scale(1)",
      },
    },
    ["@media (min-width:750px)"]: {
      "& .MuiInputLabel-shrink": {
        transform: "translate(14px, -6px) scale(0.75)",
      },
    },
  },
});

function HomePageEnquiry() {
  const [entryData, setentryData] = useState({});

  const inputDt = [
    {
      id: "id_1",
      type: "text",
      name: "name",
      label: "Name",
      value: entryData.name,
    },
    {
      id: "id_1",
      type: "email",
      name: "email",
      label: "Email",
      value: entryData.email,
    },
    {
      id: "id_1",
      type: "tel",
      name: "phoneNum",
      label: "Phone Number",
      value: entryData.phoneNum,
    },
    {
      id: "id_1",
      type: "text",
      name: "subject",
      label: "Subject",
      value: entryData.subject,
    },
    {
      id: "id_1",
      type: "textarea",
      name: "message",
      label: "Message",
      value: entryData.message,
    },
  ];


  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name, value);
    setentryData({ ...entryData, [name]: value });
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    // console.log(entryData);
  };

  const handleReset = (event) => {
    setentryData({});

    event.preventDefault();
  };

  const classes = useStyles();
  return (
    <div className="custom">
      <div className="div">
        <div className="div2">
          <div className="home-enquiry-left-div">
            <span>I N T E R E S T E D</span>
            <h2>A N Y Q U E R Y ?</h2>
            <p>
              Fill out the form and we will reach you as soon as possible...
            </p>
          </div>
          <div className="home-enquiry-main-div">
            <form className={classes.root} autoComplete="nope">
              {inputDt.map((item) => {
                return (
                  <TextField
                    className={classes.inputRoot}
                    required
                    temp="red"
                    type='text'
                    name={item.name}
                    value={item.value}
                    autoComplete="nope"
                    label={item.label}
                    variant="outlined"
                    multiline={item.type === 'textarea' ? true : false}
                    rows={2}
                    onChange={handleChange}
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
                <button
                  onClick={handleReset}
                  className="button-primary  cancel-btn"
                >
                  reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageEnquiry;
