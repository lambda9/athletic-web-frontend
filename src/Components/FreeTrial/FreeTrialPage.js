import React from "react";
import "./FreeTrial.css";
import { Link } from "react-router-dom";
import FreeTrialEntryFields from "./FreeTrialEntryFields";
import { useHistory } from "react-router-dom";
import FreeTrialBG from "./FreeTrialBG";
function FreeTrialPage() {
  const history = useHistory();
  return (
    <div className="free-trial-page">
      <div className="free-trial-banner-div">
        <div className="free-trial-card">
          <span className="free-trial-card-text">7-Days</span>
          <span className="free-trial-card-text">Free</span>
          <span className="free-trial-card-text">Trial</span>
        </div>
        <div className="free-trial-main-head-text">
          <span>Start Your Fitness Journey Today</span>
        </div>
      </div>
      <div className='free-trial-content-div'>

      <div className="free-trial-form-div">
        <div className="free-trial-head-text">
          TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY PASS!
        </div>
        <FreeTrialEntryFields back={() => history.goBack()} />
        <Link className="free-trial-terms-text">
          *By clicking on the submit button you agree to our terms and
          conditions.
        </Link>
      </div>
      <div className="free-trial-join-today-div">
        <span>
          Join today to avail special offers on Athletic's Gym membership. Start
          your fitness journey today.
        </span>
        <div className="free-trial-join-today-btn">
          <Link className="button-primary" to="/membership">
            Join Today
          </Link>
        </div>
      </div>
      </div>

    </div>
  );
}

export default FreeTrialPage;
