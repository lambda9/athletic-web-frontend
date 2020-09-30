import React, { useState } from "react";
import img1 from "../../Images/im18.jpg";
import img2 from "../../Images/im2.jpg";
import "./AboutUs.css";

function OurTeam() {
  const [detailsOwner, setDetailsOwner] = useState(false);
  const [detailsTrainer, setDetailsTrainer] = useState(false);

  return (
    <div className="about-our-team-main-div">
      <div
        className="about-our-team-img"
        onMouseEnter={() => setDetailsOwner(true)}
        onMouseLeave={() => setDetailsOwner(false)}
      >
        <div
          className={
            detailsOwner
              ? "about-our-team-details-o about-our-team-details-active-o"
              : "about-our-team-details-o"
          }
        >
          <h2>Trainer</h2>
          <p>there is some details about the team meamber</p>
        </div>{" "}
        <img src={img1}></img>
      </div>
      <div
        className="about-our-team-img"
        onMouseEnter={() => setDetailsTrainer(true)}
        onMouseLeave={() => setDetailsTrainer(false)}
      >
        <div
          className={
            detailsTrainer
              ? "about-our-team-details-t about-our-team-details-active-t"
              : "about-our-team-details-t"
          }
        >
          <h2>Owner</h2>
          <p>there is some details about the team meamber</p>
        </div>
        <img src={img2}></img>

      </div>
    </div>
  );
}

export default OurTeam;
