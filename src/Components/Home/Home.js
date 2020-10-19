import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from "./HomePageEnquiry";
import HomePageFAQ from "../FAQ/HomePageFAQ";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import OurPlans from "../OurPlans/OurPlans";
import HomeUserReviews from "../UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel";
import Covid from "../Covid/Covid";
import BMI from "../BMI/BMI";
import Features from "./WhatWeProvide/Features";
import Results from "./WhatWeProvide/Results";
import Programs from "./Programs";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Covid />
      <OurPlans />
			<Features />
			<Programs />
			<Results />
			<OurPlans />
			<WhyJoinUs />
			<HomePageEnquiry />
			<BMI />
			<HomePageFAQ />
			<HomeUserReviews />
		</div>
	);
}

export default Home;
