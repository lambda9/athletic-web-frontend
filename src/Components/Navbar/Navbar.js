import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLinkGroup from "./NavLinkGroup";
import ButtonGroup from "./ButtonGroup";

import "./Navbar.css";
const Navbar = () => {
	const [scroll, setScroll] = useState(window.scrollY);
	const prevScroll = useRef(0);
	const rightNav = useRef(null);

	const links = [
		["/", "home"],
		["/programs", "programs"],
		["/membership", "membership"],
		["/gallery", "gallery"],
		["/aboutUs", "about us"],
		["/contactUs", "contact us"],
	];

	const location = useLocation();

	const handleWindowScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleWindowScroll);
		return () => {
			window.removeEventListener("scroll", handleWindowScroll);
		};
	}, []);

	useEffect(() => {
		prevScroll.current = scroll;
	}, [scroll]);

	return (
		<nav
			className="nav-container"
			style={{
				top: scroll > 200 && scroll > prevScroll.current ? "-15%" : "0%",
				background:
					scroll > 200
						? ""
						: "linear-gradient(180deg, #000000, rgba(0, 0, 0, 0))",
				backgroundColor: scroll > 200 ? "black" : "",
				boxShadow: scroll > 200 ? "0 0 12px 0px #141414" : "",
			}}
		>
			<div className="top-nav">
				<Logo />
				<div
					ref={rightNav}
					className="right-nav"
					onMouseEnter={(e) => {
						console.log(e.clientX);
						let rect = rightNav.current.getBoundingClientRect();
						console.log(rect);
						if (e.clientX > rect.left && e.clientX < rect.left + 150) {
							rightNav.current.scrollLeft = 0;
						} else if (e.clientX < rect.right && e.clientX > rect.right - 150) {
							rightNav.current.scrollLeft = 400;
						}
					}}
				>
					<NavLinkGroup
						currentLink={location.pathname}
						links={links}
						className={"nav-link-group"}
					/>
					<ButtonGroup />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
