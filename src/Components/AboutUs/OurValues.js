import React from "react";
import {
  BsFlagFill,
  RiTeamFill,
  BsGearWideConnected,
  MdHeadsetMic,
} from "react-icons/all";
import Title from "../Title/Title";
import OurValuesCard from "./OurValuesCard";
import "./OurValues.css";

function OurValues() {
  const services = [
    {
      icon: <RiTeamFill className="ourvalues-item-icon" />,
      title: "Team Work",
      info:
        "We are committed to common goals. Effective communication and accountability makes our team achieve greater results.",
    },
    {
      icon: <BsGearWideConnected className="ourvalues-item-icon" />,
      title: "Innovation",
      info: "We train smart not hard with our best techinques and innovation.",
    },

    {
      icon: <BsFlagFill className="ourvalues-item-icon" />,
      title: "Be the change",
      info:
        "We believe that we should all take ownership and have the courage to lead change.",
    },
    {
      icon: <MdHeadsetMic className="ourvalues-item-icon" />,
      title: "Customer Service",
      info:
        "Customers are our priority. We are passionate about delivering exceptional, personalised customer service to all.",
    },
  ];

  return (
    <div className="ourvalues">
      <Title>Our values</Title>
      <div className="ourvalues-center">
        {services.map((item, index) => {
          return (
            <OurValuesCard
              key={index}
              title={item.title}
              icon={item.icon}
              info={item.info}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OurValues;
