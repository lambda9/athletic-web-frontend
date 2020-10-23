import React from "react";
import "./AdvertiseFlipCard.css";
import img1 from "../../Images/Advertise/adwhyus.svg";
import img2 from "../../Images/Advertise/adService.svg";
import img3 from "../../Images/Advertise/adProcess.svg";

const AdvertiseFlipCard = () => {
  const flipCardInfo = [
    {
      flipCardHead: "Why Advertise with us ?",
      flipCardContent: "We are reliable, and offcourse Popular ;). We ensure you a better brand exposure.",
      flipCardImg: img1
    },
    {
      flipCardHead: "What Services we provide ?",
      flipCardContent: "Displays, Interactive Media, Electronic Media, Static Branding (Standee/Posters/Mirror Stickers), Website, E-mails, Contest, Event Sponsorship, OOH, Back Lit Up, Scrollers, Pillar/Wall Branding",
      flipCardImg: img2
    },
    {
      flipCardHead: "What process we follow ?",
      flipCardContent: "You contact us - we work on ideas and creation - final optimization through suggestions [as simple as that ;)]",
      flipCardImg: img3
    }
  ];

  return (
    <div className = "ad-flip-card-container">
      {
        flipCardInfo.map((item) => {
          return (   
            <div className = "ad-flip-card-parent">         
              <div className = "ad-flip-card">
                <div className = "ad-flip-card-front">
                  <img src = {item.flipCardImg} />
                  {item.flipCardHead}
                </div>
                <div className = "ad-flip-card-back"> {item.flipCardContent} </div>
              </div>
            </div>
          )
        })
      }
    </div> 
  )
}

export default AdvertiseFlipCard;