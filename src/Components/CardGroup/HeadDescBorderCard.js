import React from "react";
import "./Card.css";

function HeadDescBorderCard(props) {
  const { heading, description } = props;
  return (
    <div
      className={`headDescBorderCard ${props.styleClass}`}
      style={props.styleProp}
      data-aos={props.dataAos}
      data-aos-duration="800"
      data-aos-delay={props.id * 200 + 200}
    >
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HeadDescBorderCard;
