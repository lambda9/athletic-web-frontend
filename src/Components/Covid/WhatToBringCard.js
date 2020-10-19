import React from "react";
import "./Covid.css";

// wtb = what-to-bring

function WhatToBringCard({ img, desc }) {
  return (
    <div className="wtb-card">
      <img className="wtb-icon" src={img} />
      <p>{desc}</p>
    </div>
  );
}

export default WhatToBringCard;
