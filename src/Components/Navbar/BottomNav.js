import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const BottomNav = ({ visible, links, currentLink, onLinkClick }) => {
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const [overflowHeight, setOverflowHeight] = useState(visible ? 300 : 0);

	const onWindowResize = () => {
		console.log("height", window.innerHeight);
		setWindowHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener("resize", onWindowResize);
		if (windowHeight <= 370 && visible) {
			setOverflowHeight(windowHeight - 70);
		} else {
			setOverflowHeight(300);
		}
		return () => {
			window.removeEventListener("resize", onWindowResize);
		};
	});

	return (
		<div
			className={"bottom-nav"}
			style={{
				height: `${visible ? overflowHeight : 0}px`,
			}}
		>
			<div className="bottom-nav-link-container">
				{links.map((value, index) => {
					return (
						<Link
							onClick={onLinkClick}
							key={index}
							to={value[0]}
							id={currentLink === value[0] ? "nav-link-active" : ""}
						>
							{value[1]}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default BottomNav;
