import React, {useState} from 'react'
import './OurPlans.css'

function PlanDurationSlider(props) {
  const {duration, handleDuration} = props
  return (
    <div className="plans-comp-btn-group">
      <div id={duration === 1 ? 'plan-comp-btn-active' : ""} onClick={() => handleDuration(1)}>monthly</div>
      <div id={duration === 3 ? 'plan-comp-btn-active' : ""} onClick={() => handleDuration(3)}>quarterly</div>
      <div id={duration === 6 ? 'plan-comp-btn-active' : ""} onClick={() => handleDuration(6)}>half-yearly</div>
      <div id={duration === 12 ? 'plan-comp-btn-active' : ""} onClick={() => handleDuration(12)}>yearly</div>
    </div>
  )
}

export default PlanDurationSlider
