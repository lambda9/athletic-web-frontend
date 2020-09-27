import React from "react";

const Image = ({ width, height, src, onClick }) => {
	return (
		<div
		onClick={onClick}
			style={{
				width: width,
				height: height,
				border: "2px solid black",
			}}
		>
			<img src={src} alt="gallery " />
		</div>
	);
};

export default Image;
