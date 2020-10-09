import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

const PRIME_COLOR = "#459fb6";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: `0 auto ${1.2}rem`,
      width: "100%",
    },
  },

  inputRoot: (props) => ({
    "& .MuiOutlinedInput-root": {
      fontSize: "14px",
      "& fieldset": {
        borderColor: props.temp,
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
      padding: "12px 16px",
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 12px) scale(1)",
      // backgroundColor: 'red',
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
      // backgroundColor: 'green',
    },
  }),
}));

function HomePageEnquiry() {
  const [entryData, setentryData] = useState({});

  const inputDt = [
    {
      id: "id_1",
      type: "text",
      name: "name",
      label: "label",
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
                    temp={"red"}
                    type={item.type}
                    name={item.name}
                    value={item.value}
                    autoComplete="nope"
                    label={item.label}
                    variant="outlined"
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
