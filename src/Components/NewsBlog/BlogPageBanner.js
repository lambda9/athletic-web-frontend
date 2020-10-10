import React from "react";
import BlogOverlapCard from "./BannerOverlapCard";

function BlogPageBanner() {
  return (
    <div className="blog-hero">
      <BlogOverlapCard />

      <div className="blog-hero-text-div">
        <div className="blog-hero-text">
          <span>Stay updated </span>
          <h5>
            Our latest news, articles and blogs to help you stay motivated
            throughout your journey!
          </h5>
        </div>
      </div>
    </div>
  );
}

export default BlogPageBanner;
