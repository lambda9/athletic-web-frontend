import React, { Component } from "react";
import Hero from "../GlobalComponents/Hero";
import bgImg from "../../Images/im9.jpg";
import ReachUs from "./ReachUs";
import RequestCallBackComp from "./RequestCallBackComp";

class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeState: "rac",
		};
	}

	handleState = (value) => {
		this.setState({
			activeState: value,
		});
	};

	render() {
		return (
			<div>
				<Hero
					bgImg={bgImg}
					title="Contact us"
					description="Mail, call, text or meet on-site"
				></Hero>
				<ReachUs />
				<RequestCallBackComp />{" "}
			</div>
		);
	}
}

export default ContactUs;
