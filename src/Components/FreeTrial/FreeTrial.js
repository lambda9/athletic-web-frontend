import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
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

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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

const ModalExample = (props) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [value, setValue] = React.useState("best");
  const [error, setError] = React.useState(false);
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const inputFields = [
    {
      id: "name",
      name: "name",
      for: "name",
      type: "text",
      placeholder: "Name",
      required: true,
    },
    {
      id: "email",
      name: "email",
      for: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      for: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
    },
  ];

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click me
      </Button>
      <Modal keyboard={false} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY PASS!
        </ModalHeader>
        <ModalBody>
          <div className="temp">
            <form className={classes.root} autoComplete="nope">
              <CssTextField
                required
                type="text"
                label="Name"
                variant="standard"
              />
              <CssTextField
                required
                type="email"
                label="E-mail"
                variant="standard"
              />
              <CssTextField
                required
                type="tel"
                label="Phone Number"
                variant="standard"
              />

              <CssTextField
                required
                type="date"
                label="date"
                value="date"
                variant="standard"
              />
              <div className='tt'>
                <FormControl
                  component="fieldset"
                  error={error}
                  className={classes.radioControl}
                >
                  <FormLabel component="legend">Choose Time</FormLabel>
                  <RadioGroup
                    aria-label="morning"
                    name="morning"
                    value={value}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="morning"
                      control={<Radio />}
                      label="Morning"
                    />
                    <FormControlLabel
                      value="evening"
                      control={<Radio />}
                      label="Evening"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="select-program">Program</InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                      name: "Program",
                      id: "select-preogram",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Cardio"}>Cardio</option>
                    <option value={"weightLoss"}>Weight Loss</option>
                    <option value={"muscleGain"}>Muscle Gain</option>
                  </Select>
                </FormControl>
              </div>

              <ColorButton type="submitt" className={classes.submittButton}>
                Submitt
              </ColorButton>
            </form>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
