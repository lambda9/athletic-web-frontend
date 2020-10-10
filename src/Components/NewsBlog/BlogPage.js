import React from "react";
import BannerOverlapCard from "./BannerOverlapCard";
import BlogCard from "./BlogCard";
import BlogPageBanner from "./BlogPageBanner";
import BlogDt from "./NewsBlogData.json";

function BlogPage() {
  return (
    <div className="blog-page">
      <BlogPageBanner />
      <div className="blog-page-cards-row">
        <div className="blog-page-cards-col">
          {BlogDt.map((item) => {
            return <BlogCard key={item.id} obj={item} />;
          })}
        </div>
        <div className="blog-page-cards-col">
          {BlogDt.map((item) => {
            return <BlogCard key={item.id} obj={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
