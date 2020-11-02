import React from "react";
import { Link } from "react-router-dom";
import FreeTrialEntryFields from "./FreeTrialEntryFields";
import { useHistory } from "react-router-dom";

const FreeTrialForm = ({
	days_offered,
	is_service_active,
	state,
	onChange,
	onSubmit,
	choices,
}) => {
	const history = useHistory();
	if (is_service_active) {
		return (
			<div className="free-trial-form-div">
				<div className="free-trial-head-text">
					{`TRY US - FILL OUT THE FORM BELOW & WE’LL EMAIL YOU A FREE ${days_offered}
							-DAY PASS!`}
				</div>
				<FreeTrialEntryFields
					state={state}
					onChange={onChange}
					onSubmit={onSubmit}
					choices={choices}
					back={() => history.goBack()}
				/>
				<Link className="free-trial-terms-text">
					*By submitting this form you agree to our terms and conditions.
				</Link>
			</div>
		);
	} else {
		return (
			<div style={{ minHeight: "400px" }}>
				<h1>
					Free trial service is temporary deactivated, we'll come back soon
				</h1>
			</div>
		);
	}
};

export default FreeTrialForm;
