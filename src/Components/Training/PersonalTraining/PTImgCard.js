import React from "react";

function PTImgCard(props) {
  const { ptImg, heading, description } = props;
  return (
    <div className="pt-img-card" style={props.styleProp}>
      <div className="pt-img-card-img-div" style={props.styleImgDiv}>
        <img src={ptImg}></img>
      </div>
      <div
        className="pt-foryou-card"
        style={{ border: "none", margin: "0 auto", maxWidth: "96%" }}
      >
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PTImgCard;
