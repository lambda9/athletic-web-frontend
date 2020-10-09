import React from "react";
import CardGroup from "../CardGroup/CardGroup";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from './HomePageEnquiry';
import HomePageFAQ from '../FAQ/HomePageFAQ'
import WhyJoinUs from '../WhyJoinUs/WhyJoinUs'
import HomeUserReviews from "../UserReviews/HomeUserReviews";

function Home() {
	
	return (
		<div>
			<HeroSection />
			<CardGroup />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
			<HomeUserReviews />
		</div>
	);
}

export default Home;
