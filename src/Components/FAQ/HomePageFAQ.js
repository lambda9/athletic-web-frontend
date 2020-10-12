import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./HomePageFAQ.css";

const primaryColor = "#459fb6";
const c2 = "#1ca9c9";

export default function ControlledAccordions() {
  const faqDt = [
    {
      id: "faq_1",
      expanded: "panel1",
      ques: "Who are you and how long have you been around?",
      ans:
        "Gym and Fitness has been around since 2016. We have gone from   strength to strength in that time and now pride ourselves in being one of the largest fitness center in Jodhpur. have years of combined fitness experience across all of our  staff.",
    },
    {
      id: "faq_2",
      expanded: "panel2",
      ques: "Do you have water or should I bring my own?",
      ans:
        " All our branches are zero single-use plastic free and we provide reusable stainless bottles to borrow for your session. If you’d prefer to bring your own bottle, we also have water stations available.",
    },
    {
      id: "faq_3",
      expanded: "panel3",
      ques: "Do you have lockers?",
      ans:
        "Absolutely, and a lot of them. No need to bring a lock, we operate on a code combination setup.",
    },
  ];

  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setwidth(window.innerWidth);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "90%",
      margin: "1rem auto",
      "& .MuiAccordion-rounded": {
        margin: "0.8rem auto",
      },
      "& .Mui-expanded": {},
    },
    acc: {
      transition: "all linear 0.2s",
      backgroundColor: "transparent",
      
    },
    head: {
      "& .Mui-expanded": {
      },
    },
    heading: {
      fontSize: width < 550 ? "16px" : "20px",
      transition: "all linear 0.2s",
      flexBasis: "100%",
      margin: "0.09rem auto",
      textAlign: "left",
    },
    details: {
      margin: "-0.5rem auto 0rem orem",
      fontSize: width < 550 ? "12px" : "16px",
      textAlign: "left",
    },
  }));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        {faqDt.map((item) => {
          return (
            <Accordion
              expanded={expanded === item.expanded}
              onChange={handleChange(item.expanded)}
              className={classes.acc}
            >
              <AccordionSummary
                key={item.id}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={item.expanded + "bh-content"}
                id={item.expanded + "bh-header"}
                className={classes.head}
              >
                <Typography className={classes.heading}>
                  {item.ques}{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.details}>{item.ans} </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <div className="home-page-faq-btn-div">
        <Link to="/faq" className="button-primary">
          checkout more
        </Link>
        <Link to="/" className="button-primary">
          Ask Your Question
        </Link>
      </div>
    </div>
  );
}
