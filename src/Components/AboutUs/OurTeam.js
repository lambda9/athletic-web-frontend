import React, { useState } from "react";
import img1 from "../../Images/im21.jpg";
import img2 from "../../Images/im20.jpg";
import "./AboutUs.css";

function OurTeam() {
  const [detailsOwner, setDetailsOwner] = useState(false);
  const [detailsTrainer, setDetailsTrainer] = useState(false);
  const ourTeam = [
    {
      id: 2,
      img: img1,
      title: "swaroop saran",
      descrition: "Im the owner bitch! dont you understand that hey",
      inverted: false,
    },
    {
      id: 2,
      img: img2,
      title: "bhati",
      descrition: "Hey! trainer is here",
      inverted: true,
    },
  ];
  return (
    <div className="about-our-team-main-div">
      {ourTeam.map((item) => {
        return (
          <div
            className="about-our-team-cont"
            onMouseEnter={() => setDetailsOwner(true)}
            onMouseLeave={() => setDetailsOwner(false)}
          >
            <img src={item.img}></img>
            <div className="about-our-team-desc-div">
              <h4>{item.title}</h4>
              <p>{item.descrition}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OurTeam;
