import React from "react";
import './Card.css'


function HeadDescBorderCard(props) {
  const { heading, description } = props;
  return (
    <div className="headDescBorderCard" style={props.styleProp}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default HeadDescBorderCard;
