import React, { useState } from "react";
import "./Card.css";

function IconHeadDescCard(props) {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="icon-head-desc-main-div"
      style={props.mainStyle}
      data-aos={props.dataAos}
      data-aos-duration="800"
      data-aos-delay={props.id * 200 + 200}
      onMouseEnter={() => setAnimate(true)}
      onAnimationEnd={() => setAnimate(false)}
    >
      <img
        src={props.icon}
        className={`${animate ? "icon-animate" : null}`}
        id="iconDiv"
      ></img>
      <div>{props.heading}</div>
      <p>{props.description}</p>
    </div>
  );
}

export default IconHeadDescCard;
