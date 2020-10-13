import React, { Component } from "react";
import FranchiseContForm from "./FranchiseContForm";
import "./Franchise.css";
import FranchiseComp from "./FranchiseComp";
import FranchiseBanner from "./FranchiseBanner";

export class FranchisePage extends Component {
  render() {
    return (
      <div>
        <FranchiseBanner />
        <FranchiseComp />

        <div className="franchise-form-header">
          <h2>Take The First Step Today</h2>
          <span>
            Tell us more about yourself or give us a call at (800) 704-???? to
            talk more about franchising opportunities.
          </span>
        </div>

        <div className="franchise-form-container">
          <FranchiseContForm />
        </div>
      </div>
    );
  }
}

export default FranchisePage;
