import React from "react";
import CardGroup from "../CardGroup/CardGroup";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from "./HomePageEnquiry";
import HomePageFAQ from "../FAQ/HomePageFAQ";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import FadingCarousel from "./FadingCarousel";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<CardGroup />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
		</div>
	);
}

export default Home;
