import React from "react";
import ProgramCarousel from "./ProgramCarousel";

const Programs = () => {
	return (
		<div>
			<h2
				css={{
					textTransform: "uppercase",
				}}
			>
				Programs Offered By Us
			</h2>
			<p>We offer wide variety of programs.</p>
			<ProgramCarousel
				transitionDelay={2000}
				transitionDuration={500}
				width={90}
				imageWidth={30}
				height={70}
			/>
		</div>
	);
};

export default Programs;
