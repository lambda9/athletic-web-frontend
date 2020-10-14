import React from 'react'
import "./OurProgram.css"
import i1 from "../../Images/Programs/i1.png"
import i2 from "../../Images/Programs/i2.png"
import i3 from "../../Images/Programs/i3.png"
import i4 from "../../Images/Programs/i4.png"

function Covid() {
    return (
        <div className="covid">
            <h1>Your safety is our priority</h1>
      <p className="covid-desc">During these difficult times of the pandemic, we continue to be at your service. But here are a few measures that we expect all our members to follow.</p>
      <div className="covid-grid">
        <div className="covid-card">
          <img className="covid-icon" src={i1} />
          <p>Wear a mask</p>
        </div>
        <div className="covid-card">
          <img className="covid-icon" src={i2} />
          <p>Wash your hands frequently</p>
        </div>
        <div className="covid-card">
          <img className="covid-icon" src={i3} />
         <p>Bring your essentials</p>
        </div>
        <div className="covid-card">
          <img className="covid-icon" src={i4} />
          <p>Stay at home if you are sick</p>
        </div>
      </div>
            </div>
        
        
    )
}

export default Covid
