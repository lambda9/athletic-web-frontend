import React from "react";

const Slide = ({ item, active, width }) => {
	return (
		<div
			className={"slide-container"}
			style={{
				width: width,
			}}
			onTransitionEnd={(e) => {
				e.stopPropagation();
			}}
		>
			<img
				className={active ? "pro-car-img-active" : "pro-car-img-unactive "}
				src={item.img}
				alt={item.title}
			></img>
		</div>
	);
};

export default Slide;
