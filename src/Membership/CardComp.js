import React from "react";
import { useState } from "react";
import lg from "./lg1.png";
import "./MembershipCSS.css";

function CardComp(props) {
  const [mouseState, setmouseState] = useState(false);

  return (
    <div>
      <div
        className="card"
        onMouseEnter={() => setmouseState(true)}
        onMouseLeave={() => setmouseState(false)}
      >
        <img src={props.icon}></img>
        <h4>{props.title}</h4>
        <p>{props.info}</p>
        <div className={mouseState ? "mask1 active1" : "mask1"}></div>
        <div className={mouseState ? "mask2 active2" : "mask2"}></div>
        <div className={mouseState ? "mask3 active3" : "mask3"}></div>
        <div className={mouseState ? "mask4 active4" : "mask4"}></div>
        {mouseState}
      </div>
    </div>
  );
}

export default CardComp;
