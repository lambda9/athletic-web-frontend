/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import React from "react";

import Image from "./Image";

const imgCss = css`
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
`;

const CrossFadeImage = React.memo(({ image, width, height, time }) => {
	console.log("render again");
	const [prevImage, setPrevImage] = useState(image);
	const [animate, setAnimate] = useState(false);
	const progress = useProgress(animate, time);

	useEffect(() => {
		if (image !== prevImage) {
			setAnimate(true);
		} else {
			setAnimate(false);
		}
	}, [image, prevImage]);

	useEffect(() => {
		console.log("opactiry", progress);
		if (progress >= 1) {
			setPrevImage(image);
		}
	}, [progress, image]);

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
			<Image
				src={prevImage}
				css={[imgCss, { opacity: 1 - progress, zIndex: 1 }]}
				id={0}
			/>
			<Image src={image} css={[imgCss, { zIndex: 0 }]} id={1} />
			<div
				css={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: "0%",
					left: "0%",
					zIndex: 2,
					backgroundImage:
						"linear-gradient(to right,#000000d4 2%,transparent ,#000000d1 98%)",
				}}
			></div>
		</div>
	);
});

let useProgress = (animate, time) => {
	let [progress, setProgress] = useState(0);
	useEffect(() => {
		if (animate) {
			let rafId = null;
			let start = null;
			let step = (timestamp) => {
				if (!start) {
					start = timestamp;
				}
				let progress = timestamp - start;
				setProgress(progress);
				if (progress < time) {
					rafId = requestAnimationFrame(step);
				}
			};
			rafId = requestAnimationFrame(step);
			return () => {
				cancelAnimationFrame(rafId);
			};
		} else {
			setProgress(1);
		}
	}, [animate, time]);
	if (animate) {
		return Math.min(progress / time, time);
	} else {
		return 0;
	}
};

export default CrossFadeImage;
