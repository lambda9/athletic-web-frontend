/** @jsx jsx */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useCallback } from "react";
import { css, jsx } from "@emotion/core";

const imgCss = css`
	position: absolute;
	width: 100%;
`;

const CrossFadeImage = ({ image, time }) => {
	const [prevImage, setPrevImage] = useState(image);
	const [animate, setAnimate] = useState(false);

	const updatePrevImage = () => {
		setPrevImage(image);
	};
	const callback = useCallback(updatePrevImage, [image]);
	const opacity = useProgress(animate, time, callback);
	useEffect(() => {
		if (image !== prevImage) {
			setAnimate(true);
		} else {
			setAnimate(false);
		}
	}, [image, prevImage]);

	return (
		<div
			className="crossfade-div"
			css={{
				position: "relative",
				width: "60%",
				height: "300px",
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

let useProgress = (animate, time, callback) => {
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
				} else {
					callback();
				}
			};
			rafId = requestAnimationFrame(step);
			return () => {
				cancelAnimationFrame(rafId);
			};
		}
	}, [animate, time, callback]);
	if (!animate) {
		return 0;
	}
	return Math.min(progress / time, time);
};

export default CrossFadeImage;
