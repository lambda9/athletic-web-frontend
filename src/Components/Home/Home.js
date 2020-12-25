import React from "react";
import Loadable from "react-loadable";
import Loader from "../GlobalComponents/Loader";

import LoadingSpinner from "../GlobalComponents/LoadingSpinner";

const FadingCarousel = Loadable({
	loader: () => import("./FadingCarousel/FadingCarousel"),
	loading: LoadingSpinner,
});

const Covid = Loadable({
	loader: () => import("./Covid/Covid"),
	loading: LoadingSpinner,
});

const Features = Loadable({
	loader: () => import("./WhatWeProvide/Features"),
	loading: LoadingSpinner,
});

const Programs = Loadable({
	loader: () => import("./Programs/Programs"),
	loading: LoadingSpinner,
});

const Results = Loadable({
	loader: () => import("./WhatWeProvide/Results"),
	loading: LoadingSpinner,
});

const OurPlans = Loadable({
	loader: () => import("./OurPricingPlans/OurPlans"),
	loading: LoadingSpinner,
});

const HomePageEnquiry = Loadable({
	loader: () => import("./Enquiry/HomePageEnquiry"),
	loading: LoadingSpinner,
});

const WhyJoinUs = Loadable({
	loader: () => import("./WhyJoinUs/WhyJoinUs"),
	loading: LoadingSpinner,
});

const BMI = Loadable({
	loader: () => import("./BMI/BMI"),
	loading: LoadingSpinner,
});

const HomeUserReviews = Loadable({
	loader: () => import("./UserReviews/HomeUserReviews"),
	loading: LoadingSpinner,
});

const NewsLetter = Loadable({
	loader: () => import("./NewsLetter/NewsLetter"),
	loading: LoadingSpinner,
});

const HomePageFAQ = Loadable({
	loader: () => import("./FAQ/HomePageFAQ"),
	loading: LoadingSpinner,
});

function Home() {
	return (
		<div>
			<FadingCarousel />
			<Covid />
			{Loader("sitedata/features", Features)}
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
