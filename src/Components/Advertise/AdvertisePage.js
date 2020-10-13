import React from "react";
import AdvertiseBanner from "./AdvertiseBanner";
import "./Advertise.css";
import AdvertiseCard from "./AdvertiseCard";
function AdvertisePage() {
  return (
    <div className="advertise-page">
      <AdvertiseBanner />

      <AdvertiseCard />
    </div>
  );
}

export default AdvertisePage;
