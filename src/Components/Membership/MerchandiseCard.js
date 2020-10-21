import React from 'react'
import "./Membership.css"
function MerchandiseCard({img,title,desc,price,info,tag}) {
    return (
        <div className="merchandise-card-container">
            <img src={img}/>
            <h6 className="merchandise-tag">{tag}</h6>
            <h1>{title}</h1>
            <h5>{desc}</h5>
            <h6>{info}</h6>
            <div className="merchandise-price">Rs. {price}</div>
        </div>
    )
}

export default MerchandiseCard
