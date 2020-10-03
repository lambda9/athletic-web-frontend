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
import "./FreeTrial.css";

const useStyles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },

  cancelButton: {
    backgroundColor: "#c13434",
    color: "white",
    border: "2px solid #c13434",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#c13434",
      outline: 'none'
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
    margin: "1rem 1rem 0.1rem",
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

class FreeTrialEntryFields extends Component {
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

  handleSubmitt = () => {
    console.log(this.state);
  };

  handleCancel = () => {
     
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="temp">
        <form
          className={classes.root}
          autoComplete="nope"
          onSubmit={this.handleSubmitt}
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
            label="Date"
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
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

            <FormControl>
              <InputLabel htmlFor="select-program">Program</InputLabel>
              <Select
                required
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

          <ColorButton type="submitt">Submitt</ColorButton>
          <ColorButton onClick={this.props.toggle} className={classes.cancelButton}>
            Cancel
          </ColorButton>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(FreeTrialEntryFields);
