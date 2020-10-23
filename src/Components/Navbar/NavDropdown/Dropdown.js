import React from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  console.log(props.dropLinks);
  return (
    <div className="drop-down">
      {props.dropLinks.map((item) => {
        return <Link to={item.path}>{item.link}</Link>;
      })}
    </div>
  );
}

export default Dropdown;
