import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import "../FreeTrial/FreeTrial.css";
import "./HomeEnquiry.css";

const PRIME_COLOR = "#459fb6";

// const matches = useMediaQuery("(min-width: 850px)")

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: `0 auto ${1.2}rem`,
      width: "100%",
    },
  },
});

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

class HomePageEnquiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smallerWindow: false,
      name: "",
      email: "",
      phoneNum: "",
      subject: "",
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    var width = window.innerWidth();

    if (width < 850) {
      this.setState({
        smallerWindow: true,
      });

      return;
    }

    this.setState({
      smallerWindow: false,
    });
  };

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
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
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
                <CssTextField
                  required
                  value={this.state.subject}
                  type="textarea"
                  name="subject"
                  multiline
                  rows={2}
                  label="Message"
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
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(HomePageEnquiry);
