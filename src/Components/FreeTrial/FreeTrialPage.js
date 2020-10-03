import  React  from "react";
import "./FreeTrial.css";
import FreeTrialEntryFields from "./FreeTrialEntryFields";
import { useHistory } from 'react-router-dom'

function FreeTrialPage() {
    const history = useHistory()
  return (
    <div className='free-trial-main-div'>
    <div className='free-trial-head-text'>
    TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE 7-DAY
    PASS!
    </div>
      <FreeTrialEntryFields toggle={() => history.goBack()}/>
    </div>
  );
}

export default FreeTrialPage;
