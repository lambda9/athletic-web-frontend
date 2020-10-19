import React from "react";
// import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from "./HomePageEnquiry";
import HomePageFAQ from "../FAQ/HomePageFAQ";
import WhyJoinUs from "../WhyJoinUs/WhyJoinUs";
import OurPlans from "../OurPlans/OurPlans";
import HomeUserReviews from "../UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel";
import BMI from "../BMI/BMI";
import Features from "./WhatWeProvide/Features";
import Results from "./WhatWeProvide/Results";
import Programs from "./Programs";
// import Equipments from "./WhatWeProvide/Equipments";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Features>
				<h1>hello</h1>
				<h1>cycle</h1>
				<h1>hi ello</h1>
				<h1>kya baar hai</h1>
				<h1>world</h1>
			</Features>
			{/* <Equipments /> */}
			<Programs />
			<Results />
			<OurPlans />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
			<HomeUserReviews />
			<BMI />
		</div>
	);
}

export default Home;
