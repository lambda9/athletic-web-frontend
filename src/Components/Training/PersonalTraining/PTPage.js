import React from "react";
import "./PTPage.css";
import PTPageBanner from "./PTPageBanner";
import PTPhilosophy from "./PTPhilosophy";
import PTForYou from "./PTForYou";

import PTGotCovered from "./PTGotCovered";
import BeBolder from "./BeBolder";
import { Link } from "react-router-dom";

function PTPage() {
  return (
    <div>
      <PTPageBanner />
      <PTPhilosophy />
      <PTForYou />
      <PTGotCovered />
      <BeBolder />
      <div className="pt-explore">
        <div>explore more</div>
        <div id="bottom-red-line" />
        <div className="pt-explore-btn">
          <Link
            to="/"
            className="pt-bbold-link"
            style={{ margin: "0.3rem 2rem" }}
          >
            Weight loss
          </Link>
          <Link
            to="/"
            className="pt-bbold-link"
            style={{ margin: "0.3rem 2rem" }}
          >
            About us
          </Link>
          <Link
            to="/"
            className="pt-bbold-link"
            style={{ margin: "0.3rem 2rem" }}
          >
            gallery
          </Link>
        </div>
      </div>
      <div className="pt-still-q">
        <div>Still have question? We can help.</div>
        <Link to='/contactus' style={{fontSize: "18px"}} >Request Callback</Link>
      </div>
    </div>
  );
}

export default PTPage;
