import React from "react";
import BlogCard from "./BlogCard";
import BlogPageBanner from "./BlogPageBanner";
import BlogDt from "./NewsBlogData.json";

const len = Math.floor(BlogDt.length / 2) + 1;
const arr = new Array(2);

for (let i = 0; i < 2; i++) {
  arr[i] = new Array(len);
}

let count = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < len; j++) {
    arr[i][j] = BlogDt[count] ? BlogDt[count] : null;
    count++;
  }
}

function BlogPage() {
  return (
    <div className="blog-page">
      <BlogPageBanner />
      <div className="blog-page-cards-row">
        <div className="blog-page-cards-col">
          {arr[0].map((item) => {
            return item ? <BlogCard obj={item} /> : null;
          })}
        </div>

        <div className="blog-page-cards-col">
          {arr[1].map((item) => {
            return item ? <BlogCard obj={item} /> : null;
          })}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
