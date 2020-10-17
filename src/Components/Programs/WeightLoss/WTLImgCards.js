import React from "react";
import PTImgCard from "../../Training/PersonalTraining/PTImgCard";
import img from "../../../Images/im3.jpg";
import nutrition from "../../../Images/nutrition1.jpg";

function WTLImgCards() {
  return (
    <div
      className="pt-foryou-card-div"
      style={{ margin: "3rem auto" }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <PTImgCard
        ptImg={nutrition}
        heading={"nutrition coaching"}
        description={
          "Did you know 80% of results come from nutrition? Work with our Registered Dietitians and get a customized plan, supplement guides, recipes and more"
        }
        styleProp={{ width: "340px", minHeight: "450px" }}
        styleImgDiv={{ maxHeight: "250px" }}
      />
      <PTImgCard
        ptImg={img}
        heading={"personal training"}
        description={
          "More than a trainer, they’ll be your coach, personal cheerleader and friend. Let them bring out the best in you, tap into your strength, help you gain confidence and see results."
        }
        styleProp={{ width: "340px", minHeight: "450px" }}
        styleImgDiv={{ maxHeight: "250px" }}
      />
      <PTImgCard
        ptImg={img}
        heading={"assesments and test"}
        description={
          "Numbers don’t lie. From metabolism to glucose levels, our assessments and tests can reveal crucial insights for your weight loss plan."
        }
        styleProp={{ width: "340px", minHeight: "450px" }}
        styleImgDiv={{ maxHeight: "250px" }}
      />
    </div>
  );
}

export default WTLImgCards;
