import React from "react";

function AboutCard(props) {
  return (
    <div className="about-story-div">
      <div
        className={
          props.inverted
            ? "about-our-story inverted-our-story"
            : "about-our-story"
        }
      >
        <img src={props.img}></img>
        <div
          className={
            props.inverted
              ? "about-our-story-text inverted-text"
              : "about-our-story-text"
          }
        >
          <h4>{props.title}</h4>
          <p>{props.description} </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;