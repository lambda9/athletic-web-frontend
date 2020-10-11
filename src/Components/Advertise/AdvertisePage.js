import React from 'react'
import AdvertiseBanner from "./AdvertiseBanner";
import "./Advertise.css";
import AdvertiseContent from './AdvertiseContent';
import AdvertiseCard from './AdvertiseCard';
function AdvertisePage() {
    return (
        <div className="advertise-page">
            <AdvertiseBanner/>
            <AdvertiseContent/>
            <AdvertiseCard/>
        </div>
    )
}

export default AdvertisePage
