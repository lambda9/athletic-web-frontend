import React from "react";
import ProgramCarousel from "../Programs/ProgramCarousel";

const Programs = () => {
	return (
		<div>
			<h1
				css={{
					textTransform: "uppercase",
				}}
			>
				Programs Offered By Us
			</h1>
			<ProgramCarousel
				transitionDelay={2000}
				transitionDuration={500}
				width={80}
				height={30}
			/>
		</div>
	);
};

export default Programs;
