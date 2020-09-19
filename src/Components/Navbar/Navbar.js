import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import NavToggleButton from "./NavToggleButton";
import BottomNav from "./BottomNav";

const Navbar = () => {
	const [color, setColor] = useState("rgba(0, 0, 0, 0.5");
	const [bottomNavOpen, setBottomNavOpen] = useState(false);
	const [navWidth, setNavWidth] = useState(-1);
	const [navPosition, setNavPosition] = useState("inherit");

	let location = useLocation();

	useEffect(() => {
		window.addEventListener("resize", () => {
			setNavWidth(window.innerWidth);
		});
		if (navWidth < 600 || bottomNavOpen || location.pathname !== "/h") {
			setNavPosition("inherit");
			setColor("black");
		} else {
			setNavPosition("fixed");
			setColor("rgba(0, 0, 0, 0.5");
		}
		if (navWidth > 1000) {
			setBottomNavOpen(false);
		}
	}, [bottomNavOpen, navWidth, location]);

	return (
		<nav>
			<div
				className="nav-main"
				style={{ backgroundColor: color, position: navPosition }}
			>
				<div className="nav-logo left-nav">
					<Link to="/">
						<img src={logo} alt={"logo"}></img>
					</Link>
				</div>
				<div className="right-nav">
					<div className="text-logo">athletic</div>
					<div className="nav-links-container">
						<Link to="/h">Home</Link>
						<Link to="/programs">Programs</Link>
						<Link to="/membership">Membership</Link>
						<Link to="/gallery">Gallery</Link>
						<Link to="/aboutUs">About Us</Link>
						<Link to="/contactUs">Contact Us</Link>
					</div>
					<div className="nav-links-container-btn">
						<button href="/">Free Trial</button>
						<button href="/">Login</button>
					</div>
					<NavToggleButton
						onClick={() => {
							setBottomNavOpen(!bottomNavOpen);
						}}
					/>
				</div>
			</div>
			<BottomNav visible={bottomNavOpen} />
		</nav>
	);
};

export default Navbar;
