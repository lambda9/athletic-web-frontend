import React from "react";

function Triangle(props) {
  let style = {
    position: "absolute",
    top: `${props.top}px`,
    left: `${props.left}px`,
    right: `${props.right}px`,
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

//<Triangle top={180} left={120} right={} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={15} />
