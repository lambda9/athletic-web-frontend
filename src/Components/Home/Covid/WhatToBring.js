import React from "react";
import towel from "../../../Images/Programs/icon1.png";
import shoe from "../../../Images/Programs/icon2.png";
import bottle from "../../../Images/Programs/icon3.png";
import shirt from "../../../Images/Programs/icon4.png";
import WhatToBringCard from "./WhatToBringCard";
import "./Covid.css";

function WhatToBring() {
	const cards = [
		{
			img: towel,
			desc: "A towel",
		},
		{
			img: shoe,
			desc: "Your favourite sneakers",
		},
		{
			img: bottle,
			desc: "A bottle of water",
		},
		{
			img: shirt,
			desc: "An extra pair of clothing",
		},
	];
	return (
		<div className="wtb">
			<h1>What to Bring</h1>
			<p>These are a few items that we recommend you to bring to the gym.</p>
			<div className="wtb-grid">
				{cards.map((item, index) => {
					return (
						<WhatToBringCard key={index} desc={item.desc} img={item.img} />
					);
				})}
			</div>
		</div>
	);
}

export default WhatToBring;
