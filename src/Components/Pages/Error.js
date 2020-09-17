import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Hero from "../Hero";

function Error() {
  return (
    <div>
      <Hero tempClass="error-bg">
      <Banner title='404 page not found'></Banner>
      </Hero>
    </div>
  );
}

export default Error;
