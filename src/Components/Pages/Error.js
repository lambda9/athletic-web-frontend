import React from "react";
import Hero from "../GlobalComponents/Hero";
import bgImg from "../../Images/im2.jpg";

function Error() {
	return (
		<div>
			<Hero
				bgImg={bgImg}
				title="404 page not found"
				descrption="invalid url"
			></Hero>
		</div>
	);
}

export default Error;
