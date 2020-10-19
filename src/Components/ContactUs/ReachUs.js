import React from "react";
import Title from "../GlobalComponents/Title/Title";
import AddressComp from "./AddressComp";
import "./ContactUs.css";
import Timmings from "./Timmings";

function ReachUs() {
	return (
		<div className="cont-reach-main-div">
			<Title>Reach to us</Title>

			<div className="cont-reach-text">
				<div>We are always pleased by your presence</div>
			</div>

			<div className="cont-reach-add-map-div">
				<div className="cont-reach-gmap-div">
					<div>hey bro! I'm google maps component</div>
				</div>
				<div className="cont-reach-add-time-div">
					<div className="cont-reach-left-div">
						<AddressComp />
					</div>

					<div className="cont-reach-right-div">
						<Timmings />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReachUs;
