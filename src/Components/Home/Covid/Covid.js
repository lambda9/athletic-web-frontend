import React from "react";
import "./Covid.css";
import i1 from "../../../Images/Covid/mask.png";
import i2 from "../../../Images/Covid/liquid-soap.png";
import i3 from "../../../Images/Covid/water.png";
import i4 from "../../../Images/Covid/home.png";
import CovidCard from "./CovidCard";
import Slider from "../../GlobalComponents/Slider/Slider";

function Covid() {
	const card = [
		{
			img: i1,
			desc: "Do not forget to wear a mask",
		},
		{
			img: i2,
			desc: "Wash your hands frequently",
		},
		{
			img: i3,
			desc: "Bring your essentials with you",
		},
		{
			img: i4,
			desc: "Stay at home if you are sick",
		},
	];
	return (
		<div className="covid">
			<h2>Your safety is our priority</h2>
			<p className="covid-desc">
				During these difficult times of the pandemic, we continue to be at your
				service. But here are a few measures that we expect all our members to
				follow.
			</p>
			<Slider smallScreen={1} mediumScreen={2} largeScreen={4}>
				{card.map((items, index) => {
					return <CovidCard key={index} img={items.img} desc={items.desc} />;
				})}
			</Slider>
		</div>
	);
}

export default Covid;
