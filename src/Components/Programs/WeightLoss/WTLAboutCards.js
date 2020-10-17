import React from "react";
import HeadDescBorderCard from "../../CardGroup/HeadDescBorderCard";

function WTLAboutCards() {
  return (
    <div
      className="pt-foryou-card-div"
      style={{ marginBottom: "3rem" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <HeadDescBorderCard
        heading={"current situation"}
        description={
          "In 2016, more than 1.9 billion adults aged 18 years and older were overweight. Of these over 650 million adults were obese."
        }
      />
      <HeadDescBorderCard
        heading="effects"
        description={
          "People who have obesity, compared to those with a normal or healthy weight, are at increased risk for many serious diseases and health conditions"
        }
      />
      <HeadDescBorderCard
        heading={"Quality of life"}
        description={
          "Being an overweight takes away the joy of your life. It makes you vulnerable and restricted."
        }
      />
    </div>
  );
}

export default WTLAboutCards;
