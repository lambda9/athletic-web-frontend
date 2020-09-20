import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const BottomNav = ({ visible }) => {
	const links = [
		["/h", "home"],
		["programs", "programs"],
		["membership", "membership"],
		["gallery", "gallery"],
		["aboutUs", "about us"],
		["contactUs", "contact us"],
	];

	return (
		<div
			className={visible ? "bottom-nav bottom-nav-open" : "bottom-nav"}
			style={{
				width: "100%",
				overflow: "hidden",
			}}
		>
			<div className="bottom-nav-link-container">
				{links.map((value, index) => {
					return (
						<Fragment key={index}>
							<Link to={value[0]}>{value[1]}</Link>
							<div
								style={{
									width: "100%",
									height: "2px",
									backgroundColor: "#459fb6",
								}}
							></div>
						</Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default BottomNav;
