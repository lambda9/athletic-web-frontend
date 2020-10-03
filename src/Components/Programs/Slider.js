import React, { useEffect } from "react";
import { useState } from "react";
import Slide from "./Slide";

const Slider = ({
	images,
	animate,
	activeIndex,
	transitionDelay,
	width,
	translate,
	onTransitionEnd,
}) => {
	console.log("re render", animate);
	const style = {
		// transition: "tranform ease-in-out 0.5s",
		transition: animate ? `transform ease-in-out 0.5s` : "none",
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
						key={item.img}
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
