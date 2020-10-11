/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";

const imgCss = css`
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
`;

const CrossFadeImage = ({ image, width, height, time }) => {
	const [prevImage, setPrevImage] = useState(image);
	const [opacity, setOpacity] = useState(1);
	const [transition, setTransition] = useState(0);

	useEffect(() => {
		if (image !== prevImage) {
			setOpacity(0);
			setTransition(time);
		} else {
			setOpacity(1);
			setTransition(0);
		}
	}, [image, prevImage, time]);

	const onTransitionEnd = () => {
		setPrevImage(image);
	};

	return (
		<div
			className="crossfade-div"
			css={{
				position: "relative",
				width: `${width}`,
				height: `${height}`,
				overflow: "hidden",
			}}
		>
			<img
				src={prevImage}
				css={[
					imgCss,
					{
						zIndex: 1,
						transition: `opacity ease-in-out ${transition / 1000}s`,
						opacity: opacity,
					},
				]}
				onTransitionEnd={onTransitionEnd}
			/>
			<img src={image} css={[imgCss, { zIndex: 0 }]} />
			<div
				css={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: "0%",
					left: "0%",
					zIndex: 2,
					backgroundImage:
						"linear-gradient(to right,#000000a6 ,#00000063 ,#000000a6)",
				}}
			></div>
		</div>
	);
};

export default CrossFadeImage;
