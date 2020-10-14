import React from "react";
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
      margin: "0.5rem",
        width: "70%",
        ["@media (min-width:750px)"]: {
        },
      "& label.Mui-focused": {
        color: PRIME_COLOR,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: PRIME_COLOR,
      },
    },
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

function BMIinput() {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="standard-adornment-height">Height</InputLabel>
        <Input
          type="number"
          id="standard-adornment-height"
          endAdornment={<InputAdornment position="end">feet</InputAdornment>}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="standard-adornment-weight">Weight</InputLabel>
        <Input
          type="number"
          id="standard-adornment-weight"
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
        />
      </FormControl>
      <FormControl>
        <TextField label="Age" type="number" />
      </FormControl>
      <FormControl component="fieldset" className={classes.genderBtn}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
        </RadioGroup>
      </FormControl>

      <button type="submit" className="button-primary">
        Calculate
      </button>
      <button className="button-primary">Clear</button>
    </form>
  );
}

export default BMIinput;
