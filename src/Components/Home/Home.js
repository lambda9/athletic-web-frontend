import React from "react";
import HomePageEnquiry from "./Enquiry/HomePageEnquiry";
import HomePageFAQ from "./FAQ/HomePageFAQ";
import WhyJoinUs from "./WhyJoinUs/WhyJoinUs";
import OurPlans from "./OurPricingPlans/OurPlans";
import HomeUserReviews from "./UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel/FadingCarousel";
import Covid from "./Covid/Covid";
import BMI from "./BMI/BMI";
import Features from "./WhatWeProvide/Features";
import Results from "./WhatWeProvide/Results";
import Programs from "./Programs/Programs";
import { features } from "./WhatWeProvide/featuresData";
import FeatureCard from "./WhatWeProvide/FeatureCard";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Covid />
			<Features>
				{features.map((value) => {
					return <FeatureCard {...value} />;
				})}
			</Features>
			<OurPlans />
			<Programs />
			<Results />
			<WhyJoinUs />
			<HomePageEnquiry />
			<BMI />
			<HomePageFAQ />
			<HomeUserReviews />
		</div>
	);
}

export default Home;
