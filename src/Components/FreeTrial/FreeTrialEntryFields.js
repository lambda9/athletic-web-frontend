import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";
import "./FreeTrial.css";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "95%",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#459fb6",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#459fb6",
    },
  },

  cancelButton: {
    backgroundColor: "#c13434",
    color: "white",
    border: "2px solid #c13434",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#c13434",
      outline: "none",
    },
  },

  radioControl: {
    textAlign: "left",
    width: "200px",
    marginTop: "1rem",
    display: "flex",
    // backgroundColor: "green",
  },

  radioButton: {
    marginTop: "-5px",
    marginBottom: "-5px",
  },

  selectField: {
    // backgroundColor: "yellow",
    marginTop: "1rem",
    width: "200px",
    ["@media (max-width:473px)"]: {
      // marginTop: "1rem",
    },
    borderBottomColor: "#459fb6",
    "& .FreeTrialEntryFields-root-1": {
      backgroundColor: "#459fb6",
    },
  },

  ageField: {
    "& .MuiTextField-root": {
      width: "200px",
      margin: "auto",
      // marginTop: "1px",
      marginTop: "1.009rem",
      // backgroundColor: "red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#459fb6",
    },
  },
});

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#459fb6",
    },
  },
})(TextField);

const SelectField = withStyles({
  root: {
    "label + &": {
      color: "#459fb6",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#459fb6",
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",

    fontSize: 16,
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
})(Select);

class FreeTrialEntryFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phoneNum: "",
      age: 18,
      sex: "male",
      time: "morning",
      program: "none",
      date: this.getNextDate(),
    };
  }

  getNextDate() {
    var dt = new Date();
    dt.setDate(dt.getDate() + 1);
    return dt.toISOString().split("T")[0];
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {};

  render() {
    const { classes } = this.props;
    return (
      <div className="entry-fields-main-div">
        <form
          className={classes.root}
          autoComplete="nope"
          onSubmit={this.handleSubmit}
        >
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

          <CssTextField
            required
            label="Date"
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <div className="free-trial-entry-fields-selection">
            <FormControl component="fieldset" className={classes.ageField}>
              <TextField
                required
                value={this.state.age}
                type="number"
                name="age"
                label="Age"
                variant="standard"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl className={classes.selectField}>
              <InputLabel htmlFor="select-program">Program</InputLabel>
              <SelectField
                required
                native
                name="program"
                defaultValue="None"
                className={classes.temp}
                value={this.state.program}
                onChange={this.handleChange}
              >
                <option aria-label="None" value="none">
                  None
                </option>
                <option value={"Cardio"}>Cardio</option>
                <option value={"weightLoss"}>Weight Loss</option>
                <option value={"muscleGain"}>Muscle Gain</option>
              </SelectField>
            </FormControl>
          </div>
          <div className="free-trial-entry-fields-selection">
            <FormControl component="fieldset" className={classes.radioControl}>
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
            <FormControl component="fieldset" className={classes.radioControl}>
              <FormLabel component="legend">Sex</FormLabel>
              <RadioGroup
                aria-label="male"
                name="sex"
                value={this.state.sex}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  className={classes.radioButton}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  className={classes.radioButton}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="free-trial-btn-container">
            <button className="button-primary btn-margin" type="submit">
              Submit
            </button>
            <button
              onClick={this.props.back}
              className="button-primary  cancel-btn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(FreeTrialEntryFields);
