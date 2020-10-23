import React, { useState } from "react";
import "./AdvertiseComp.css";
import { Link } from "react-router-dom";
import Form from "../Form";
import AdvertiseFlipCard from "./AdvertiseFlipCard";
import adIMG from "../../Images/adIMG2.jpg";

const AdvertiseComp = () => {
  const [entryData, setentryData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    companyName: "",
    productName: "",
    details: "",
  });

  const inputDt = [
    {
      id: "id_1",
      type: "text",
      name: "name",
      label: "Name",
      value: entryData.name,
    },
    {
      id: "id_2",
      type: "email",
      name: "email",
      label: "Email",
      value: entryData.email,
    },
    {
      id: "id_3",
      type: "tel",
      name: "phoneNum",
      label: "Phone Number",
      value: entryData.phoneNum,
    },
    {
      id: "id_4",
      type: "text",
      name: "companyName",
      label: "Company Name",
      value: entryData.companyName,
    },
    {
      id: "id_5",
      type: "text",
      name: "productName",
      label: "Product Name/Type",
      value: entryData.productName,
    },
    {
      id: "id_6",
      type: "textarea",
      name: "details",
      label: "Details",
      value: entryData.details,
    },
  ];

  const handleChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name, value);
    setentryData({ ...entryData, [name]: value });
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    console.log(entryData);
  };

  const handleReset = (event) => {
    setentryData({
      name: "",
      email: "",
      phoneNum: "",
      companyName: "",
      productName: "",
      details: "",
    });

    event.preventDefault();
  };

  return (
    <div className="ad-main-comp" id="advertise">
      <div className = "ad-msg">
        Promoting your business with <span>the Atheletic Gym</span> is easier then you
        think, via our wide range of marketing platform. So let's connect and
        <div className="ad-msg-quote">Reach the Right audience with Right message at Right time !</div>
      </div>
      <AdvertiseFlipCard />
      <div className="ad-form-div">
        <div className="ad-form-left-div">
          <img src = {adIMG} />
        </div>
        <div className="ad-form-right-div">
          <h1>Tell us about yourself</h1>
          <Form
            inputDt={inputDt}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvertiseComp;
