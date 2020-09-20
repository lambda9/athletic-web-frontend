import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import NavToggleButton from "./NavToggleButton";
import BottomNav from "./BottomNav";
import NavLink from "./NavLink";
import Logo from "./Logo";
import TextLogo from "./TextLogo";
import NavLinkGroup from "./NavLinkGroup";

const Navbar = () => {
	const [bottomNavOpen, setBottomNavOpen] = useState(false);
	const [navWidth, setNavWidth] = useState(window.innerWidth);
	const [navState, setNavState] = useState("full");
	const [logoSize, setLogoSize] = useState("7em");

	let location = useLocation();

	const handleWindowResize = () => {
		setNavWidth(window.innerWidth);
	};

	const handleWindowScroll = () => {
		if (window.scrollY > 300) {
			setLogoSize("4em");
		} else {
			setLogoSize("7em");
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("scroll", handleWindowScroll);
		if (navWidth < 800) {
			setNavState("small");
		} else {
			setNavState("full");
		}
		if (navWidth > 1000) {
			setBottomNavOpen(false);
		}
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [bottomNavOpen, navWidth, location]);

	return (
		<nav className="top-nav-container">
			<div className="top-nav">
				<Logo width={logoSize} />
				<TextLogo isVisible={navState !== "full" ? true : false} />
				<NavLinkGroup isVisible={navState === "full" ? true : false} />
				<NavToggleButton
					onClick={() => {
						setBottomNavOpen(!bottomNavOpen);
					}}
					isOpen={bottomNavOpen}
					isVisible={navState !== "full" ? true : false}
				/>
			</div>
			<div className="nav-bottom"></div>
			<BottomNav visible={bottomNavOpen} />
		</nav>
	);
};

export default Navbar;
