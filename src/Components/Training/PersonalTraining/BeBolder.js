import React from "react";
import { Link } from "react-router-dom";

function BeBolder() {
  return (
    <div className="pt-bbold-main-comp">
      <div>be bolder.</div>
      <div>be</div>
      <div>greater.</div>
      <div id="black-white">let's get started</div>
      <Link to="/membership" className="pt-bbold-link">
        checkout our plans
      </Link>
    </div>
  );
}

export default BeBolder;
