import React from "react";
import "./Advertise.css";
import AdvertiseOverlapCard from "./AdvertiseOverlapCard";
function AdvertiseBanner() {
  return (
    <div className="advertise-hero">
      <AdvertiseOverlapCard/>

      <div className="advertise-hero-text-div">
        <div className="advertise-hero-text">
          <span>We are looking for Brand Partners! </span>
          <h6>
          Promoting your business with the Atheletic Gym is easier then you think, via our wide range of marketing platform.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AdvertiseBanner;
