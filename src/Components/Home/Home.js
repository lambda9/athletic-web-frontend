import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import HomePageEnquiry from './HomePageEnquiry';
import HomePageFAQ from '../FAQ/HomePageFAQ'
import WhyJoinUs from '../WhyJoinUs/WhyJoinUs'
import OurPlans from "../OurPlans/OurPlans";

function Home() {
	
	return (
		<div>
			<HeroSection />
			<OurPlans />
			<WhyJoinUs />
			<HomePageEnquiry />
			<HomePageFAQ />
		</div>
	);
}

export default Home;
