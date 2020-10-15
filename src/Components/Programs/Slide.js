import React from "react";

const Slide = ({ item, active, width, transition }) => {
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
			<div
				className={active ? "pro-car-img-active" : "pro-car-img-unactive "}
				style={{
					transition: transition,
					position: "relative",
				}}
			>
				<img src={item.img} alt={item.title}></img>
				<div
					className="programs-image-overlay"
					style={{
						position: "absolute",
					}}
				>
					<h3>{item.title}</h3>
				</div>
			</div>
		</div>
	);
};

export default Slide;
