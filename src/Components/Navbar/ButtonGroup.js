import React from "react";

const ButtonGroup = (props) => {
	return (
		<div
			className="nav-btn-grp"
			style={{ display: props.isVisible ? "flex" : "none" }}
		>
			<button className="button-primary">free trial</button>
			<button className="button-primary">login</button>
		</div>
	);
};

export default ButtonGroup;
