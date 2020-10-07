import React, { Component } from "react";
import "./WhyJoinUs.css";
import WhyJoinCard from "./WhyJoinCard";
import img from "../../Images/im3.jpg";
import img2 from "../../Images/im7.jpg";
import img3 from "../../Images/im3.jpg";
import img4 from "../../Images/im5.jpg";
import img5 from "../../Images/im6.jpg";
import img6 from "../../Images/im8.jpg";
import img7 from "../../Images/im9.jpg";
import img8 from "../../Images/im11.jpg";

export class WhyJoinUs extends Component {
  dt = [
    {
      id: "id_1",
      img: img2,
      w: 500,
      h: 300,
    },
    {
      id: "id_2",
      img: img,
      w: 300,
      h: 300,
    },
  ];
  dt1 = [
    {
      id: "id_1",
      img: img3,
      w: 500,
      h: 300,
    },
    {
      id: "id_2",
      img: img4,
      w: 300,
      h: 300,
    },
  ];
  dt2 = [
    {
      id: "id_1",
      img: img5,
      w: 500,
      h: 300,
    },
    {
      id: "id_2",
      img: img6,
      w: 300,
      h: 300,
    },
  ];
  dt3 = [
    {
      id: "id_1",
      img: img7,
      w: 500,
      h: 300,
    },
    {
      id: "id_2",
      img: img8,
      w: 300,
      h: 300,
    },
  ];

  render() {
    return (
      <div className="row">
        <div
          className="column"
          id="myDiv"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {this.dt.map((item) => {
            return <img src={item.img}></img>;
          })}
        </div>
        <div
          className="column"
          id="myDiv"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {this.dt1.map((item) => {
            return <img src={item.img}></img>;
          })}
        </div>
        <div
          className="column"
          id="myDiv"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {this.dt2.map((item) => {
            return <img src={item.img}></img>;
          })}
        </div>
        <div
          className="column"
          id="myDiv"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {this.dt3.map((item) => {
            return <img src={item.img}></img>;
          })}
        </div>
      </div>
    );
  }
}

export default WhyJoinUs;
