import React from "react";
import "./OurValues.css";

const ServiceCard = ({ title, icon, info }) => {
	return (
		<div className="ourvalues-item-container">
			{icon}
			<h4>{title}</h4>
			<p>{info}</p>
		</div>
	);
};

export default ServiceCard;
