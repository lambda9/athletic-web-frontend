import React from 'react'
import "./Advertise.css";
import AdvertiseCardColumn from "./AdvertiseCardColumn"
import {
    HiSpeakerphone,
    FcSalesPerformance,
    FaDollarSign,
  } from "react-icons/all";
function AdvertiseCard() {
    const columns = [
        {
          icon: <HiSpeakerphone className="ourvalues-item-icon" />,
          title: "Get Discovered",
          info:
            "Advertising provides a visibility boost to your brand and products. Ads appear in highl visible placements,within shopping results or on product detail pages.",
        },
        {
          icon: <FcSalesPerformance  className="ourvalues-item-icon" />,
          title: "Increase Sales",
          info: "Many shoppers come to Amazon ready to buy. Advertising help you reach customers who are looking for products like yours.",
        },
    
        {
          icon: <FaDollarSign  className="ourvalues-item-icon" />,
          title: "Control Costs",
          info:
            "Pay only for the clicks your ads receive. Campaign reports track ad spend and performance, so you can learn what's working and fine-tune your campaigns.",
        },
      ];
    return (
        <div className="advertise-card-container" data-aos="fade-up">
            <h1>Achieve your <span>Business Goals</span></h1>
              <div className="advertise-card-center">
        {columns.map((item, index) => {
          return (
            <AdvertiseCardColumn
              key={index}
              title={item.title}
              icon={item.icon}
              info={item.info}
            />
          );
        })}
      </div>
        </div>
    )
}

export default AdvertiseCard
