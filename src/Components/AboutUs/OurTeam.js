import React, { useState } from "react";
import img1 from "../../Images/im18.jpg";
import img2 from "../../Images/im2.jpg";
import "./AboutUs.css";

function OurTeam() {
  const [detailsOwner, setDetailsOwner] = useState(false);
  const [detailsTrainer, setDetailsTrainer] = useState(false);

  return (
    <div className="about-our-team-main-div">
      <div className="about-our-team-img">
        <div
          className={
            detailsOwner
              ? "about-our-team-details about-our-team-details-active"
              : "about-our-team-details"
          }
        >
          <h2>Owner</h2>
          <p>there is some details about the team meamber</p>
        </div>{" "}
        <img
          src={img1}
          onMouseEnter={() => setDetailsOwner(true)}
          onMouseLeave={() => setDetailsOwner(false)}
        ></img>
      </div>
      <div className="about-our-team-img">

        <img
          src={img2}
          onMouseEnter={() => setDetailsTrainer(true)}
          onMouseLeave={() => setDetailsTrainer(false)}
        ></img>
        <div
          className={
            detailsTrainer
              ? "about-our-team-details about-our-team-details-active"
              : "about-our-team-details"
          }
        >
          <h2>Owner</h2>
          <p>there is some details about the team meamber</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
