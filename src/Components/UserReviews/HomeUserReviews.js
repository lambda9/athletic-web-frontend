import UserReviewCard from "./UserReviewCard";
import "./UserReviews.css";
import React, { useState, useEffect } from "react";

function HomeUserReviews() {
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
  const [check, setCheck] = useState(window.innerWidth);

  const next = () => {
    console.log("active index", activeIndex);
    setActiveIndex((activeIndex) => (activeIndex + 1) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const handleResize = () => {
    setCheck(window.innerWidth)
  };

  return (
    <div className="home-review-main-div">
      <div className="home-review-comp">
        <div
          className="home-review-card-slider"
          style={{
            transform: `translateX(${-activeIndex * (check < 700 ? 100 : 90)}vw)`,
          }}
        >
          {items.map((item) => item.comp)}
        </div>
      </div>
    </div>
  );
}

export default HomeUserReviews;
