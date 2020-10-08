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
  },
  answer: {
    fontFamily: '"Monteserrat", sans-serif',
  }
}));

const arrQuesAns = [
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
        {props.type}
        <div className = "separator"/>
      </div>
      <div className = "faq-accordion">
      {
        typeArr.map( (item) => {
          return (

            <Accordion
              className={classes.accordion}
            >
              <AccordionSummary>
                <Typography className={classes.question}> 
                  {item.ques} 
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
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