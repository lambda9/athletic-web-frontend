import React from "react";

const Image = ({ active, width, height, src, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={active ? "active-thumbnail" : ""}
			style={{
				width: width,
				height: height,
				// border: "2px solid black",
			}}
		>
			<img src={src} alt="gallery " />
		</div>
	);
};

export default Image;
