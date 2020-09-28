import React from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";

function ProgramCarousel() {
  const dt = [
    {
      id: 1,
      img: img1,
      title: "title",
    },
    {
      id: 2,
      img: img2,
      title: "title",
    },
    {
      id: 3,
      img: img3,
      title: "title",
    },
    {
      id: 4,
      img: img4,
      title: "title",
    },
    {
      id: 5,
      img: img5,
      title: "title",
    },
    {
      id: 6,
      img: img6,
      title: "title",
    },
  ];

  const nextImg = () => {
    console.log("next image");
  };

  const prevImg = () => {
    console.log("prev image");
  };
  return (
    <div className="pro-car-main-div">
    <div className='pro-car-img-div'>
      <div className="pro-car-left-img">
        <img src={img1} />
      </div>
      <div className="pro-car-main-img">
        <img src={img2} />
      </div>
      <div className="pro-car-right-img">
        <img src={img3} />
        </div>
        </div>
      <div className="pro-car-nextBtn" onClick={nextImg}>
        &#8250;
      </div>
      <div className="pro-car-prevBtn" onClick={prevImg}>
        &#8249;
      </div>
    </div>
  );
}

export default ProgramCarousel;
