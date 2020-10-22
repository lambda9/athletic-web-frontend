/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { css, jsx } from "@emotion/core";
import ProgramSlide from "./ProgramSlide";

const Slider = ({
	images,
	transition,
	activeIndex,
	width,
	translate,
	onTransitionEnd,
}) => {
	return (
		<div
			style={{
				transition: `${transition}`,
				transform: `translateX(${translate}vw)`,
			}}
			css={css`
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
			`}
			onTransitionEnd={() => {
				console.log("trans end");
				onTransitionEnd();
			}}
		>
			{images.map((item, index) => {
				return (
					<div
						key={item.id}
						css={css`
							width: ${width}vw;
							transition: transform ease-in-out 0.5s;
							transform: scale(${index === activeIndex ? 1 + 12 / width : 1});
						`}
						onTransitionEnd={(e) => {
							e.stopPropagation();
						}}
					>
						<ProgramSlide css={{ width: "100%" }} {...item} />
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
