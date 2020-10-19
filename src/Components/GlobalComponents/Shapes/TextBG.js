import React from 'react'

function TextBG(props) {
    let style = {
        position: "absolute",
        top: `${props.top}px`,
        left: `${props.left}px`,
        capitalise: `${props.capitalise}`,
        fontSize: `${props.fontSize}px`,
        letterSpacing: `${props.spacing}px`,
        fontWeight: `${props.fontWeight}`,
        transform: `rotate(${props.angle}deg)`,
        color: `${props.color}`,
      };
    
      return <div style={style}>{props.children}</div>;
}

export default TextBG
