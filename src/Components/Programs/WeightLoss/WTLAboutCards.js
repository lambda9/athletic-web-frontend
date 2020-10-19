import React from "react";
import HeadDescBorderCard from "../../CardGroup/HeadDescBorderCard";

function WTLAboutCards() {
  const wtlAboutCardDt = [
    {
      id: 0,
      heading: "current situation",
      description:
        "In 2016, more than 1.9 billion adults aged 18 years and older were overweight. Of these over 650 million adults were obese.",
    },
    {
      id: 1,
      heading: "effects",
      description:
        "People who have obesity, compared to those with a normal or healthy weight, are at increased risk for many serious diseases and health conditions",
    },
    {
      id: 2,
      heading: "Quality of life",
      description:
        "Being an overweight takes away the joy of your life. It makes you vulnerable and restricted.",
    },
  ];

  return (
    <div className="pt-foryou-card-div" style={{ marginBottom: "3rem" }}>
      {wtlAboutCardDt.map((item) => {
        return (
          <HeadDescBorderCard
            id={item.id}
            dataAos="fade-up"
            heading={item.heading}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default WTLAboutCards;
