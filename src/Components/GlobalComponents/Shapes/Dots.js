import React from "react";

function Dots(props) {
  const i = Math.floor(props.width / (props.spacing + props.r));
  const j = Math.floor(props.height / (props.spacing + props.r));

  let dotArr = new Array(i * j);

  for (let id = 0; id < i * j; id++) {
    dotArr[id] = id;
  }

  let divStyle = {
    position: "absolute",
    top: `${props.top}px`,
    left: `${props.left}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    overflow: "hidden",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    gridTemplateColumns: `repeat(${i}, 1fr)`,
    gridTemplateRows: `repeat(${j}, 1fr)`,
  };

  let dotStyle = {
    width: `${props.r}px`,
    height: `${props.r}px`,
    borderRadius: "50%",
    backgroundColor: `${props.color}`,
  };

  return (
    <div style={divStyle}>
      {dotArr.map((item) => (
        <div style={dotStyle} key={item}></div>
      ))}
    </div>
  );
}

export default Dots;
