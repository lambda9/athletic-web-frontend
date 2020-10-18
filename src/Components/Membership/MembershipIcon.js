import React from 'react'
import "./MembershipIcon.css";
import MembershipIconCard from "./MembershipIconCard";
import i1 from "../../Images/MembershipIcons/i1.png";
import i2 from "../../Images/MembershipIcons/i2.png";
import i3 from "../../Images/MembershipIcons/i3.png";

function MembershipIcon() {
    return (
        <div className="membership-icon-background">
            <h1>Reasons to become a member at the Atheletic Gym</h1>
             <div className="membership-icon-container">
        <div className="membership-icon-card">
            <div className="face face1">
                <div className="membership-icon-card-content">
                    <img src={i1}/>
                    <h3>High-Class Equipments</h3>
                </div>
            </div>
            <div className="face face2">
            <div className="membership-icon-card-content">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                </div>
            </div>
        </div>
        
        <div className="membership-icon-card">

            <div className="face face1">
            <div className="membership-icon-card-content">

                    <img src={i2}/>
                    <h3>Easy on your Pocket</h3>
                </div>
            </div>
            <div className="face face2">
            <div className="membership-icon-card-content">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                </div>
            </div>
        </div>
        <div className="membership-icon-card">

            <div className="face face1">
            <div className="membership-icon-card-content">

                    <img src={i3}/>
                    <h3>Flexible Timings</h3>
                </div>
            </div>
            <div className="face face2">
            <div className="membership-icon-card-content">

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default MembershipIcon
