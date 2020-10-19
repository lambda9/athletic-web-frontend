import React from 'react'
import "./MembershipIcon.css";
import MembershipIconCard from "./MembershipIconCard";
import i1 from "../../Images/MembershipIcons/i1.png";
import i2 from "../../Images/MembershipIcons/i2.png";
import i3 from "../../Images/MembershipIcons/i3.png";

function MembershipIcon() {
    const cards=[
        {
            img:i1,
            heading:"High-Class Equipments",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."

        },
        {
            img:i2,
            heading:"Easy on your pocket",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."

        },
        {
            img:i3,
            heading:"Flexible Timings",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."

        }
    ]
    return (
        <div className="membership-icon-background">
            <h1>Reasons to become a member at the Atheletic Gym</h1>
            <div className="membership-icon-container">
                return(
                    {cards.map((items,index)=>
                    <MembershipIconCard
                    key={items.index}
                    img={items.img}
                    heading={items.heading}
                    info={items.info}
                    />)}
                )
    </div>
        </div>
    )
}

export default MembershipIcon
