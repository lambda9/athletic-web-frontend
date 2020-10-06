import React from "react";
import img1 from "../../Images/im21.jpg";
import img2 from "../../Images/im20.jpg";
import "./AboutUs.css";

function OurTeam() {
  const ourTeam = [
    {
      id: 2,
      img: img1,
      title: "swaroop saran",
      descrition: "Hey! I'm the owner and manager of this gym",
      inverted: false,
    },
    {
      id: 2,
      img: img2,
      title: "bhati",
      descrition: "Hey! I'm your trainer.",
      inverted: true,
    },
  ];
  return (
    <div
      className="about-our-team-main-div"
      data-aos="fade-up"
      data-aos-duration="1000"
      
    >
      {ourTeam.map((item) => {
        return (
          <div
            className="about-our-team-cont"
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
