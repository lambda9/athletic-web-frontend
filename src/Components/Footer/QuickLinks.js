import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Quicklinks = (props) => {

  return (

      <div className = "footer-quicklinks">
        { 
          props.group.map( (item) => {
            return <Link className = "links" to={`${item[0]}`} key={item[0]}>{item[1]}</Link>;
          })
        }
      </div>
    
  );

}

export default Quicklinks;