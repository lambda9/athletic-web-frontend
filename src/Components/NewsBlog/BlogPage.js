import React from "react";
import BlogCard from "./BlogCard";
import BlogDt from "./NewsBlogData.json";

function BlogPage() {
  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>NEWS AND FITNESS BLOGS</h1>
        <h6>
          News articles and blogs to help you stay motivated throughout your
          journey!
        </h6>
        <p>
          Discover the latest views and news on health and fitness, nutrition
          and weight loss that will help fast track you on your way to achieving
          your fitness goals.
        </p>
      </div>
      <div className="blog-overlap-card">
        <div className="blog-overlap-card-box">
          <h1>NEWS & BLOGS</h1>
          <p>
            We understand that for many of our members, exercise plays a huge
            part of your physical and mental wellbeing. And we believe that
            taking care of that right now has never been more important. To
            better support you as we get back to the gym, we will be updating
            our blog regularly to provide you with workout ideas (for the gym
            and home), wellbeing and nutrition content
          </p>
        </div>
      </div>
      <div className="blog-grid">
        {
          BlogDt.map(item => {
            return(
              <BlogCard key={item.id} obj={item}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default BlogPage;
