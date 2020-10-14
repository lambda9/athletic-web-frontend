import React from "react";
import towel from "../../Images/Programs/icon1.png";
import shoe from "../../Images/Programs/icon2.png";
import bottle from "../../Images/Programs/icon3.png";
import shirt from "../../Images/Programs/icon4.png";

function WhatToBring() {
  return (
    <div className="what-to-bring">
      <h1>What to Bring</h1>
      <p>These are a few items that we recommend you to bring to the gym.</p>
      <div className="what-to-bring-grid">
        <div className="what-to-bring-card">
          <img className="what-to-bring-icon" src={towel} />
          <p>A towel</p>
        </div>
        <div className="what-to-bring-card">
          <img className="what-to-bring-icon" src={shoe} />
          <p>Your favorite sneakers</p>
        </div>
        <div className="what-to-bring-card">
          <img className="what-to-bring-icon" src={bottle} />
         <p> A water bottle</p>
        </div>
        <div className="what-to-bring-card">
          <img className="what-to-bring-icon" src={shirt} />
          <p>An extra pair of clothing</p>
        </div>
      </div>
    </div>
  );
}

export default WhatToBring;
