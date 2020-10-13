import React from "react";
import "./Advertise.css";
import AdvertiseOverlapCard from "./AdvertiseOverlapCard";
function AdvertiseBanner() {
  return (
    <div className="advertise-hero">
      <div className="advertise-hero-text-div">
        <span>
          Promoting your business with the Atheletic Gym is easier then you
          think, via our wide range of marketing platform.
        </span>
      </div>
      <AdvertiseOverlapCard />
    </div>
  );
}

export default AdvertiseBanner;
