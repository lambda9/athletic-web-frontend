import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ title, icon, info }) => {
	return (
		<div className="services-item-container">
			{icon}
			<h4>{title}</h4>
			<p>{info}</p>
		</div>
	);
};

export default ServiceCard;
