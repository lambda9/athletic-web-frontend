import React from "react";

function OurStoryCard(props) {
  return (
    <div
      data-aos={props.right}
      data-aos-duration="1000"
      className={
        props.inverted
          ? "about-our-story inverted-our-story"
          : "about-our-story"
      }
    >
      <img src={props.img}></img>
      <div
        data-aos={props.right}
        data-aos-duration="1000"
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
  );
}

export default OurStoryCard;
