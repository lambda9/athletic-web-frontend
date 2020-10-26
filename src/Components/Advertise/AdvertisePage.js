import React from "react";
import "./Advertise.css";
import AdvertiseComp from './AdvertiseComp'
import AdvertiseBanner from './AdvertiseBanner'


function AdvertisePage() {
  return (
    <div className="advertise-page">
      <AdvertiseBanner />
      <AdvertiseComp />
    </div>
  );
}

export default AdvertisePage;
