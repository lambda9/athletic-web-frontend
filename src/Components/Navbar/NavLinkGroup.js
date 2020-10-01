import React from "react";
import { Link } from "react-router-dom";

const NavLinkGroup = (props) => {
	return (
		<div
			className="nav-links-container"
			style={{ display: props.isVisible ? "flex" : "none" }}
		>
			{props.links.map((value, index) => {
				return (
					<Link
						key={index}
						to={value[0]}
						id={props.currentLink === value[0] ? "nav-link-active" : ""}
					>
						{value[1]}
					</Link>
				);
			})}
			
		</div>
	);
};

export default NavLinkGroup;
