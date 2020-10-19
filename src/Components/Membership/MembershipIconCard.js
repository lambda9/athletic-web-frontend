import React from "react";
import "./MembershipIcon.css";
function MembershipIconCard({ img, heading, info }) {
  return (
    <div>
      <div className="membership-icon-card">
        <div className="face face1">
          <div className="membership-icon-card-content">
            <img src={img} />
            <h3>{heading}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="membership-icon-card-content">
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipIconCard;
