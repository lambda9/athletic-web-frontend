import React from "react";
import "./OurPlans.css";
import Triangle from "../../GlobalComponents/Shapes/Triangle";
import { Link } from "react-router-dom";
import { BsStarFill, FaRupeeSign } from "react-icons/all";

function OurPlanCard(props) {
  const { tag, price, duration, description, discount } = props.obj;
  const discountPer = discount ? discount.disc : 0;
  const discountedPrice = Math.floor(price - (discountPer * price) / 100);

  const durationFun = () => {
    if (duration == 1) {
      return "Monthly";
    } else if (duration == 12) {
      return "yearly";
    } else {
      return `${duration} Months`;
    }
  };

  return (
    <div className="plan-card-main-div">
      <Triangle
        top={-4.7}
        right={-19.9}
        w1={30}
        w2={30}
        w3={30}
        color={"#c13434"}
        angle={45}
      />
      <BsStarFill className="plan-card-star" />
      {discount ? (
        <div className="plan-card-discount">{discount.disc}% OFF</div>
      ) : null}
      <div className="plan-card-main-text">
        <h4>{tag}</h4>

        <div className="plan-card-price-div">
          <div>
            <FaRupeeSign id="rupee-sign" />

            <div className="plan-card-price-div-h2">
              {discount ? discountedPrice : price}
            </div>

            {discount ? (
              <div className="plan-card-price-disc-active">{price}</div>
            ) : null}
          </div>

          <span>{durationFun()}</span>
        </div>

        <p>{description}</p>
      </div>

      <Link to="/" className="button-primary plan-card-btn">
        join now
      </Link>
    </div>
  );
}

export default OurPlanCard;
