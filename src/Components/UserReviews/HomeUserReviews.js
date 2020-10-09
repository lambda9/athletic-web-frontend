import UserReviewCard from "./UserReviewCard";
import "./UserReviews.css";
import React, { useState } from "react";

function HomeUserReviews() {
	console.log("rendre");
	const items = [
		{
			id: 1,
			altText: "Slide 1",
			comp: <UserReviewCard key={1} />,
		},
		{
			id: 2,
			altText: "Slide 2",
			comp: <UserReviewCard key={2} />,
		},
		{
			id: 3,
			altText: "Slide 3",
			comp: <UserReviewCard key={3} />,
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const next = () => {
		console.log("active index", activeIndex);
		setActiveIndex((activeIndex) => (activeIndex + 1) % items.length);
	};

	const previous = () => {
		setActiveIndex((activeIndex) => {
			activeIndex -= 1;
			if (activeIndex < 0) {
				activeIndex = items.length - 1;
			}
			return activeIndex;
		});
	};

	const goToIndex = (newIndex) => {
		setActiveIndex(newIndex);
	};

	return (
		<div className="home-review-comp">
			<div
				className="home-review-card-slider"
				style={{
					transform: `translateX(${-activeIndex * 50}vw)`,
				}}
			>
				{items.map((item) => item.comp)}
			</div>
			<button onClick={previous}>prev</button>
			<button onClick={next}>next</button>
		</div>
	);
}

export default HomeUserReviews;
