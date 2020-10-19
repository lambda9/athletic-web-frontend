import React, { useState, useEffect } from "react";
import "./Progress.css";

const ProgressBar = ({ animate, time }) => {
	let progress = useProgress(animate, time);

	return (
		<div>
			<div
				className="progressBar"
				style={{
					width: `${progress * 100}%`,
					display: `${progress > 1 ? "none" : "block"}`,
				}}
			></div>
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
				if (!start) start = timestamp;
				let progress = timestamp - start;
				setProgress(progress);
				if (progress < time) {
					rafId = requestAnimationFrame(step);
				}
			};
			rafId = requestAnimationFrame(step);
			return () => cancelAnimationFrame(rafId);
		}
	}, [animate, time]);

	return animate ? Math.min(progress / time, time) : 0;
};

export default ProgressBar;
