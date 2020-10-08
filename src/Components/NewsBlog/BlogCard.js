import React from "react";
import "./BlogCard.css";
import {Link} from "react-router-dom";
function BlogCard() {
  return (
      <div className="blog-page">
        <div className="blog-hero">
       <h1>NEWS AND FITNESS BLOGS</h1>
        <h6>News articles and blogs to help you stay motivated throughout your journey!</h6>
        <p>Discover the latest views and news on health and fitness, nutrition and weight loss that will help fast track you on your way to achieving your fitness goals.</p>
        </div>
        <div className="blog-overlap-card">
          <div className="blog-overlap-card-box">
          <h1>NEWS & BLOGS</h1>
          <p>We understand that for many of our members,
             exercise plays a huge part of your physical 
             and mental wellbeing. And we believe that
              taking care of that right now has never been 
              more important. To better support you as we
               get back to the gym, we will be updating our
                blog regularly to provide you with workout 
                ideas (for the gym and home), wellbeing and nutrition 
                content</p>
        </div>
        </div>
    <div className="blog-grid">
        <div className="blog-post">
          <div className="blog-category-container">
            <span>Blog</span>
          </div>
          <div className="blog-container">
            <h3 className="blog-date">7 October 2020</h3>
            <h1 className="blog-heading">
              Benefits and Advantages of going Vegetarian
            </h1>
            <h3 className="blog-author">Written by Unknown</h3>
            <hr/>
            <p className="blog-p">
              Thinking about reducing or eliminating animal products from your
              diet? Whether you want to go vegan or simply add more plant-based
              foods to your diet, learn how making informed choices about what
              you eat can improve your health and reduce your risk of certain
              diseases.
              Thinking about reducing or eliminating animal products from your
              diet? Whether you want to go vegan or simply add more plant-based
              foods to your diet, learn how making informed choices about what
              you eat can improve your health and reduce your risk of certain
              diseases.
              
              
            </p>
          </div>
            <Link to="/fullblog"><button className="blog-btn-primary">Read More</button></Link>
        </div>




        <div className="blog-post">
          <div className="blog-category-container">
            <span>Blog</span>
          </div>
          <div className="blog-container">
            <h3 className="blog-date">7 October 2020</h3>
            <h1 className="blog-heading">
              Benefits and Advantages of going Vegetarian
            </h1>
            <h3 className="blog-author">Written by Unknown</h3>
            <hr/>
            <p className="blog-p">
              Thinking about reducing or eliminating animal products from your
              diet? 
            </p>
          </div>
          <Link to="/fullblog"><button className="blog-btn-primary">Read More</button></Link>
        </div>
       



    
        <div className="blog-post">
          <div className="blog-category-container">
            <span>Blog</span>
          </div>
          <div className="blog-container">
            <h3 className="blog-date">7 October 2020</h3>
            <h1 className="blog-heading">
              Benefits and Advantages of going Vegetarian
            </h1>
            <h3 className="blog-author">Written by Unknown</h3>
            <hr/>
            <p className="blog-p">
              Thinking about reducing or eliminating animal products from your
              diet? Whether you want to go vegan or simply add more plant-based
              foods to your diet, learn how making informed choices about what
              you eat can improve your health and reduce your risk of certain
              diseases.
            </p>
          </div>
          <Link to="/fullblog"><button className="blog-btn-primary">Read More</button></Link>
         
        </div>
        <div className="blog-post">
          <div className="blog-category-container">
            <span>Blog</span>
          </div>
          <div className="blog-container">
            <h3 className="blog-date">7 October 2020</h3>
            <h1 className="blog-heading">
              Benefits and Advantages of going Vegetarian
            </h1>
            <h3 className="blog-author">Written by Unknown</h3>
            <hr/>
            <p className="blog-p">
              Thinking about reducing or eliminating animal products from your
              diet? Whether you want to go vegan or simply add more plant-based
              foods to your diet, learn how making informed choices about what
              you eat can improve your health and reduce your risk of certain
              diseases.
              Thinking about reducing or eliminating animal products from your
              diet? Whether you want to go vegan or simply add more plant-based
              foods to your diet, learn how making informed choices about what
              you eat can improve your health and reduce your risk of certain
              diseases.
              
              
            </p>
          </div>
            <Link to="/fullblog"><button className="blog-btn-primary">Read More</button></Link>
        </div>
        </div>
        </div>
        
  );
}
export default BlogCard;
