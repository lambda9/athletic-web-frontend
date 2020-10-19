import React from "react";
import "./PTPage.css";
import PTPageBanner from "./PTPageBanner";
import PTPhilosophy from "./PTPhilosophy";
import PTForYou from "./PTForYou";

import PTGotCovered from "./PTGotCovered";
import BeBolder from "./BeBolder";
import { Link } from "react-router-dom";
import MiniTitle from "../GlobalComponents/Title/MiniTitle";
import ExploreMore from "../GlobalComponents/ExploreMore/ExploreMore";

const exploreLinks = [
	["/programs", "Weight Loss"],
	["/gallery", "Gallery"],
	["/aboutus", "About Us"],
];

function PTPage() {
	return (
		<div>
			<PTPageBanner />
			<PTPhilosophy />
			<PTForYou />
			<PTGotCovered />
			<BeBolder />
			<ExploreMore linksArr={exploreLinks} />
			<div className="pt-still-q">
				<div>Still have question? We can help.</div>
				<Link to="/contactus" style={{ fontSize: "18px" }}>
					Request Callback
				</Link>
			</div>
		</div>
	);
}

export default PTPage;
