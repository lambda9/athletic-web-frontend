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
import Features from "./WhatWeProvide/Features";
import NewsLetter from "./NewsLetter/NewsLetter";
import LoadingSpinner from "../GlobalComponents/LoadingSpinner";
import Loader from "../GlobalComponents/Loader";

function Home() {
	return (
		<div>
			<FadingCarousel />
			{Loader(LoadingSpinner, Covid)}
			<Covid />
			<Features />
			<Programs />
			<Results />
			<OurPlans />
			<WhyJoinUs />
			<HomePageEnquiry />
			<BMI />
			<HomeUserReviews />
			<NewsLetter />
			<HomePageFAQ />
		</div>
	);
}

export default Home;
