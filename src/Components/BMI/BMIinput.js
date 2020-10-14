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


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function BMIinput() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <TextField label="Age" type="number" />
      </FormControl>
      <FormControl component="fieldset">
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
      <FormControl>
        <InputLabel htmlFor="standard-adornment-password">Height</InputLabel>
        <Input
          id="standard-adornment-height"
          endAdornment={<InputAdornment position="end">feet</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "height",
          }}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="standard-adornment-weight">Weight</InputLabel>
        <Input
          id="standard-adornment-weight"
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
      <button type='submit' className='button-primary'>Calculate</button>
      <button className='button-primary'>Clear</button>
    </form>
  );
}

export default BMIinput;
