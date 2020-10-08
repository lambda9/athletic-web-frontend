import React from "react";
import "./FAQ.css";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '100%',
    boxShadow: 'none',
    paddingBottom: '1em'
  },
  question: {
    fontFamily: '"Monteserrat", sans-serif',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline var(--primaryColor) solid',
    }
  },
  details: {
    backgroundColor: 'var(--accentColor)',
    color: 'var(--mainGrey)'
  },
  answer: {
    fontFamily: '"Monteserrat", sans-serif',
    textAlign: 'Left'
  }
}));

const arrQuesAns = [
  {
    type: "type1",
    ques: "Do you have lockers?",
    ans: "Absolutely, and a lot of them. No need to bring a lock, we operate on a code combination setup."
  },
  {
    type: "type1",
    ques: "Do you have water or should I bring my own?",
    ans: "All our branches are zero single-use plastic free and we provide reusable stainless bottles to borrow for your session. If you’d prefer to bring your own bottle, we also have water stations available."
  },
  {
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type1",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type2",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
  {
    type: "type3",
    ques: "lorem ipsum ?",
    ans: "lorem ipsum"
  },
];

const QuesAns = (props) => {

  function typeFilter (e) {
    return e.type === props.type;
  }

  const classes = useStyles();
  const typeArr = arrQuesAns.filter(typeFilter);

  return (
    <div className = "faq-qa-main">
      <div className = "faq-type-head">
        <div id = "type-head">{props.type}</div>
      </div>
      <div className = "faq-accordion">
      {
        typeArr.map( (item) => {
          return (

            <Accordion
              className={classes.accordion}
            >
              <AccordionSummary
                className={classes.summary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.question}> 
                  {item.ques} 
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                className={classes.details}
              >
                <Typography className={classes.answer}>
                  {item.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })
      }  
      </div>
    </div>
  );
}

export default QuesAns;