import React, { Component } from "react";

const BottomNav = ({ visible }) => {
	return (
		<div
			style={{
				display: visible ? "block" : "none",
				width: "100%",
				height: "200px",
				top: "-50%",
				// zIndex: 1,
				border: "1px solid white",
			}}
		>
			this is bootom
		</div>
	);
};

export default BottomNav;
