import React from "react";
import "./PTPage.css";
import PTPageBanner from "./PTPageBanner";
import PTPhilosophy from "./PTPhilosophy";
import PTForYou from "./PTForYou";
import PTImgCard from "./PTImgCard";
import ptImg from "../../../Images/im11.jpg";

function PTPage() {
  return (
    <div>
      <PTPageBanner />
      <PTPhilosophy />
      <PTForYou />
      <div className="pt-img-card-main-container">
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

export default PTPage;
