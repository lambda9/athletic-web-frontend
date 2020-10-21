/** @jsx jsx */

import  { useState } from "react";
import Form from "../GlobalComponents/Form";
import { css, jsx } from "@emotion/core";

function FranchiseContForm() {
  const [entryData, setentryData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    address: "",
    companyName: "",
    amount: ""
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
      name: "address",
      label: "Address",
      value: entryData.address,
    },
    {
      id: "id_5",
      type: "text",
      name: "companyName",
      label: "Company Name",
      value: entryData.companyName,
    },
    {
      id: "id_6",
      type: "number",
      name: "amount",
      label: "Amount available for inverstment",
      value: entryData.amount,
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
      subject: "",
      message: "",
      companyName: ""
    });

    event.preventDefault();
  };

  return (
    
      <Form
        inputDt={inputDt}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      ></Form>

  );
}

export default FranchiseContForm;
