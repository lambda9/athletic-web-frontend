import React from "react";
import HomePageEnquiry from "./Enquiry/HomePageEnquiry";
import HomePageFAQ from "./FAQ/HomePageFAQ";
import WhyJoinUs from "./WhyJoinUs/WhyJoinUs";
import OurPlans from "./OurPricingPlans/OurPlans";
import HomeUserReviews from "./UserReviews/HomeUserReviews";
import FadingCarousel from "./FadingCarousel/FadingCarousel";
import Covid from "./Covid/Covid";
import BMI from "./BMI/BMI";
import Results from "./WhatWeProvide/Results";
import Programs from "./Programs/Programs";
import { features } from "./WhatWeProvide/featuresData";
import FeatureCard from "./WhatWeProvide/FeatureCard";
import Slider from "../GlobalComponents/Slider/Slider";

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Covid />
			<Slider smallScreen={1} mediumScreen={2} largeScreen={3}>
				{features.map((value) => {
					return <FeatureCard {...value} key={value.id} />;
				})}
			</Slider>
			<OurPlans />
			<Programs />
			<Results />
			<WhyJoinUs />
			<HomePageEnquiry />
			<BMI />
			<HomeUserReviews />
			<HomePageFAQ />
		</div>
	);
}

export default Home;
