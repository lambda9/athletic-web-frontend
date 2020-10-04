import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const primaryColor= '#459fb6';
const mainWhite= '#ffffff';
const primaryRed= '#c13434';
const offWhite= '#e0e0e0';
const mainBlack= '#222';
const mainGrey= '#ececec';
const darkGrey= '#cfcfcf'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "1rem auto",
    "& .MuiAccordion-rounded": {
      margin: '1rem auto',
    },
    "&:hover .MuiAccordion-rounded": {

    },
    "& .Mui-expanded": {
    },
  },

  expanded: {
    transition: 'all linear 0.2s',
    "&:hover": {
      boxShadow: '0px 0px 4px 0px black',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "100%",
    textAlign: "left",
    flexShrink: 0,
  },
  head: {
    backgroundColor: mainGrey,
  },
  details: {
    textAlign: 'left'
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={classes.expanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.head}
        >
          <Typography className={classes.heading}>
            WHO ARE YOU AND HOW LONG HAVE YOU BEEN AROUND?
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
        className={classes.expanded}
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
        className={classes.expanded}
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
