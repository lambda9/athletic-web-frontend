import React, { useEffect } from "react";
import { useState } from "react";
import Slide from "./Slide";

const Slider = ({
	images,
	transition,
	activeIndex,
	transitionDelay,
	width,
	translate,
	onTransitionEnd,
}) => {
	const style = {
		// transition: "tranform ease-in-out 0.5s",
		// transition: animate ? `transform ease-in-out 0.5s` : "none",
		transition: transition,
		transform: `translateX(${translate}vw)`,
	};

	return (
		<div
			className="pro-car-img-div"
			style={style}
			onTransitionEnd={onTransitionEnd}
		>
			{images.map((item, index) => {
				return (
					<Slide
						key={item.id}
						item={item}
						width={`${width}vw`}
						active={index === activeIndex}
					/>
				);
			})}
		</div>
	);
};

export default Slider;
