import React, { Component } from "react";
import "./WhyJoinUs.css";
import WJUcard from "./WJUcard";
import img1 from "../../Images/im3.jpg";
import img2 from "../../Images/im7.jpg";
import img3 from "../../Images/im15.jpg";
import img4 from "../../Images/im5.jpg";
import img5 from "../../Images/im11.jpg";
import img6 from "../../Images/im8.jpg";
import img7 from "../../Images/im9.jpg";
import img8 from "../../Images/im6.jpg";

import data from "./data.json";

export class WhyJoinUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			x: 1,
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		var offset = window.pageYOffset;
		var element = document.getElementById("dd");
		if (element) {
			element.style.backgroundPositionY = -offset * 0.2 + "px";
		}
	};

	render() {
		return (
			<div className="wju-main-div" id="dd">
				<div className="wju-text-div">
					<span>WHY JOIN US ?</span> <br></br>
				</div>
				<div className="wju-card-div">
					<div className="wju-card-slider">
						{data.map((value) => {
							return (
								<WJUcard
									key={value.id}
									heading={value.heading}
									content={value.content}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default WhyJoinUs;
