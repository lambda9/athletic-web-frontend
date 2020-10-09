import UserReviewCard from "./UserReviewCard";
import "./UserReviews.css";
import React, { useState } from "react";

function HomeUserReviews() {
  const items = [
    {
      id: "id-1",
      altText: "Slide 1",
      comp: <UserReviewCard />,
    },
    {
      id: "id-2",
      altText: "Slide 2",
      comp: <UserReviewCard />,
    },
    {
      id: "id-3",
      altText: "Slide 3",
      comp: <UserReviewCard />,
    },
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <div className="home-review-comp">
      <div
        className="home-review-card-slider"
        style={{
        transform: `translateX(${-activeIndex*25}vw)`,
        }}
      >
        {items.map((item) => item.comp)}
      </div>
      <button onClick={next}>prev</button>
      <button onClick={previous}>next</button>
    </div>
  );
}

export default HomeUserReviews;
