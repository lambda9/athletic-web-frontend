import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./HomePageFAQ.css";
const primaryColor = "#459fb6";
const mainWhite = "#ffffff";
const primaryRed = "#c13434";
const offWhite = "#e0e0e0";
const mainBlack = "#222";
const mainGrey = "#ececec";
const darkGrey = "#cfcfcf";
const c1 = "#126d82";
const c2 = "#1ca9c9";

export default function ControlledAccordions() {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setwidth(window.innerWidth)
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "90%",
      // backgroundColor: 'transparent',
      margin: "1rem auto",
      "& .MuiAccordion-rounded": {
        margin: "0.5rem auto",
      },
      "& .Mui-expanded": {},
    },
    acc: {
      transition: "all linear 0.2s",
      backgroundColor: 'transparent',
      "&:hover": {
        boxShadow: "0px 0px 4px 0px black",
      },
    },
    head: {
      color: c2,
      // backgroundColor: mainWhite,
      "& .Mui-expanded": {
        color: primaryColor,
      },
    },
    heading: {
      fontSize: width < 550 ? "14px" : "22px",
      transition: "all linear 0.2s",
      flexBasis: "100%",
      margin: "0.09rem auto",
      textAlign: "left",
    },
    details: {
      fontSize: width < 550 ? "11px" : "18px",
      textAlign: "left",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.acc}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.head}
        >
          <Typography className={classes.heading}>
            Who are you and how long have you been around?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.details}>
            Gym and Fitness has been around since 2016. We have gone from
            strength to strength in that time and now pride ourselves in being
            one of the largest fitness center in Jodhpur.
            <br></br>
            We have years of combined fitness experience across all of our
            staff.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        className={classes.acc}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          className={classes.head}
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            Do you have water or should I bring my own?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.details}>
            All our branches are zero single-use plastic free and we provide
            reusable stainless bottles to borrow for your session. If you’d
            prefer to bring your own bottle, we also have water stations
            available.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        className={classes.acc}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          className={classes.head}
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Do you have lockers?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.details}>
            Absolutely, and a lot of them. No need to bring a lock, we operate
            on a code combination setup.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
