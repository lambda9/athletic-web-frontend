import React from "react";
import "./Banner.css";
import Title from "./Title/Title";
import { Link } from "react-router-dom";

function Banner(props) {
	return (
		<div className="banner">
			<Title>{props.title}</Title>
			<p>{props.description}</p>
			<Link to="/" className="button-primary">
				Back to Home
			</Link>
		</div>
	);
}

export default Banner;
