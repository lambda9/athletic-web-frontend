import React from "react";
import "./OurPlans.css";
import Triangle from "../Shapes/Triangle";
import { Link } from "react-router-dom";
import { BsStarFill, FaRupeeSign } from "react-icons/all";

function OurPlanCard(props) {
  const { tag, price, discount, durationUnit, duration, features } = props.obj;

  const discountedPrice = Math.floor(price - (discount * price) / 100);

  return (
    <div className="plan-card-main-div">
      <Triangle
        top={-4.1}
        right={-19.1}
        w1={30}
        w2={30}
        w3={30}
        color={"#c13434"}
        angle={45}
      />
      <BsStarFill className="plan-card-star" />
      {discount === 0 ? null : (
        <div className="plan-card-discount">{discount}% OFF</div>
      )}
      <div className="plan-card-main-text">
        <h4>{tag}</h4>
        <div className="plan-card-price-div">
          <div>
            <FaRupeeSign id="rupee-sign" />
            <div className="plan-card-price-div-h2">
              {discount === 0 ?  price  :  discountedPrice }
            </div>
            {discount === 0 ? null : (
              <div className="plan-card-price-disc-active">{price}</div>
            )}
          </div>

          <span>
            {duration === 1 || duration === 12 ? " " : duration} {durationUnit}
          </span>
        </div>
        <ul>
          {features.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <Link to="/" className="button-primary plan-card-btn">
        join now
      </Link>
    </div>
  );
}

export default OurPlanCard;
