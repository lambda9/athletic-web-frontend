import React from "react";

import img1 from "../../Images/im1.jpg";

const Image = ({ width, height }) => {
	return (
		<div
			style={{
				width: width,
				height: height,
				border: "2px solid black",
			}}
		>
			<img src={img1} alt="gallery " />
		</div>
	);
};

export default Image;
