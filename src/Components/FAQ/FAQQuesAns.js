import React, { useState, useEffect } from "react";
import "./FAQ.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const arrQuesAns = [
  {
    id: "faq_1",
    expanded: "panel1",
    type: "type1",
    ques: "Do you have lockers?",
    ans:
      "Absolutely, and a lot of them. No need to bring a lock, we operate on a code combination setup.",
  },
  {
    id: "faq_2",
    expanded: "panel2",
    type: "type1",
    ques: "Do you have water or should I bring my own?",
    ans:
      "All our branches are zero single-use plastic free and we provide reusable stainless bottles to borrow for your session. If you’d prefer to bring your own bottle, we also have water stations available.",
  },
  {
    id: "faq_3",
    expanded: "panel3",
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_4",
    expanded: "panel4",
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_5",
    expanded: "panel5",
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_6",
    expanded: "panel6",
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_7",
    expanded: "panel7",
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_8",
    expanded: "panel8",
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_9",
    expanded: "panel9",
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_10",
    expanded: "panel10",
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_11",
    expanded: "panel11",
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
  {
    id: "faq_12",
    expanded: "panel12",
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "1rem auto",
    "& .MuiAccordion-rounded": {
      margin: "0.8rem auto",
    },
    "& .Mui-expanded": {},
    "& .MuiAccordionDetails-root": {
      padding: "0 10px 12px 10px",
    },
    "& .MuiAccordionSummary-content.Mui-expanded ": {
      margin: "10px 0",
    },
    "& .MuiAccordionSummary-content": {
      margin: "10px 0",
    },
    "& .MuiAccordionSummary-root": {
      padding: "0 10px",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "0",
    },
  },
  acc: {
    transition: "all linear 0.2s",
    backgroundColor: "transparent",
  },
  head: {
    "& .Mui-expanded": {},
  },
  heading: {
    fontSize: "20px",
    transition: "all linear 0.2s",
    flexBasis: "100%",
    margin: "0rem auto",
    textAlign: "left",
    ["@media (max-width:650px)"]: {
      fontSize: "16px",
    },
  },
  details: {
    fontSize: "16px",
    textAlign: "left",
    ["@media (max-width:650px)"]: {
      fontSize: "12px",
    },
  },
}));

function QuesAns(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const typeFilter = (e) => {
    return e.type === props.type;
  };

  const classes = useStyles();

  const typeArr = arrQuesAns.filter(typeFilter);

  return (
    <div className="faq-qa-main">
      <div className="faq-type-head">
        <div id="type-head">{props.type}</div>
      </div>
      <div className="faq-accordion">
        <div className={classes.root}>
          {typeArr.map((item) => {
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
                  <Typography className={classes.details}>
                    {item.ans}{" "}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuesAns;
