import React from "react";
import Carousel from "../Carousel/Carousel";
import CardGroup from "../CardGroup/CardGroup";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import img1 from "../../Images/Carousel/img1.jpg";
import img2 from "../../Images/Carousel/img2.jpg";
import img3 from "../../Images/Carousel/img3.jpg";
import img4 from "../../Images/Carousel/img4.jpg";
import Title from "../Title/Title";
import ProgramCarousel from "../../Components/Programs/ProgramCarousel";

function Home() {
	const images = [img1, img2, img3, img4];

	return (
		<div>
			<Carousel
				images={images}
				width={100}
				heightToWidthRatio={0.43}
				slideDelay={2000}
				transitionDelay={1000}
			/>
			<div
				className="our-programs-title"
				style={{
					padding: "2em 0em",
				}}
			>
				<Title>Our Programs</Title>
			</div>
			<ProgramCarousel transitionDelay={2000} transitionDuration={500} />
			<Link to="/programs" className="button-primary">
				Checkout More
			</Link>
			<CardGroup />
		</div>
	);
}

export default Home;
