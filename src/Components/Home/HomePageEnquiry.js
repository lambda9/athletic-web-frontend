import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

const PRIME_COLOR = "#459fb6";

function HomePageEnquiry() {
  const [entryData, setentryData] = useState({
 
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: `0 auto ${1.2}rem`,
        width: "100%",
      },
    },
  }));

  const CssTextField = withStyles({
    root: {
      "& .MuiOutlinedInput-root": {
        fontSize: "14px",
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
    },
  })(TextField);

  const handleResize = () => {
    var width = window.innerWidth();

    return;
  };

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name, value);
    setentryData({...entryData, name: value})
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    console.log(entryData);
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
              <CssTextField
                required
                type="text"
                name="name"
                value={entryData.name}
                autoComplete="nope"
                label="Name"
                variant="outlined"
                onChange={(e) => handleChange}
              />
              <CssTextField
                required
                type="email"
                value={entryData.email}
                name="email"
                autoComplete="nope"
                label="E-mail"
                variant="outlined"
                onChange={(e) => handleChange}
              />
              <CssTextField
                required
                value={entryData.phoneNum}
                type="tel"
                autoComplete="nope"
                name="phoneNum"
                label="Phone Number"
                variant="outlined"
                onChange={(e) => handleChange}
              />
              <CssTextField
                required
                value={entryData.subject}
                type="text"
                name="subject"
                label="Subject"
                variant="outlined"
                onChange={(e) => handleChange}
              />
              <CssTextField
                required
                value={entryData.subject}
                type="textarea"
                name="subject"
                multiline
                rows={2}
                label="Message"
                variant="outlined"
                onChange={(e) => handleChange}
              />

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
