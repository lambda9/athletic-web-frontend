import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: "200",
    backgroundColor: "red",
  },
});
const marks = [
  {
    value: 1,
    label: "Month",
  },
  {
    value: 4,
    label: "Quaterly",
  },
  {
    value: 6,
    label: "Half Yearly",
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
  return marks.findIndex((mark) => mark.value === value) + 1;
}
function PlanDurationSlider() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Slider
        defaultValue={6}
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
