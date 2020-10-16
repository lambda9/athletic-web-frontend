import React, { Component } from "react";
import Hero from "../Hero";
import bgImg from "../../Images/im8.jpg";
import ProgramCarousel from "./ProgramCarousel";
import ExcerciseCard from "./ExcerciseCard";
class OurPrograms extends Component {
	render() {
		return (
			<div>
				<Hero
					bgImg={bgImg}
					title="Our programs"
					description="keep your energy up and burn calories"
				></Hero>
				<ExcerciseCard />
			</div>
		);
	}
}

export default OurPrograms;
