import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import "./AboutUs.css";
import Triangle from "../Shapes/Triangle";
import Square from "../Shapes/Square";
import Circle from "../Shapes/Circle";

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs-page">
        <Hero tempClass="aboutUs-bg">
          <Banner title="About us"></Banner>
        </Hero>

        <div>
          <div className="about-slogan">
            <h4>TIME FOR WAR</h4>
            <p>Today. Right now you are going to war.</p>
            <p>You are going into war with your opponent</p>
            <p>You are going to war with yourself.</p>
            <p>You are not scared… You are prepared</p>
            <p>You are not weak… You are a machine. A Freak.</p>
            <h3>ARE YOU FOCUSED...?</h3>
          </div>

          <div className="about-content">
            <div className="about-hz-line-container">
              <div className="about-hz-line" />
            </div>
            <div className="about-vt-line-container">
              <div className="about-vt-line" />
            </div>

            <Triangle top={10} left={4} w1={40} w2={40} w3={60} color={"rgb(0, 0, 0, 0.75"} angle={0} />
            <Triangle top={11} left={40} w1={40} w2={40} w3={60} color={"rgb(0, 0, 0, 0.75)"} angle={0} />
            <Square top={10} left={10} width={40} height={40} color={"rgb(0, 0, 0, 0.75)"} angle={0}/>
            <Circle top={20} left={10} r1={80} r2={40} color={"rgb(0, 0, 0, 0.75)"}/>
            </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
