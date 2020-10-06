import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

const PRIME_COLOR = "#459fb6"

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1.2),
      width: "90%",
    },
  },
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: PRIME_COLOR,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: PRIME_COLOR,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
      color: PRIME_COLOR,
      borderColor: PRIME_COLOR,
      },
      "&.Mui-focused fieldset": {
        borderColor: PRIME_COLOR,
      },
    },
  },
})(TextField);

class HomePageEnquiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNum: "",
      subject: "",
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  handleReset = (event) => {
    this.setState({
      name: "",
      email: "",
      phoneNum: "",
      subject: "",
    });
    event.preventDefault()

  };

  render() {
    const { classes } = this.props;
    return (
      <div className="home-enquiry-main-div">
        <div className="home-enquiry-left-div">
          <span>Interested</span>
          <h2>Any query</h2>
          <h3>Fill out the form and we will reach you as soon as possible...</h3>
        </div>

        <div className="home-enquiry-right-div">
          <form className={classes.root} autoComplete="nope">
            <CssTextField
              required
              type="text"
              name="name"
              value={this.state.name}
              autoComplete="nope"
              label="Name"
              variant="outlined"
              onChange={this.handleChange}
            />
            <CssTextField
              required
              type="email"
              value={this.state.email}
              name="email"
              autoComplete="nope"
              label="E-mail"
              variant="outlined"
              onChange={this.handleChange}
            />
            <CssTextField
              required
              value={this.state.phoneNum}
              type="tel"
              autoComplete="nope"
              name="phoneNum"
              label="Phone Number"
              variant="outlined"
              onChange={this.handleChange}
            />
            <CssTextField
              required
              value={this.state.subject}
              type="text"
              name="subject"
              label="Subject"
              variant="outlined"
              onChange={this.handleChange}
            />

            <div className="home-enquiry-btn-container">
              <button
                onClick={this.handleSubmit}
                className="button-primary"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={this.handleReset}
                className="button-primary  cancel-btn"
              >
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(HomePageEnquiry);
