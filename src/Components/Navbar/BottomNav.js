import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const BottomNav = ({ visible }) => {
	const links = [
		["/h", "home"],
		["programs", "programs"],
		["membership", "membership"],
		["gallery", "gallery"],
		["aboutUs", "about us"],
		["contactUs", "contact us"],
	];

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
						// <Fragment key={index}>
						<Link key={index} to={value[0]}>
							{value[1]}
						</Link>
						// <div
						// 	style={{
						// 		width: "100%",
						// 		height: "2px",
						// 		backgroundColor: "#459fb6",
						// 	}}
						// ></div>
						// </Fragment>
					);
				})}
			</div>
		</div>
	);
};

export default BottomNav;
