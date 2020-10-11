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
    },
    "&  .MuiSlider-markLabel": {
      color: "white",
      fontSize: "18px",
      fontWeight: "500",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "white",
      color: "white",
      opacity: "0.8",
      height: "8px",
    },
    "& .MuiSlider-track": {
      backgroundColor: PRIMARY_RED,
      height: "8px",
    },
    "& .MuiSlider-thumb": {
      width: "18px",
      height: "18px",
      backgroundColor: PRIMARY_RED,
    },
    "& .MuiSlider-mark": {
      width: "8px",
      height: "8px",
      backgroundColor: "white",
    },
    "& .PrivateValueLabel-thumb-2": {},
    ["@media (max-width:750px)"]: {
      "& .MuiSlider-root": {
        width: "440px",
      },
      "&  .MuiSlider-markLabel": {
        fontSize: "14px",
        fontWeight: "300",
      },
      "& .MuiSlider-rail": {
        height: "6px",
      },
      "& .MuiSlider-track": {
        height: "6px",
      },
      "& .MuiSlider-thumb": {
        width: "14px",
        height: "14px",
      },
      "& .MuiSlider-mark": {
        width: "6px",
        height: "6px",
      },
    },
    ["@media (max-width:550px)"]: {
      "& .MuiSlider-root": {
        width: "310px",
      },
      "&  .MuiSlider-markLabel": {
        fontSize: "12px",
        marginTop: 0,
        transform: "translate(-50%, -60%)"
      },
      "& .MuiSlider-marked": {
        marginBottom: "0px",
      }
    }
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
  return value;
}
function PlanDurationSlider(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={3}
        min={1}
        max={12}
        colorSecondary
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={props.handleDuration}
      />
    </div>
  );
}

export default PlanDurationSlider;
