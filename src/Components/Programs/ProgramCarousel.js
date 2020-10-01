import React, { useState, useEffect } from "react";
import img1 from "../../Images/im4.jpg";
import img2 from "../../Images/im5.jpg";
import img3 from "../../Images/im9.jpg";
import img4 from "../../Images/im10.jpg";
import img5 from "../../Images/im20.jpg";
import img6 from "../../Images/im21.jpg";
import "./Programs.css";

function ProgramCarousel() {
  let dt = [
    {
      id: 0,
      img: img1,
      title: "title",
    },
    {
      id: 1,
      img: img2,
      title: "title",
    },
    {
      id: 2,
      img: img3,
      title: "title",
    },
    {
      id: 3,
      img: img4,
      title: "title",
    },
    {
      id: 4,
      img: img5,
      title: "title",
    },
    {
      id: 5,
      img: img6,
      title: "title",
    },
  ];

  const [x, setX] = useState(0);
  const [temp, setTemp] = useState(dt);

  const nextImg = () => {
    setX(x + 1);

  };

  const prevImg = () => {
    setX(x - 1);
  };

  return (
    <div className="pro-car-main-div">
      <div
        className="pro-car-img-div"
        style={{
          transform: `translate(${-x * 300}px)`,
        }}
      >
        {temp.map((item, index) => {
          return (
            <img
              className={
                index == x ? "pro-car-img-active" : "pro-car-img-unactive"
              }
              src={item.img}
            ></img>
          );
        })}
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

// <div className="pro-car-left-img">
// <img src={img1} />
// </div>
// <div className="pro-car-main-img">
// <img src={img2} />
// </div>
// <div className="pro-car-right-img">
// <img src={img3} />
// </div>
