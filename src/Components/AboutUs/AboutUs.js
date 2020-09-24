import React, { Component } from "react";
import Hero from "../Hero";
import Banner from "../Banner";
import "./AboutUs.css";
import Triangle from "../Shapes/Triangle";
import Square from "../Shapes/Square";
import Circle from "../Shapes/Circle";
import Line from '../Shapes/Line';
import bgImg from '../../Images/im5.jpg'

class AboutUs extends Component {
  render() {
    return (
      <div className="aboutUs-page">
        <Hero bgImg={bgImg}>
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
            
            <Square top={0} left={0} width={32} height={32} color={"#459fb6"} angle={0}/>
            
            <Triangle top={180} left={120} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={15} />
            <Circle top={300} left={60} r1={140} r2={140} color={"rgb(238,238,239)"}/>
            <Circle top={309} left={70} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
            <Circle top={309} left={240} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
            <Circle top={420} left={230} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
            
            <Triangle top={410} left={595} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
            <Circle top={500} left={660} r1={140} r2={140} color={"rgb(238,238,239)"}/>
            <Circle top={509} left={670} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
            <Circle top={530} left={580} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
            <Circle top={630} left={620} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
            
            <Triangle top={40} left={1100} w1={300} w2={300} w3={600} color={"rgb(220,222,231)"} angle={180} />


            <Line top={450} left={240} width={10} length={600} color={"rgb(241,241,244)"} angle={-45}/>
            <Line top={490} left={240} width={10} length={600} color={"rgb(241,241,244)"} angle={-45}/>
           
            <div className="about-hz-line-container">
              <div className="about-hz-line" />
            </div>
            <div className="about-vt-line-container">
              <div className="about-vt-line" />
            </div>

            </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
