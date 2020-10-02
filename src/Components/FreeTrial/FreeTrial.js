import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./FreeTrial.css";

const ModalExample = (props) => {
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
          <Form>
            {inputFields.map((item) => {
              return (
                <FormGroup className="free-form-group">
                  <Label for={item.for} className={"free-modal"}>
                    {item.placeholder}
                  </Label>
                  <Input
                    type={item.type}
                    name={item.name}
                    id={item.id}
                    placeholder={item.placeholder}
                    required={item.required}
                    className={"free-input"}
                  />
                </FormGroup>
              );
            })}
            <div className='free-buttons'>
            <Button>Submitt</Button>{" "}
            <Button color="secondary" onClick={toggle}>
            Cancel
            </Button>
            </div>
            <span >By Submitting this form your agree to our terms and condtions</span>
          </Form>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
