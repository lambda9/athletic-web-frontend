import React from 'react';
import "./Covid.css";
function WhatToBringCard({img,desc}) {
    return (
        <div className="what-to-bring-card">
        <img className="what-to-bring-icon" src={img}/>
        <p>{desc}</p>           
        </div>
    )
}

export default WhatToBringCard
