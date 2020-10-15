/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
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
			css={css`
				transition: ${transition};
				transform: translateX(${translate}vw);
				display: flex;
				align-items: center;
				width: fit-content;
				height: 90%;
				& > div {
					padding: 3vw;
					z-index: 0;
				}
				& img {
					width: 100%;
				}
				@media (max-width: 900px) {
					& > div {
						padding: 0.5vw;
					}
				}
			`}
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
