import React from "react";
import Slide from "./Slide";

const Slider = ({
	images,
	transition,
	activeIndex,
	width,
	translate,
	onTransitionEnd,
}) => {
	const style = {
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
						transition={transition}
						active={index === activeIndex}
					/>
				);
			})}
		</div>
	);
};

export default Slider;
