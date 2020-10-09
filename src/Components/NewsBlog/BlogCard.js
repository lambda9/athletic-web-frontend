import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";


function BlogCard(props) {
  return (
    <div className="blog-page">
      <div className="blog-post">
        <div className="blog-category-container">
          <span>{props.obj.tag}</span>
        </div>
        <div className="blog-container">
          <h3 className="blog-date">{props.obj.date}</h3>
          <h1 className="blog-heading">{props.obj.heading}</h1>
          <h3 className="blog-author">{props.obj.author}</h3>
          <hr />
          <p className="blog-p">{props.obj.description}</p>
        </div>
        <Link to="/fullblog">
          <button className="blog-btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
}
export default BlogCard;
