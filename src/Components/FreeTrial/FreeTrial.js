import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./FreeTrial.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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
    <div className="temp">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-basic"
          label="Name"
          placeholder="Name"
        />
        <TextField disabled id="standard-disabled" label="Disabled" />
      </form>
    </div>
  );
};

export default ModalExample;

// <Button color="danger" onClick={toggle}>
//         Click me
//       </Button>
//       <Modal keyboard={false} isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>
//           TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY PASS!
//         </ModalHeader>
//         <ModalBody>

//         </ModalBody>
//         <ModalFooter></ModalFooter>
//       </Modal>
