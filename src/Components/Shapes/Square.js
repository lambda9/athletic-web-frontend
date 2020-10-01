import React from "react";

function Square(props) {
  let style = {
    position: "absolute",
    top: `${props.top}px`,
    left: `${props.left}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: `${props.color}`,
    transform: `rotate(${props.angle}deg)`,
  };

  return <div style={style} />;
}

export default Square;
