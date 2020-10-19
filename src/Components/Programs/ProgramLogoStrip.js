import React from "react";
import cardio from "../../Images/WeightGain/cardio.png";
import strength from "../../Images/WeightGain/strength.png";
import boxing from "../../Images/WeightGain/boxing.png";
import './Programs.css'


function ProgramLogoStrip() {
    
  return (
    <div className='pro-logo'>
      <img src={cardio} style={{maxWidth: "250px"}}></img>
      <img src={strength}></img>
      <img src={boxing}></img>
    </div>
  );
}

export default ProgramLogoStrip;
