import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const PRIME_COLOR = "#459fb6";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "0.5rem auto",
      width: "70%",
      backgroundColor: "pink",
      ["@media (max-width:550px)"]: {
        width: "85%",
      },
      "& label.Mui-focused": {
        color: PRIME_COLOR,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: PRIME_COLOR,
      },
    },
  },

  height: {
    width: "35%",
  },

  temp: {
    //   backgroundColor: "blue",
    width: "100%",
  },

  genderBtn: {
    "& .MuiFormLabel-root": {
      textAlign: "start",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: PRIME_COLOR,
    },
    "& legend": {
      margin: "0",
    },
  },
}));

function BMIinput(props) {
  const [entryDT, setEntryDT] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "male",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEntryDT({ ...entryDT, [name]: value });
  };

  const handleSubmit = (event) => {
    const heightcm =
      (entryDT.heightFt * 30.48 + entryDT.heightInch * 2.54) / 100;
    let bmi = entryDT.weight / (heightcm * heightcm);
    bmi = bmi.toFixed(2);

    props.handleBMI(bmi);
    event.preventDefault();
  };

  const handleClear = (event) => {
    props.handleBMI(0);
    setEntryDT({
      heightFt: "",
      heightInch: "",
      weight: "",
      age: "",
      gender: "male",
    });
    event.preventDefault();
  };

  const calculateBMI = () => {};

  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <div className="bmi-height-entry-field">
        <p>Height</p>
        <FormControl className={classes.height}>
          <InputLabel htmlFor="standard-adornment-height">Feet</InputLabel>
          <Input
            required
            type="number"
            name="heightFt"
            value={entryDT.heightFt}
            onChange={handleChange}
            id="standard-adornment-height"
          />
        </FormControl>
        <FormControl className={classes.height}>
          <InputLabel htmlFor="standard-adornment-height">Inch</InputLabel>
          <Input
            required
            type="number"
            name="heightInch"
            value={entryDT.heightInch}
            onChange={handleChange}
            id="standard-adornment-height"
          />
        </FormControl>
      </div>

      <div className="bmi-height-entry-field">
        <p>Weight</p>
        <FormControl>
          <Input
            required
            className={classes.temp}
            type="number"
            name="weight"
            value={entryDT.weight}
            onChange={handleChange}
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          />
        </FormControl>
      </div>
      <div className="bmi-height-entry-field">
        <p>Age</p>
        <FormControl>
          <TextField
            required
            name="age"
            value={entryDT.age}
            onChange={handleChange}
            type="number"
          />
        </FormControl>
      </div>

      <div className="bmi-height-entry-field">
        <p>Gender</p>
        <FormControl component="fieldset" className={classes.genderBtn}>
          <RadioGroup
            required
            value={entryDT.gender}
            onChange={handleChange}
            row
            name="gender"
            defaultValue="top"
          >
            <FormControlLabel
              value="male"
              control={<Radio color="secondary" />}
              label="Male"
            />
            <FormControlLabel
              value="female"
              control={<Radio color="secondary" />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="bmi-btn-container">
        <button type="submit" className="button-primary">
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="button-primary primary-red-btn"
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default BMIinput;
