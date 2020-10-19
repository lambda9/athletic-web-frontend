import React from "react";
import "./WhyJoinUs.css";

function WJUcard({ heading, content }) {
	return (
		<div className="wju-card">
			<h1>{heading}</h1>
			<p>{content}</p>
		</div>
	);
}

export default WJUcard;
