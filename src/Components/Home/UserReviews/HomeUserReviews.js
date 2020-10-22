import UserReviewCard from "./UserReviewCard";
import "./UserReviews.css";
import React, { useState, useEffect } from "react";
import Slider from "../../GlobalComponents/Slider/Slider";

function HomeUserReviews() {
	const items = [
		{
			id: 1,
			altText: "Slide 1",
		},
		{
			id: 2,
			altText: "Slide 2",
		},
		{
			id: 3,
			altText: "Slide 3",
		},
	];
	return (
		<Slider width={80} smallScreen={1} mediumScreen={1} largeScreen={1}>
			{items.map((item) => {
				return <UserReviewCard key={item.id} />;
			})}
		</Slider>
	);
}

export default HomeUserReviews;
