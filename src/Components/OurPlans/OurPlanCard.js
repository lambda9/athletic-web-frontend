import React from "react";
import "./OurPlans.css";
import Triangle from "../Shapes/Triangle";
import { Link } from "react-router-dom";
import { BsStarFill, FaRupeeSign } from "react-icons/all";

function OurPlanCard() {
  return (
    <div className="plan-card-main-div">
      <Triangle
        top={-6}
        right={-20}
        w1={30}
        w2={30}
        w3={30}
        color={"rgb(255, 0, 0)"}
        angle={45}
      />
      <BsStarFill className="plan-card-star" />
      <div className="plan-card-discount">40% OFF</div>
      <div className="plan-card-main-text">
        <h4>premium</h4>
        <div className="plan-card-price-div">
          <div>
            <FaRupeeSign id="rupee-sign" />
            <h2>22</h2>
          </div>
          <span>monthly</span>
        </div>
        <ul>
          <li>feature 1</li>
          <li>feature 2</li>
          <li>feature 3</li>
        
        </ul>

        
      </div>
      <Link to="/" className="button-primary">
          join now
        </Link>
    </div>
  );
}

export default OurPlanCard;
