import React from "react";
import PTImgCard from "./PTImgCard";
import ptImg from "../../../Images/im11.jpg";
function PTGotCovered() {
  return (
    <div className="pt-got-covered-comp">
      <div>we got you covered</div> <div id="bottom-red-line" />
      <div className="pt-img-card-container">
        <PTImgCard
          ptImg={ptImg}
          heading={"private training"}
          description={
            "Built with science and deliverred with passion, out certified Personal Training professionals will developa personalized training plan that fits your body, lifestyle and budget"
          }
        />
        <PTImgCard
          ptImg={ptImg}
          heading={"trainer for everyone"}
          description={
            "We don't differentiate between our Premium members and regular members. Our professional trainers are always there for you for your guidance. You can always seek their help and we are happy to help."
          }
        />
      </div>
    </div>
  );
}

export default PTGotCovered;
