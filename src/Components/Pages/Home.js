import React from "react";
import Carousel from "../Carousel/Carousel";
import CardGroup from "../CardGroup/CardGroup";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import img1 from "../../Images/Carousel/img1.jpg";
import img2 from "../../Images/Carousel/img2.jpg";
import img3 from "../../Images/Carousel/img3.jpg";
import img4 from "../../Images/Carousel/img4.jpg";
import landingBackdrop from "../../Images/landingBackdrop.png";
import HeroSection from "../HeroSection/HeroSection";
import Title from "../Title/Title";
import ProgramCarousel from "../../Components/Programs/ProgramCarousel";
import HomePageEnquiry from '../Home/HomePageEnquiry';

function Home() {
	
	return (
		<div>
			<HeroSection />
			<CardGroup />
			<HomePageEnquiry />
		</div>
	);
}

export default Home;
