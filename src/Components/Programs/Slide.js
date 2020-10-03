import React from "react";

const Slide = ({ item, active, width }) => {
	let className = active ? "active-img-div" : "inactive-img-div";
	return (
		<div
			className={`${className} img-div`}
			style={{
				width: width,
			}}
		>
			<img
				className={active ? "pro-car-img-active" : "pro-car-img-unactive "}
				src={item.img}
				alt={item.title}
				onTransitionEnd={(e) => {
					e.stopPropagation();
				}}
			></img>
		</div>
	);
};

export default Slide;
