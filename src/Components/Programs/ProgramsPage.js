import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im8.jpg";
import ProgramCarousel from "./ProgramCarousel";

class OurPrograms extends Component {
	render() {
		return (
			<div>
				<Hero
					bgImg={bgImg}
					title="Our programs"
					description="keep your energy up and burn calories"
				></Hero>

				<ProgramCarousel transitionDelay={2000} transitionDuration={500} />
			</div>
		);
	}
}

export default OurPrograms;
