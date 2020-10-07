import React from "react";
import img from "../../Images/im3.jpg";

function WhyJoinCard(props) {
  return (
    <div>
      <div
        className="wju-card"
        data-aos-delay={`${props.key * 200}`}
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          width: `${props.w}px`,
          height: `${props.h}px`,
        }}
      >
        <img
          src={props.bgImg}
          style={{
            width: `${props.w}px`,
          }}
        ></img>
      </div>
    </div>
  );
}

export default WhyJoinCard;
