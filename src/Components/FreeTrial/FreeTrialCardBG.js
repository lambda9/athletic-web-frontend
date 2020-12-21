import React from "react";

function FreeTrialCardBG({ days }) {
	return (
		<div>
			<div className="free-trial-banner-div">
				<div className="free-trial-card">
					<span className="free-trial-card-text">{`${days}-DAYS`}</span>
					<span className="free-trial-card-text">FREE</span>
					<span className="free-trial-card-text">TRIAL</span>
				</div>
				<div className="free-trial-main-head-text">
					<span>Start Your Fitness Journey Today</span>
				</div>
			</div>
		</div>
	);
}

export default FreeTrialCardBG;
