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
	const [animate, setAnimate] = useState(false);
	const opacity = useProgress(animate, time);

	useEffect(() => {
		if (image !== prevImage) {
			setAnimate(true);
		} else {
			setAnimate(false);
		}
	}, [image, prevImage]);

	useEffect(() => {
		if (opacity >= 1) {
			setPrevImage(image);
		}
	}, [opacity, image]);

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
				css={[imgCss, { zIndex: 3, opacity: 1 - opacity }]}
				src={prevImage}
			/>
			<img css={[imgCss, { zIndex: 0 }]} src={image} />
		</div>
	);
};

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
			setProgress(0);
		}
	}, [animate, time]);
	return Math.min(progress / time, time);
};

export default CrossFadeImage;
