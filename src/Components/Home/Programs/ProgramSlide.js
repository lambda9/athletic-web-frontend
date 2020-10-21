/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";

const ProgramSlide = React.memo(({ className, img, title }) => {
	return (
		<div
			className={className}
			css={{
				width: "100%",
				position: "relative",
				margin: "auto",
			}}
		>
			<img width={"100%"} src={img} alt={title}></img>
			<div
				className="programs-image-overlay"
				style={{
					position: "absolute",
				}}
			>
				<h3>{title}</h3>
			</div>
		</div>
	);
});

export default ProgramSlide;
