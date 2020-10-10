import React from "react";
import CardGroup from "../CardGroup/CardGroup";
import HeroSection from "../HeroSection/HeroSection";
import HomeSubscribe from "../SubscribeNewsLetter/HomeSubscribe";
import FadingCarousel from "./FadingCarousel";


function Home() {
	return (
		<div>
			<FadingCarousel />
			<CardGroup />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
			<HomeSubscribe />
		</div>
	);
}

export default Home;
