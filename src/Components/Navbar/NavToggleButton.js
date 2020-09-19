import React from "react";
import "./Navbar.css";

const NavToggleButton = ({ onClick }) => {
	return (
		<div className="nav-toggle-container" onClick={onClick}>
			<div className="bar bar1"></div>
			<div className="bar bar2"></div>
			<div className="bar bar3"></div>
		</div>
	);
};

export default NavToggleButton;
