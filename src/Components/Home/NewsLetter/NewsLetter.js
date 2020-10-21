import { NavigateBeforeSharp } from "@material-ui/icons";
import React, { useState } from "react";
import "./NewsLetter.css";

function NewsLetter() {
  const newsLetterDiv = [
    {
      id: 1,
      tag: "blog",
      date: "7th October 2020",
      heading: "Benefits and Advantages of going Vegetarian",
      author: "Andy Circus",
      description:
        "Thinking about reducing or eliminating animal products from your diet? Whether you want to go vegan or simply add more plant-based foods to your diet, learn how making informed choices about what you eat can improve your health and reduce your risk of certain diseases. Thinking about reducing or eliminating animal products from your diet? Whether you want to go vegan or simply add more plant-based foods to your diet, learn how making informed choices about what you eat can improve your health and reduce your risk of certain diseases.",
    },
    {
      id: 2,
      tag: "blog",
      date: "7th October 2020",
      heading: "Benefits and Advantages of going Vegetarian",
      author: "Andy Circus",
      description:
        "Thinking about reducing or eliminating animal products from your diet?choices about what you eat can improve your health and reduce your risk of certain diseases. Thinking about reducing or eliminating animal products from your diet? Whether you want to go vegan or simply add more plant-based foods to your diet, learn how making informed choices about what you eat can improve your health and reduce your risk of certain diseases.",
    },
    {
      id: 3,
      tag: "news",
      date: "8th October 2020",
      heading: "Benefits and Advantages of going Vegetarian",
      author: "Andy Circus",
      description:
        "Thinking about reducing or eliminating animal products from your diet? Whether you want to go vegan or simply add more plant-based foods to your diet, learn how making informed choices about what you eat can improve your health and reduce your risk of certain diseases. Thinking about reducing or eliminating animal products from your diet? Whether you want to go vegan or simply add more plant-based foods to your diet, learn how making informed choices about what you eat can improve your health and reduce your risk of certain diseases.",
    },
  ];
  return (
    <div className="news-letter-main-component">
      <h1>LATEST NEWS</h1>
      <div className="news-letter-card">
        {newsLetterDiv.map((item) => {
          return (
            <div>
              <a href="/blog">{item.tag}</a>
              <h5>{item.heading}</h5>
              <author>{item.author}</author>
              <date>{item.date}</date>
              <span>{item.description.slice(0,150)}<a href="/blog">...Read More</a></span>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default NewsLetter;
