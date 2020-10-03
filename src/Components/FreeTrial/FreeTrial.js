import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./FreeTrial.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import NativeSelect from "@material-ui/core/NativeSelect";

import "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  radioControl: {
    textAlign: "left",
    width: "50%",
    display: "flex",
  },

  radioButton: {
    marginTop: "0px",
    marginBottom: "-5px",
  },

  selectEmpty: {
    marginTop: theme.spacing(1),
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "1rem auto 0.1rem",
    fontSize: "16px",
    letterSpacing: "1.4px",
    padding: "0.3rem 0.6rem",
    border: "2px solid #459fb6",
    textTransform: "uppercase",
    textDecoration: "none",
    backgroundColor: "#459fb6",
    color: "black",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#459fb6",
    },
  },
}))(Button);

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

let dt = new Date() + 1

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      email: "",
      phoneNum: "",
      time: "morning",
      program: "cardio",
      date: this.getNextDate(),
    };
  }

  getNextDate() {
    var dt = new Date()
    dt.setDate(dt.getDate() + 1)
    console.log(dt, "date date")
    return dt.toISOString().split('T')[0]

  }
  handleChange = (event) => {
    console.log(this.state.date)
    const name = event.target.name;
    console.log(name, event.target.value);
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  handleSubmitt = () => {
    console.log(this.state);
  };

  toggle = () => {
    console.log("im in toggle");
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            this.setState({ modal: !this.state.modal });
          }}
        >
          Click me
        </Button>
        <Modal keyboard={false} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY
            PASS!
          </ModalHeader>
          <ModalBody>
            <div className="temp">
              <form className={classes.root} autoComplete="nope">
                <CssTextField
                  required
                  keyboard={false}
                  type="text"
                  name="name"
                  value={this.state.name}
                  label="Name"
                  variant="standard"
                  onChange={this.handleChange}
                />
                <CssTextField
                  required
                  type="email"
                  value={this.state.email}
                  name="email"
                  label="E-mail"
                  variant="standard"
                  onChange={this.handleChange}
                />
                <CssTextField
                  required
                  value={this.state.phoneNum}
                  type="tel"
                  name="phoneNum"
                  label="Phone Number"
                  variant="standard"
                  onChange={this.handleChange}
                />

                <TextField
                  label="Date"
                  name="date"    
                  type="date"
                  min="1980-01-01" max="2000-01-01"              
                  value={this.state.date}
                  onChange={this.handleChange}
                />
                <div className="tt">
                  <FormControl
                    component="fieldset"
                    className={classes.radioControl}
                  >
                    <FormLabel component="legend">Choose Time</FormLabel>
                    <RadioGroup
                      aria-label="morning"
                      name="time"
                      value={this.state.time}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="morning"
                        control={<Radio />}
                        label="Morning"
                        className={classes.radioButton}
                      />
                      <FormControlLabel
                        value="evening"
                        control={<Radio />}
                        className={classes.radioButton}
                        label="Evening"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl>
                    <InputLabel htmlFor="select-program">Program</InputLabel>
                    <Select
                      native
                      name="program"
                      value={this.state.program}
                      onChange={this.handleChange}
                    >
                      <option aria-label="None" value="" />
                      <option value={"Cardio"}>Cardio</option>
                      <option value={"weightLoss"}>Weight Loss</option>
                      <option value={"muscleGain"}>Muscle Gain</option>
                    </Select>
                  </FormControl>
                </div>

                <ColorButton
                  onClick={this.handleSubmitt}
                  className={classes.submittButton}
                >
                  Submitt
                </ColorButton>
              </form>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(ModalExample);

// const inputFields = [
//   {
//     id: "name",
//     name: "name",
//     for: "name",
//     type: "text",
//     placeholder: "Name",
//     required: true,
//   },
//   {
//     id: "email",
//     name: "email",
//     for: "email",
//     type: "email",
//     placeholder: "Email",
//     required: true,
//   },
//   {
//     id: "phoneNumber",
//     name: "phoneNumber",
//     for: "phoneNumber",
//     type: "tel",
//     placeholder: "Phone Number",
//     required: true,
//   },
// ];
