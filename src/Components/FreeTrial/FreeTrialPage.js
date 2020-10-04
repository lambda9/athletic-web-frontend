import React from "react";
import "./FreeTrial.css";
import{ Link }from 'react-router-dom'
import FreeTrialEntryFields from "./FreeTrialEntryFields";
import { useHistory } from "react-router-dom";

function FreeTrialPage() {
  const history = useHistory();
  return (
    <div className="free-trial-main-div">
      <div className="free-trial-head-text">
        TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY PASS!
      </div>
      <FreeTrialEntryFields back={() => history.goBack()} />
      <Link className="free-trial-terms-text">
        *By clicking on the submitt button you agree to our terms and conditions
      </Link>
    </div>
  );
}

export default FreeTrialPage;
