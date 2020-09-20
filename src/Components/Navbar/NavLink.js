import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, text }) => {
	return (
		<div className="nav-link">
			<Link to={to}>{text}</Link>
		</div>
	);
};

export default NavLink;
