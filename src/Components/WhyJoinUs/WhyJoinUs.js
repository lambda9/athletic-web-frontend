import React, { Component } from "react";
import "./WhyJoinUs.css";
import WhyJoinCard from "./WhyJoinCard";
import img1 from "../../Images/im3.jpg";
import img2 from "../../Images/im7.jpg";
import img3 from "../../Images/im15.jpg";
import img4 from "../../Images/im5.jpg";
import img5 from "../../Images/im11.jpg";
import img6 from "../../Images/im8.jpg";
import img7 from "../../Images/im9.jpg";
import img8 from "../../Images/im6.jpg";

export class WhyJoinUs extends Component {
  dt = [
    [
      {
        id: "id_1",
        count: 1,
        img: img1,
      },
      {
        id: "id_2",
        count: 2,
        img: img2,
      },
    ],
    [
      {
        id: "id_3",
        count: 3,
        img: img3,
      },
      {
        id: "id_4",
        count: 4,
        img: img4,
      },
    ],
    [
      {
        id: "id_5",
        count: 5,
        img: img5,
      },
      {
        id: "id_6",
        count: 6,
        img: img6,
      },
    ],
    [
      {
        id: "id_7",
        count: 7,
        img: img7,
      },
      {
        id: "id_8",
        count: 8,
        img: img8,
      },
    ],
  ];

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll)
  // }

  handleScroll = () => {
    var offset = window.pageYOffset;
    var element = document.getElementById("dd");
    if (element) {
      element.style.backgroundPositionY = -offset * 0.2 + "px";
      console.log(offset, "offset", offset * 0.9);
    }
  };

  render() {
    return (
      
        <div className="row">
          {this.dt.map((item) => {
            return (
              <div className="column">
                {item.map((it) => {
                  console.log(it);
                  return <WhyJoinCard bgImg={it.img} idx={it.count} />;
                })}
              </div>
            );
          })}
        </div>
    );
  }
}

export default WhyJoinUs;
