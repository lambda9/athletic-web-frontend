import React from "react";
import {
	BsFlagFill,
	RiTeamFill,
	BsGearWideConnected,
	MdHeadsetMic,
} from "react-icons/all";
import Title from "../Title/Title";
import ServiceCard from "./ServiceCard";

function OurValues() {
	const services = [
		{
			icon: <RiTeamFill className="services-item-icon" />,
			title: "Team Work",
			info:
				"We are committed to common goals. Effective communication and accountability makes our team achieve greater results.",
		},
		{
			icon: <BsGearWideConnected className="services-item-icon" />,
			title: "Innovation",
			info: "We train smart not hard with our best techinques and innovation.",
		},

		{
			icon: <BsFlagFill className="services-item-icon" />,
			title: "Be the change",
			info:
				"We believe that we should all take ownership and have the courage to lead change.",
		},
		{
			icon: <MdHeadsetMic className="services-item-icon" />,
			title: "Customer Service",
			info:
				"Customers are our priority. We are passionate about delivering exceptional, personalised customer service to all.",
		},
	];

	return (
		<div className="services">
			<Title>Our values</Title>
			<div className="services-center">
				{services.map((item, index) => {
					return (
						<ServiceCard
							key={index}
							title={item.title}
							icon={item.icon}
							info={item.info}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default OurValues;
