import React from "react";

function Triangle(props) {
  let style = {
    position: "absolute",
    top: `${props.top}px`,
    left: `${props.left}px`,
    width: "0",
    height: "0",
    borderLeft: `${props.w1}px solid transparent`,
    borderRight: `${props.w2}px solid transparent`,
    borderBottom: `${props.w3}px solid ${props.color}`,
    transform: `rotate(${props.angle}deg)`,
  };

  return <div style={style}></div>;
}

export default Triangle;
