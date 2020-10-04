import React from "react";
import Carousel from "../Carousel/Carousel";
import CardGroup from "../CardGroup/CardGroup";
import Navbar from "../Navbar/Navbar";
import img1 from "../../Images/Carousel/img1.jpg";
import img2 from "../../Images/Carousel/img2.jpg";
import img3 from "../../Images/Carousel/img3.jpg";
import img4 from "../../Images/Carousel/img4.jpg";
import HomePageEnquiry from '../Home/HomePageEnquiry'

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
			<CardGroup />
			<HomePageEnquiry />
		</div>
	);
}

export default Home;
