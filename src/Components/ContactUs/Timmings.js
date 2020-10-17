import React from "react";

function Timmings() {
  return (
    <div className="about-time-main-div">
      <div>Opening Hours</div>

      <div className="about-time-item">
        <div>Monday to Saturday</div>
        <div>Morning: 6:30AM - 10:00AM</div>
        <div>Evening: 4:30PM - 10:00PM</div>
      </div>

      <div className="about-time-item">
      <div>Sunday</div>
        <div>Off</div>
      </div>

      <div className='about-time-item'>
        <div>Public Holidays</div>
        <div>8:00AM - 12:00PM</div>
      </div>
    </div>
  );
}

export default Timmings;
