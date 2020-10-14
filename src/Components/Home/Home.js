import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from './HomePageEnquiry';
import HomePageFAQ from '../FAQ/HomePageFAQ'
import WhyJoinUs from '../WhyJoinUs/WhyJoinUs'
import OurPlans from "../OurPlans/OurPlans";
import HomeUserReviews from "../UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel";
import BMI from "../BMI/BMI";


function Home() {
	return (
		<div>
			<FadingCarousel />
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
