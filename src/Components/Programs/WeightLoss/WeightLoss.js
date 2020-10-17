import React from "react";
import PTForYouCard from "../../Training/PersonalTraining/PTForYouCard";
import "./WeightLoss.css";
import PTImgCard from "../../Training/PersonalTraining/PTImgCard";
import img from "../../../Images/im3.jpg";

function WeightLoss() {
  return (
    <div className="wtl-main-comp">
      <div className="wtl-head-div">
        <div>lose weight, live healthy</div>
        <div id="bottom-red-line" />
      </div>
      <div className="pt-foryou-card-div">
        <PTForYouCard
          heading={"current situation"}
          description={
            "In 2016, more than 1.9 billion adults aged 18 years and older were overweight. Of these over 650 million adults were obese."
          }
        />
        <PTForYouCard
          heading="effects"
          description={
            "People who have obesity, compared to those with a normal or healthy weight, are at increased risk for many serious diseases and health conditions"
          }
        />
        <PTForYouCard
          heading={"Quality of life"}
          description={
            "Being an overweight takes away the joy of your life. It makes you vulnerable and restricted."
          }
        />
      </div>

      <div className="wtl-head-div">
        <div>weight loss programs</div>
        <div id="bottom-red-line"></div>
        <span>
          Do not loose hope. We are here for you. Our members don’t just lose
          weight. They gain confidence, strength, community, relationships,
          shared goals and good habits.
        </span>
      </div>
      <div className="pt-foryou-card-div">
        <PTImgCard
          ptImg={img}
          heading={"nutrition coaching"}
          description={
            "Did you know 80% of results come from nutrition? Work with our Registered Dietitians and get a customized plan, supplement guides, recipes and more"
          }
        />
        <PTImgCard
          ptImg={img}
          heading={"personal training"}
          description={
            "More than a trainer, they’ll be your coach, personal cheerleader and friend. Let them bring out the best in you, tap into your strength, help you gain confidence and see results."
          }
        />
        <PTImgCard
          ptImg={img}
          heading={"assesments and test"}
          description={
            "Numbers don’t lie. From metabolism to glucose levels, our assessments and tests can reveal crucial insights for your weight loss plan."
          }
        />
      </div>
    </div>
  );
}

export default WeightLoss;
