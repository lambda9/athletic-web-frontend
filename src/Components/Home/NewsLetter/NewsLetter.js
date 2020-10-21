import React, { useState } from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="news-letter-main-component">
      <h4>NEWS LETTER</h4>
      <h1>LATEST NEWS</h1>
      <div className="news-letter-card">
        <div>
          <a href="/blog">NEWS</a>
          <h2>BEST TRAININGS</h2>
          <author>by: SPARTAN</author>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in 
            <a className="button-primary " href="/blog">
              Read More
            </a>
          </span>
        </div>
        <div>
          <a href="/blog">NEWS</a>
          <h2>BEST TRAININGS</h2>
          <author>by: SPARTAN</author>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in 
            <a className="button-primary " href="/blog">
              Read More
            </a>
          </span>
        </div>
        <div>
          <a href="/blog">NEWS</a>
          <h2>BEST TRAININGS</h2>
          <author>by: SPARTAN</author>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in 
            <a className="button-primary " href="/blog">
              Read More
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
