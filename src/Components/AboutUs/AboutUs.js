import React, { Component } from "react";
import "./AboutUs.css";
import Hero from "../Hero";
import AboutUsBg from "./AboutUsBg";
import AboutCard from "./AboutCard";
import Services from "../Services/Services";
import img1 from "../../Images/im20.jpg";
import img2 from "../../Images/im21.jpg";
import img3 from "../../Images/im10.jpg";
import backDropImg from "../../Images/im5.jpg";
import OurValues from "./OurValues";
import Title from "../Title/Title";

const desc =
  " We want to help you live a fit and healthy lifestyle! We do this by helping you find the most suitable equipment for your home gym, studio or commercial gym, keeping your budget, lifestyle and fitness goals in mind.";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-page">
        <Hero bgImg={backDropImg} title="About Us" />

        <div className="about-bg">
          <AboutUsBg />
        </div>

        <div className="about-content">
          <AboutCard
            img={img1}
            title="Our story"
            description={desc}
            inverted={false}
          />
          <AboutCard
            img={img2}
            title="What we do"
            description={desc}
            inverted={true}
          />
          <AboutCard
            img={img3}
            title="our culture"
            description={desc}
            inverted={false}
          />
        </div>

        <OurValues />

        <div className="about-our-team-title">
          <Title>our team</Title>
        </div>
        <div className="about-content">
          <AboutCard
            img={img1}
            title="Swaroop Saran"
            description="my name is swaroop saran. Im the owner"
            inverted={false}
          />
          <AboutCard
            img={img2}
            title="Bhati"
            description="my name is bhati. Im the trainer of our gym"
            inverted={true}
          />
        </div>
      </div>
    );
  }
}

export default AboutUs;
