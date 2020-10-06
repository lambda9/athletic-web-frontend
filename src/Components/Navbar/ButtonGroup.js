import React from "react";
import { Link } from "react-router-dom";

const ButtonGroup = () => {
	return (
		<div className="nav-btn-grp">
			<Link to="/freetrial" className="button-primary">
				free trial
			</Link>
			<Link className="button-primary" to='/'>login</Link>
		</div>
	);
};

export default ButtonGroup;
