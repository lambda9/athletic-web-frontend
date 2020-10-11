import React from "react";

const CardColumn = ({ title, icon, info }) => {
  return (
    <div className="advertise-card-item-container">
        {icon}
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};

export default CardColumn;