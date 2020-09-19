import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import NavToggleButton from "./NavToggleButton";
import BottomNav from "./BottomNav";

const Navbar = () => {
	const [color, setColor] = useState("rgba(0, 0, 0, 0.5)");
	const [bottomNavOpen, setBottomNavOpen] = useState(false);

	useEffect(() => {
		if (bottomNavOpen) {
			setColor("black");
		} else {
			setColor("rgba(0, 0, 0, 0.5)");
		}
	}, [bottomNavOpen]);

	return (
		<nav>
			<div className="nav-main" style={{ backgroundColor: color }}>
				<div className="nav-logo left-nav">
					<Link to="/">
						<img src={logo} alt={"logo"}></img>
					</Link>
				</div>
				<div className="right-nav">
					<div className="nav-links-container">
						<Link to="/">Home</Link>
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
				{/* <div className="nav-toggle-btn" onClick={this.props.toggleFun}>
					<div className={"bar1"}></div>
					<div
					className={this.props.sideNavState ? "bar2 change2" : "bar2"}
					></div>
					<div
					className={this.props.sideNavState ? "bar3 change3" : "bar3"}
					></div>
				</div> */}
			</div>
			<BottomNav visible={bottomNavOpen} />
		</nav>
	);
};

export default Navbar;
