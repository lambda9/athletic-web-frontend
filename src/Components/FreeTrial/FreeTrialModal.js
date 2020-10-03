import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from "@material-ui/core/Button";
import FreeTrialEntryFields from "./FreeTrialEntryFields";
import "./FreeTrial.css";
import { Link } from "react-router-dom";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    console.log("im in toggle");
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => {
            this.setState({ modal: !this.state.modal });
          }}>
          Click me
        </Button>
        <Modal keyboard={false} isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY
            PASS!
          </ModalHeader>
          <ModalBody>
            <FreeTrialEntryFields toggle={this.toggle} />
          </ModalBody>
          <ModalFooter>
          <Link className='free-trial-terms-text'>*By clicking on the submitt button you agree to our terms and conditions</Link>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;


