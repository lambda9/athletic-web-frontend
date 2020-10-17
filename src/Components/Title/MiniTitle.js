import React from "react";
import './Title.css'

function MiniTitle(props) {
  return (
    <div className='miniTitle-div' style={props.headDivStyle}>
      <div>{props.title}</div>
      <div className='bottom-line' style={props.bottomLineStyle}  />
    </div>
  );
}

export default MiniTitle;
