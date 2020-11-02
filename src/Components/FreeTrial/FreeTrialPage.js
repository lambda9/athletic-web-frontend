import React, { useEffect, useState } from "react";
import "./FreeTrial.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FreeTrialCardBG from "./FreeTrialCardBG";
import { useFetch } from "./hooks";
import FreeTrialFormContainer from "./FreeTrialFormContainer";

function FreeTrialPage() {
	const { response, error, isLoading } = useFetch(
		"http://localhost:8000/free-trials/settings/"
	);

	const [settings, setSettings] = useState({
		is_service_active: false,
		days_offered: 0,
	});

	useEffect(() => {
		// console.log("response", response);
		// console.log("erro", error);
	}, [isLoading]);

	const history = useHistory();

	return (
		<div className="free-trial-page">
			<FreeTrialCardBG />
			<div className="free-trial-content-div">
				{!response ? <div>Loading.. </div> : <FreeTrialFormContainer />}
				<div className="free-trial-join-today-div">
					<span>
						Join today to avail special offers on Athletic's Gym membership.
						Start your fitness journey today.
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
