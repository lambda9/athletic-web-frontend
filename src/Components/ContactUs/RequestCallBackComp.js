import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./RequestCallBackComp.css";
import Title from "../GlobalComponents/Title/Title";
import Form from "../GlobalComponents/Form";

// git => get in touch
// rac => request a call back

function RequestCallBackComp() {
	const [entryData, setentryData] = useState({
		name: "",
		email: "",
		phoneNum: "",
		subject: "",
		message: "",
	});

	const inputDt = [
		{
			id: "id_1",
			type: "text",
			name: "name",
			label: "Name",
			value: entryData.name,
		},
		{
			id: "id_2",
			type: "email",
			name: "email",
			label: "Email",
			value: entryData.email,
		},
		{
			id: "id_3",
			type: "tel",
			name: "phoneNum",
			label: "Phone Number",
			value: entryData.phoneNum,
		},
		{
			id: "id_4",
			type: "text",
			name: "subject",
			label: "Subject",
			value: entryData.subject,
		},
		{
			id: "id_5",
			type: "textarea",
			name: "message",
			label: "Message",
			value: entryData.message,
		},
	];

	const handleChange = (event) => {
		var name = event.target.name;
		var value = event.target.value;
		console.log(name, value);
		setentryData({ ...entryData, [name]: value });
		event.preventDefault();
	};

	const handleSubmit = (event) => {
		console.log(entryData);
	};

	const handleReset = (event) => {
		setentryData({
			name: "",
			email: "",
			phoneNum: "",
			subject: "",
			message: "",
		});

		event.preventDefault();
	};

	return (
		<div className="cont-rac-main-div">
			<div className="cont-rac-text-div">
				<Title>Request a call back</Title>
				<span>We are always ready to hear from you</span>
				<br></br>
				<span>
					Fill out this form and we'll reach you within 24 hours on weekdays and
					48 hours on weekends
				</span>
			</div>

			<div className="cont-rac-form-div">
				<div className="cont-rac-left-div">
					<Form
						inputDt={inputDt}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						handleReset={handleReset}
					/>
				</div>

				<div className="cont-rac-right-div">
					<Link to="/franchise">Want to own a Franchise?</Link>
					<Link to="/advertise">Advertise with us</Link>
				</div>
			</div>
		</div>
	);
}

export default RequestCallBackComp;
