import React from "react";
import img from "../../Images/Merchandise/img2.jpg";
import "../Programs/Programs.css";
import MiniTitle from "../GlobalComponents/Title/MiniTitle";
import HeadDescBorderCard from "../GlobalComponents/CardGroup/HeadDescBorderCard";
function Moto() {
 return(
	 <div className="moto-container">
				<div
				className="moto-heading"
				data-aos="fade-up"
				data-aos-duration="800"
			>
				<h1>What makes us <span>Special</span></h1>
				<h6>
				Our gyms are inclusive spaces where you feel like you belong. Our membership offers
				are designed especially to cater your preferences.
				</h6>
			</div>
	 </div>
  );
}

export default Moto;
