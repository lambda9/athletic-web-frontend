import React from "react";
import "./BlogCard.css";
import {Link} from "react-router-dom";
function BlogCard() {
  return (
      <div>
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
       



    <div class="bog-grid">
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
        </div>
        </div>
      </div>
  );
}
export default BlogCard;