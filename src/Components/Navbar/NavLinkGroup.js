import React from "react";
import { Link } from "react-router-dom";

const NavLinkGroup = (props) => {
	return (
		<div
			className="nav-links-container"
			style={{ display: props.isVisible ? "flex" : "none" }}
		>
			{/* <NavLink to={"/h"} text={"home"} /> */}
			<Link to="/h">Home</Link>
			<Link to="/programs">Programs</Link>
			<Link to="/membership">Membership</Link>
			<Link to="/gallery">Gallery</Link>
			<Link to="/aboutUs">About Us</Link>
			<Link to="/contactUs">Contact Us</Link>
		</div>
	);
};

export default NavLinkGroup;
