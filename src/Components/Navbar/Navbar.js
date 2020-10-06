import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavToggleButton from "./NavToggleButton";
import BottomNav from "./BottomNav";
import Logo from "./Logo";
import TextLogo from "./TextLogo";
import NavLinkGroup from "./NavLinkGroup";
import ButtonGroup from "./ButtonGroup";

import "./Navbar.css";
const SMALL = 0;
const LARGE = 1;
const SMALL_LOGO = "5em";
const LARGE_LOGO = "5em";

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [scroll, setScroll] = useState(window.scrollY);
	const [navWidth, setNavWidth] = useState(SMALL);
	const [logoSize, setLogoSize] = useState(LARGE_LOGO);
	const [bottomNavOpen, setBottomNavOpen] = useState(false);
	const [btnGroupVisible, setBtnGroupVisible] = useState(true);

	const prevScroll = useRef(0);

	const links = [
		["/", "home"],
		["/programs", "programs"],
		["/membership", "membership"],
		["/gallery", "gallery"],
		["/aboutUs", "about us"],
		["/contactUs", "contact us"],
	];

	const location = useLocation();

	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};

	const handleWindowScroll = () => {
		setScroll(window.scrollY);
	};

	const onLinkClick = () => {
		setBottomNavOpen(false);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		window.addEventListener("scroll", handleWindowScroll);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
			window.removeEventListener("scroll", handleWindowScroll);
		};
	}, []);

	useEffect(() => {
		console.log("prev", prevScroll.current, scroll);
		prevScroll.current = scroll;
		if (windowWidth < 1000) {
			setLogoSize(SMALL_LOGO);
			setNavWidth(SMALL);
			// document.querySelector(".main-content").style.paddingTop = "0";
		} else {
			setNavWidth(LARGE);
			setBottomNavOpen(false);
			if (scroll > 300) {
				setLogoSize(SMALL_LOGO);
				// document.querySelector(".main-content").style.paddingTop = "0";
			} else {
				setLogoSize(LARGE_LOGO);
				// document.querySelector(".main-content").style.paddingTop = "0";
			}
		}
		if (windowWidth < 500) {
			setBtnGroupVisible(false);
		} else {
			setBtnGroupVisible(true);
		}
	}, [windowWidth, scroll]);

	return (
		<nav
			className="nav-container"
			style={{
				top: scroll > 0 && scroll > prevScroll.current ? "-15%" : "0%",
			}}
		>
			<div className="top-nav">
				<Logo width={logoSize} />
				<TextLogo isVisible={navWidth !== LARGE ? true : false} />
				<div className="right-nav">
					<NavLinkGroup
						isVisible={true}
						currentLink={location.pathname}
						links={links}
						className={"nav-link-group"}
					/>
					<ButtonGroup isVisible={true} />
					{/* <ButtonGroup />
					<NavToggleButton
						onClick={() => {
							setBottomNavOpen(!bottomNavOpen);
						}}
						isOpen={bottomNavOpen}
						isVisible={true}
					/> */}
				</div>
			</div>
			{/* <BottomNav
				links={links}
				currentLink={location.pathname}
				visible={bottomNavOpen}
				onLinkClick={onLinkClick}
			/> */}
		</nav>
	);
};

export default Navbar;
