import React from "react";

const Slide = ({ item, active }) => {
	return (
		<div className={active ? "active-img-div" : "inactive-img-div"}>
			<img
				className={active ? "pro-car-img-active" : "pro-car-img-unactive "}
				src={item.img}
				alt={item.title}
			></img>
		</div>
	);
};

export default Slide;
