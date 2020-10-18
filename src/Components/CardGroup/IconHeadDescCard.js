import React, { useState } from "react";
import "./Card.css";

function IconHeadDescCard(props) {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="icon-head-desc-main-div"
      style={props.mainStyle}
      onMouseEnter={() => setAnimate(true)}
      onAnimationEnd={() => setAnimate(false)}
    >
      <img src={props.icon} className={`${animate ? "icon-animate" : null}`} id="iconDiv"></img>
      <div>{props.heading}</div>
      <p>{props.description}</p>
    </div>
  );
}

export default IconHeadDescCard;
