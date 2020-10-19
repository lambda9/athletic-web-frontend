import React from "react";
import "./Title.css";

function Title(props) {
	return (
		<div className="title">
			<h4>{props.children}</h4>
			<div className="baseline">
				<div className="title-mask"></div>
				<div className="title-mask"></div>
				<div className="title-mask title-mask-center"></div>
				<div className="title-mask"></div>
				<div className="title-mask"></div>
			</div>
		</div>
	);
}

export default Title;
