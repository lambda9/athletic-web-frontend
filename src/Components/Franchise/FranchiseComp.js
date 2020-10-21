import React from "react";
import "./FranchiseComp.css";
import "../ContactUs/ContactUs.css";
import { BiWallet, FcProcess, FaHeadset } from "react-icons/all";
import temp from "../../Images/Franchise/support.png";
import MiniTitle from "../GlobalComponents/Title/MiniTitle";

function FranchiseComp(props) {
  const franchiseStatsDiv = [
    {
      id: 1,
      h1: "$2.2 Billion",
      description: "Revenue in first segment",
    },
    {
      id: 2,
      h1: "1.4%",
      description: "expected growth rate for 2020-2024",
    },
    {
      id: 3,
      h1: "104 Million",
      description: "active members",
    },
  ];

  const franchiseContentDt = [
    {
      id: 1,
      icon: <BiWallet className="franchise-get-started-icon" />,
      img:
        "https://cdn.pixabay.com/photo/2018/09/12/11/18/scale-3671883_960_720.jpg",
      title: "low cost investment",
      description:
        "We offers very affordable franchise and monthly fees versus other industries.",
    },
    {
      id: 2,
      icon: <FcProcess className="franchise-get-started-icon" fill="black" />,
      img:
        "https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_960_720.jpg",
      title: "simple process",
      description:
        " We’ll guide you through every step to becoming a healthy, happy owner.",
    },
    {
      id: 3,
      icon: <FaHeadset className="franchise-get-started-icon" />,
      img: temp,

      title: "360 support",
      description:
        " We’re here for you through the life of your club with customizednsupport for each stage of your growth. ",
    },
  ];

  return (
    <div className="franchise-main-comp">
      <div className="franchise-feature-main-div">
        <div className="franchise-feature-main-div-overlay">
          {franchiseStatsDiv.map((item) => {
            return (
              <div className="franchise-feature-div">
                <h1>{item.h1}</h1>
                <span>{item.description}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {franchiseContentDt.map((item) => {
          return (
            <div
              className={`franchise-content-card ${
                item.id % 2 == 0 ? "reverse-card-content" : null
              }`}
            >
              <div>
                {item.icon}
                <MiniTitle
                  title={item.title}
                  headStyleClass="tt-support"
                  bottomLineStyle={{ backgroundColor: "rgba(86,220,210)" }}
                />
                <p>{item.description}</p>
              </div>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FranchiseComp;
