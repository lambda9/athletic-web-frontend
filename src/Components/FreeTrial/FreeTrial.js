import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./FreeTrial.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },

  submittButton: {},
}));

const ColorButton = withStyles((theme) => ({
  root: {
    margin: "1rem auto 0.1rem",
    fontSize: '16px',
    letterSpacing: "1.4px",
    padding: "0.3rem 0.6rem",
    border: "2px solid #459fb6",
    textTransform: "uppercase",
    textDecoration: "none",
    backgroundColor: "#459fb6",
    color: "black",
    transition: "all 0.3s linear",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#459fb6",
    },
  },
}))(Button);

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#459fb6",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#459fb6",
    },
    "&:hover .MuiInput-underline": {
      borderBottomColor: "yellow",
    },
  },
})(TextField);

const ModalExample = (props) => {
  const classes = useStyles();

  const inputFields = [
    {
      id: "name",
      name: "name",
      for: "name",
      type: "text",
      placeholder: "Name",
      required: true,
    },
    {
      id: "email",
      name: "email",
      for: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: "phoneNumber",
      name: "phoneNumber",
      for: "phoneNumber",
      type: "tel",
      placeholder: "Phone Number",
      required: true,
    },
  ];

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click me
      </Button>
      <Modal keyboard={false} isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY PASS!
        </ModalHeader>
        <ModalBody>
          <div className="temp">
            <form className={classes.root} autoComplete="nope">

            
              <CssTextField
                required
                type="text"
                label="Name"
                variant="standard"
                autoComplete="nope"
              />
              <CssTextField
                required
                type="email"
                label="E-mail"
                variant="standard"
                autoComplete="nope"
              />
              <CssTextField
                required
                type="tel"
                autoComplete="nope"
                label="Phone Number"
                variant="standard"
              />
              <ColorButton type="submitt" className={classes.submittButton}>
                Submitt
              </ColorButton>
            </form>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
