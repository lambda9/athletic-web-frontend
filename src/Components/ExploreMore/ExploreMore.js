import React from "react";
import MiniTitle from "../GlobalComponents/Title/MiniTitle";
import { Link } from "react-router-dom";
import "./ExploreMore.css";

function ExploreMore(props) {
	const { linksArr } = props;
	return (
		<div className="explore-main-div" style={props.exploreDivStyle}>
			<MiniTitle title={"explore more"}></MiniTitle>
			<div className="explore-btn">
				{linksArr.map((item) => {
					return item ? (
						<Link
							to={`${item[0]}`}
							className="explore-link"
							style={props.exploreLinkStyples}
						>
							{item[1]}
						</Link>
					) : null;
				})}
			</div>
		</div>
	);
}

export default ExploreMore;
