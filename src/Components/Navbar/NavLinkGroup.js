/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import ButtonGroup from "./ButtonGroup";

const NavLinkGroup = (props) => {
	return (
		<div className={props.className}>
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
