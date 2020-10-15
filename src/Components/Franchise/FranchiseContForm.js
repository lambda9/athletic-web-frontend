import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const PRIME_COLOR = "#459fb6";

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

class FranchiseContForm extends Component {
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
  };

  handleReset = (event) => {
    this.setState({
      name: "",
      email: "",
      phoneNum: "",
      subject: "",
    });
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="franchise-cont-form-main-div">
        <form className={classes.root} autoComplete="nope">
          <CssTextField
            required
            keyboard={false}
            type="text"
            name="name"
            value={this.state.name}
            autoComplete="nope"
            label="Name"
            onChange={this.handleChange}
          />
          <CssTextField
            required
            type="email"
            value={this.state.email}
            name="email"
            autoComplete="nope"
            label="E-mail"
            onChange={this.handleChange}
          />
          <CssTextField
            required
            value={this.state.phoneNum}
            type="tel"
            autoComplete="nope"
            name="phoneNum"
            label="Phone Number"
            onChange={this.handleChange}
          />
          <CssTextField
            required
            value={this.state.subject}
            type="text"
            name="subject"
            label="Subject"
            onChange={this.handleChange}
          />

          <CssTextField
            required
            value={this.state.subject}
            type="textarea"
            name="message"
            label="Message"
            onChange={this.handleChange}
          />

          <div className="franchise-cont-form-btn-container">
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
    );
  }
}

export default withStyles(useStyles)(FranchiseContForm);
