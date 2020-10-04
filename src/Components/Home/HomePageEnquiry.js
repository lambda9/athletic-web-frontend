import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

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
      color: "#459fb6",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#459fb6",
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

  handleSubmitt = () => {
    console.log(this.state);
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      phoneNum: "",
      subject: "",
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="home-enquiry-main-div">
        <div className="home-enquiry-left-div">
          <span>Interested</span>
          <h2>Any query</h2>
          <h3>Fill out the form we will reach as soon...</h3>
        </div>

        <div className="home-enquiry-right-div">
          <form className={classes.root} autoComplete="nope">
            <CssTextField
              required
              keyboard={false}
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

            <button
              onClick={this.handleSubmitt}
              className="button-primary btn-margin"
              type="submitt"
            >
              Submitt
            </button>
            <button
              onClick={this.handleReset}
              className="button-primary  btn-margin cancel-btn"
            >
              reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(HomePageEnquiry);
