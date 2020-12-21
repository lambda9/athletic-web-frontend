import React, { useEffect, useState } from "react";
import "./FreeTrial.css";
import { Link } from "react-router-dom";
import FreeTrialCardBG from "./FreeTrialCardBG";
import FreeTrialFormContainer from "./FreeTrialFormContainer";
import Loader from "../GlobalComponents/Loader";
import Error from "../GlobalComponents/Error";

function FreeTrialPage({ data, error }) {
	if (data === null) {
		return <Error name="backend error" desc="Oops... something went wrong" />;
	}

	return (
		<div className="free-trial-page">
			<FreeTrialCardBG days={data["days_offered"]} />
			<div className="free-trial-content-div">
				{Loader(
					"http://localhost:8000/free-trials/form/",
					FreeTrialFormContainer,
					{ days_offered: data["days_offered"] }
				)}
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
