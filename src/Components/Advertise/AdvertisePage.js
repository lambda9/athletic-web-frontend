import React from "react";
import AdvertiseBanner from "./AdvertiseBanner";
import "./Advertise.css";
import AdvertiseComp from "./AdvertiseComp";

function AdvertisePage() {
  return (
    <div className="advertise-page">
      <AdvertiseBanner />
      <AdvertiseComp />
    </div>
  );
}

export default AdvertisePage;
