import React, { Component } from "react";
import "./Footer.css";
import Quicklinks from "./QuickLinks";
import Footerhead from "./FooterHeads";
import Newsletter from "./Newsletter";
import { FaCopyright } from "react-icons/all";
import SocialMedia from "./SocialMedia";
import GetApp from "./GetApp";

class Footer extends Component {
	links1 = [
		["/", "Home"],
		["blog", "Blog"],
		["gallery", "Gallery"],
		["programs", "Programs"],
		["membership", "Membership"],
		["pt", "PT"],
	];

	links2 = [
		["faq", "FAQ"],
		["aboutUs", "About us"],
		["news", "Latest News"],
		["contactUs", "Contact Us"],
		["advertise", "Advertise with us"],
	];

	render() {
		return (
			<footer className="footer-component">
				<div className="footer-text">WORK HARD . PLAY HARD</div>
				<div className="footer-main">
					<div className="footer-child">
						<Footerhead head="Newsletter" />
						<div className="footer-child-content">
							<Newsletter />
						</div>
					</div>
					<div className="footer-child">
						<Footerhead head="Quick links" />
						<div className="footer-child-content">
							<div className="footer-quicklink-group">
								<Quicklinks group={this.links1} />
								<Quicklinks group={this.links2} />
							</div>
						</div>
					</div>
					<div className="footer-child">
						<Footerhead head="Stay connected" />
						<div className="footer-child-content">
							<SocialMedia />
						</div>
						<Footerhead head="Get our app" />
						<div className="footer-child-content">
							<GetApp />
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div>
						<FaCopyright /> Athletic gym and fitness center
					</div>
					<div>All rights reserved</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
