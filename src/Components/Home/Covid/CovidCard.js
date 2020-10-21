import React from 'react'
import "./Covid.css"
function CovidCard({img,desc}) {
    return (
        <div className="covid-card">
            <img className="covid-icon" src={img} draggable={false}/>
            <p>{desc}</p>
        </div>
    )
}

export default CovidCard
