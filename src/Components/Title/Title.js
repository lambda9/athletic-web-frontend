import React from "react";
import "./Title.css";

function Title(props) {
	return (
		<div className="title">
			<h4>{props.children}</h4>
			<div className="baseline">
				{" "}
				<div className="title-mask title-mask1"></div>
				<div className="title-mask title-mask2"></div>
				<div className="title-mask title-mask3"></div>
				<div className="title-mask title-mask4"></div>
			</div>
		</div>
	);
}

export default Title;
