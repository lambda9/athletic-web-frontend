import React from "react";

function PTForYouCard(props) {
  const { heading, description } = props;
  return (
    <div className="pt-foryou-card">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PTForYouCard;
