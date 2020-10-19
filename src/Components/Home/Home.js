import React from "react";
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
import { features } from "./WhatWeProvide/features";
import FeatureCard from "./WhatWeProvide/FeatureCard";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Features>
				{features.map((value) => {
					return <FeatureCard {...value} />;
				})}
			</Features>
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
