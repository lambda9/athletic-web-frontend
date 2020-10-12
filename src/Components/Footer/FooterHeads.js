import React from "react";
import "./Footer.css";

const Footerhead = (props) => {

  return (

    <div className = "footer-child-head">
      <div className = "footer-child-head-text">
        {props.head}
        <div className = "head-separator" />
      </div>
    </div>

  );

}

export default Footerhead;