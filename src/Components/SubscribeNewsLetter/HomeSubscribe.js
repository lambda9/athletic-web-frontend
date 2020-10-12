import React, { useState } from "react";
import "./HomeSubscribe.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const PRIME_COLOR = "#459fb6";
const CssTextField = withStyles({
  root: {
    backgroundColor: "white",
    width: "100%",
    color: "black",
    "& label.Mui-focused": {
      color: PRIME_COLOR,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "3px 0 0 3px",
        borderColor: "white",
        color: "black",
      },
      "& .MuiOutlinedInput-input": {
        padding: "12px 10px",
        color: "black",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        borderColor: PRIME_COLOR,
        color: PRIME_COLOR,
      },
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(12px, 12.5px) scale(1)",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(8px, -6px) scale(0.9)",
    },
  },
})(TextField);
function HomeSubscribe() {
  const [submail, setsubmail] = useState("");

  const handleChange = (event) => {
    console.log("this is mail", event.target.value);
    setsubmail(event.target.value);
  };

  return (
    <div className="subs-main-div">
      <div className='subs-text-div'>
        <h2>Subscribe to your news letter</h2>
        <h3>Get latest updates</h3>
      </div>
      <div className="subs-home-field-cont">
        <form className='subs-form'>
          <CssTextField
            required
            type="email"
            name="email"
            value={submail}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleChange}
          />
          <Link to='/' className="button-primary subs-home-btn ">
            Subscribe
          </Link>
        </form>
      </div>
    </div>
  );
}

export default HomeSubscribe;
