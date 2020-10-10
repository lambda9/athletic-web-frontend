import React from 'react'
import AdvertiseBanner from "./AdvertiseBanner";
import "./Advertise.css";
import AdvertiseContent from './AdvertiseContent';
function AdvertisePage() {
    return (
        <div className="advertise-page">
            <AdvertiseBanner/>
            <AdvertiseContent/>
        </div>
    )
}

export default AdvertisePage
