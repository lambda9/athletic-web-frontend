import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

const Logo = (props) => {
	return (
		<div className="nav-logo">
			<Link to="/">
				<img src={logo} alt={"logo"} style={{ width: props.width }}></img>
			</Link>
		</div>
	);
};

export default Logo;
