import userEvent from "@testing-library/user-event";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const NavToggleButton = ({ onClick }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={`nav-toggle-container ${isOpen ? "change" : ""}`}
			onClick={() => {
				setIsOpen(!isOpen);
				onClick();
			}}
		>
			<div className="bar bar1"></div>
			<div className="bar bar2"></div>
			<div className="bar bar3"></div>
		</div>
	);
};

export default NavToggleButton;
