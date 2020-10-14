import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from "./HomePageEnquiry";
import HomePageFAQ from "../FAQ/HomePageFAQ";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import OurPlans from "../OurPlans/OurPlans";
import HomeUserReviews from "../UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel";
import Features from "./WhatWeProvide/Features";
import Results from "./WhatWeProvide/Results";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Features />
			<Results />
			<OurPlans />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
			<HomeUserReviews />
		</div>
	);
}

export default Home;
