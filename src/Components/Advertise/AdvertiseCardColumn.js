import React from "react";
import "./Advertise.css";
import { IconContext } from "react-icons/lib";
const CardColumn = ({ title, icon, info }) => {
  return (
    <div className="advertise-card-item-container">
      <IconContext.Provider value={{ className: "advertise-card-column-icon"}}>{icon}</IconContext.Provider>
      <h4>{title}</h4>
      <p>{info}</p>
    </div>
  );
};

export default CardColumn;
