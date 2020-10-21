import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";

function BlogCard(props) {
  return (
    <div className="blog-card-main-div">
      <div className="blog-card-category-container">
        <span>{props.obj.tag}</span>
      </div>
      <div className="blog-card-content-div">
        <h3>{props.obj.date}</h3>
        <h1>{props.obj.heading}</h1>
        <h3>Author: {props.obj.author}</h3>
        <hr />
        <p>{props.obj.description}</p>
      </div>
      {props.obj.tag == "blog" ? (
        <Link to="/fullblog" className="blog-btn-primary">
          Read More
        </Link>
      ) : null}
    </div>
  );
}
export default BlogCard;
