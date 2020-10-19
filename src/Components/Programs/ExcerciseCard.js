import React from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im7.jpg";
import img4 from "../../Images/im8.jpg";
import "./Programs.css";

function ExcerciseCard() {
  return (
    <div className="pro-ex-card-div">
      <div className="pro-ex-upper-div">
        <div className="pro-ex-left-div">
          <img src={img1}></img>
        </div>
        <div className="pro-ex-right-div">
          <h1>Cardio</h1>

          <ul>
            <li>
              Cardio is a type of cardiovascular conditioning. It includes
              activities like brisk walking, swimming, running, or cycling.
            </li>

            <li>
              Improves cardiovascular health, Lowers blood pressure, Reduces
              asthma symptoms, Regulates weight, Strengthens immune system
            </li>
            <li>
              Equipments used: Rowing machines, Stiar-steppers, Treadmill, Ankle
              Weights, Excercise mat.
            </li>
          </ul>
        </div>
      </div>
      <div className="pro-ex-below-div">
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
      </div>
    </div>
  );
}

export default ExcerciseCard;
