import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Hero from "../Hero";
import bgImg from '../../Images/im2.jpg'

function Error() {
  return (
    <div>
      <Hero bgImg={bgImg}>
      <Banner title='404 page not found'></Banner>
      </Hero>
    </div>
  );
}

export default Error;
