import React from "react";
import "./Card.css";
import icon from "../../Images/WeightGain/weightIcon.png";

function IconHeadDescCard(props) {
  return (
    <div className="icon-head-desc-main-div" style={props.mainStyle}>
        <img src={props.icon}></img>
        <div>{props.heading}</div>
        <p>{props.description}</p>
    </div>
  );
}

export default IconHeadDescCard;
