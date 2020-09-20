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
	const [scroll, setScroll] = useState(window.scrollY);
	const [navState, setNavState] = useState("full");
	const [logoSize, setLogoSize] = useState("7em");

	const handleWindowResize = () => {
		setNavWidth(window.innerWidth);
	};

	const handleWindowScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		if (scroll > 300 || navState === "small") {
			setLogoSize("4em");
			document.querySelector(".main-content").style.paddingTop = "65px";
		} else if (scroll < 300 && navState === "full") {
			setLogoSize("7em");
			document.querySelector(".main-content").style.paddingTop = "100px";
		}
	}, [navState, scroll]);

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("scroll", handleWindowScroll);
		if (navWidth < 800) {
			setNavState("small");
		} else {
			setNavState("full");
			setBottomNavOpen(false);
		}
		return () => {
			window.removeEventListener("resize", handleWindowResize);
			window.removeEventListener("scroll", handleWindowScroll);
		};
	}, [navWidth]);

	return (
		<nav className="top-nav-container">
			<div className="top-nav">
				<Logo width={logoSize} />
				<TextLogo isVisible={navState !== "full" ? true : false} />
				<NavLinkGroup isVisible={navState === "full" ? true : false} />
				<div className="nav-btn-grp">
					<button className="button-primary">free trial</button>
					<button className="button-primary">login</button>
				</div>
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
