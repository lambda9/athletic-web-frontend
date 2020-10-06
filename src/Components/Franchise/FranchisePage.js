import React, { Component } from "react";
import FranchiseContForm from "./FranchiseContForm";
import "./Franchise.css";

export class FranchisePage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Some page design and background</h1>
        </div>

        <div className="franchise-form-container">
          <FranchiseContForm />
        </div>
      </div>
    );
  }
}

export default FranchisePage;
