import React from "react";

const NavToggleButton = (props) => {
	return (
		<div
			className={`nav-toggle-container ${props.isOpen ? "change" : ""}`}
			style={{ display: props.isVisible ? "block" : "none" }}
			onClick={props.onClick}
		>
			<div className="bar bar1"></div>
			<div className="bar bar2"></div>
			<div className="bar bar3"></div>
		</div>
	);
};

export default NavToggleButton;
