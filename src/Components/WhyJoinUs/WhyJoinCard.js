import React from "react";
import img from "../../Images/im3.jpg";

function WhyJoinCard(props) {
  return (
    <div>
      <div
      className='wju-card'
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={props.bgImg}
          data-aos-delay={`${props.idx * 100}`}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></img>
      </div>
    </div>
  );
}

export default WhyJoinCard;
