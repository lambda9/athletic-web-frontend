import React from "react";
import Hero from "../Hero";
import AboutUsBg from "../AboutUs/AboutUsBg";
import "./News.css";
import backDropImg from "../../Images/im5.jpg";
import img1 from "../../Images/im7.jpg";
function NewsCard() {
  return (
    <div className="news-page">
      <Hero bgImg={backDropImg} title="About Us" />
      <div className="about-bg">
        <AboutUsBg />
      </div>
      
       <div className="news-container">
            <img className="news-image" src={img1}></img>
       
        <div className="news-block">
            <p className="news-title">What is <span className="blue-text">Intermittent fasting</span>?</p>
            <p className="news-content">
            Finally, Treat Yourself! If You Prefer Ice Cream The Way It Is, There Is Nothing Wrong With Enjoying It On Occasion. You Deserve It. “Listen To Your Body When It’s Had Enough And Eat Slowly To Savor Your Treat,” Agnani Says. It’s Important To Be Mindful On How Much You Are Consuming And Avoid Getting To The Stage Where You Feel Stuffed.

You’ve Probably Heard Of Intermittent Fasting. Celebrities Like Jennifer Lopez And Beyoncé Have Talked About It On Instagram. Hugh Jackman Used It To Get Shredded To Play Wolverine. It’s A Whole Different Approach To Dieting.

            </p>
        </div>
       
       </div>

    </div>
  );
}

export default NewsCard;
