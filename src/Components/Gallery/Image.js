import React from "react";

const Image = ({ active, src, onClick }) => {
	return (
		<div onClick={onClick} className={active ? "active-thumbnail" : ""}>
			<img src={src} alt="gallery " />
		</div>
	);
};

export default Image;
