import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import AboutUsBg from "./AboutUsBg";
import "./AboutUs.css";

import img1 from "../../Images/im20.jpg";
import img2 from "../../Images/im21.jpg";
import img3 from "../../Images/im10.jpg";
import bgImg from "../../Images/im5.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs-page">
        <Hero bgImg={bgImg} title="About Us">
        </Hero>
        
        <div className="about-bg">
          <AboutUsBg />
        </div>
        <div className="about-content">
          <div className="about-story-div">
            <div className="about-our-story">
              <img src={img1}></img>
              <div className="about-our-story-text">
                <h4> Our Story</h4>
                <p>
                  Gym and Fitness was founded in 2002 as a family owned and
                  operated business. The Gym and Fitness founders didn’t want it
                  to be just another gym equipment retailer - they wanted to be
                  the best in the industry and set their minds to doing so!
                </p>
              </div>
            </div>
            <div className="about-our-story inverted-our-story">
              <img className="inverted-img" src={img2}></img>
              <div className="about-our-story-text inverted-text">
                <h4> what we do</h4>
                <p>
                  We want to help you live a fit and healthy lifestyle! We do
                  this by helping you find the most suitable equipment for your
                  home gym, studio or commercial gym, keeping your budget,
                  lifestyle and fitness goals in mind.
                </p>
              </div>
            </div>
            <div className="about-our-story">
              <img src={img3}></img>
              <div className="about-our-story-text">
                <h4> Our Culture</h4>
                <p>
                  Gym and Fitness was founded in 2002 as a family owned and
                  operated business. The Gym and Fitness founders didn’t want it
                  to be just another gym equipment retailer - they wanted to be
                  the best in the industry and set their minds to doing so!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
