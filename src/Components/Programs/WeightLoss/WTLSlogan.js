import React from "react";
import { Link } from "react-router-dom";

function WTLSlogan() {
  return (
    <div className="wtl-slogan-div" data-aos="fade-up" data-aos-duration="1000">
      <div>
        Our equipments, training processes and your dedication is more than
        enough to make you fit and in good shape. Why wait?
        <Link
          to="/membership"
          className="pt-bbold-link"
          style={{ fontSize: "20px" }}
        >
          {" "}
          Let's get started.
        </Link>
      </div>
    </div>
  );
}

export default WTLSlogan;
