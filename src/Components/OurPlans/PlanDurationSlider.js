import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const PRIMARY_RED = "#c13434";
const PRIMARY_COLOR = "#1ca9c9";
const useStyles = makeStyles({
  root: {
    width: "300",
    "& .MuiSlider-root": {
      width: "700px",
      height: "20px",
      color: "whtite"
    },
    "&  .MuiSlider-markLabel": {
      color: 'white',
      fontSize: "18px",
      fontWeight: "bold",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "white",
      color: "white",
      opacity: "0.9",
      height: "5px",
    },
    "& .MuiSlider-track": {
      backgroundColor: PRIMARY_RED,
      height: "5px",
    },
    "& .MuiSlider-thumb": {
      width: "15px",
      height: "15px",
      backgroundColor: PRIMARY_RED,
    },
    "& .MuiSlider-mark": {
      width: "3px",
      height: "3px",
    },

    "& PrivateValueLabel-circle-5": {
      width: "36px",
      height: "36px",
      backgroundColor: "yellow",
    },
  },
});
const marks = [
  {
    value: 1,
    label: "Monthly",
  },
  {
    value: 3,
    label: "Quarterly",
  },
  {
    value: 6,
    label: "Half-Yearly",
  },
  {
    value: 12,
    label: "Yearly",
  },
];
function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return "value Months";
}
function PlanDurationSlider() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={20}
        min={1}
        max={12}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </div>
  );
}

export default PlanDurationSlider;
