import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ButtonGroup = (props) => {

  return (
    <div
      className="nav-btn-grp"
      style={{ display: props.isVisible ? "flex" : "none" }}
    >
      <Link to="/freetrial" className="button-primary">
        free trial
      </Link>

      <Link className="button-primary">login</Link>
    </div>
  );
};

export default ButtonGroup;
