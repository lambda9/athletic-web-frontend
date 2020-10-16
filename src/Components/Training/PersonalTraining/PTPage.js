import React from "react";
import "./PTPage.css";
import PTPageBanner from "./PTPageBanner";
import PTPhilosophy from "./PTPhilosophy";
import PTForYou from "./PTForYou";

import PTGotCovered from "./PTGotCovered";
import BeBolder from "./BeBolder";

function PTPage() {
  return (
    <div>
      <PTPageBanner />
      <PTPhilosophy />
      <PTForYou />
      <PTGotCovered />
      <BeBolder />
    </div>
  );
}

export default PTPage;
