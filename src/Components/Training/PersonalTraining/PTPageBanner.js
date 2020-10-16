import React from "react";
import "./PTPage.css";

function PTPageBanner() {
  return (
    <div className="pt-banner">
      <div>we get personal</div>
      <div className="pt-banner-card">
        <h1>personal training</h1>
        <div id="bottom-red-line"></div>
        <p>
          {" "}
          Built with science and delivered with passion, our trainers will
          develop a personalized training program that fits your body, lifestyle
          and budget.
        </p>
      </div>
    </div>
  );
}

export default PTPageBanner;
