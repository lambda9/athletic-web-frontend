import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class SideNav extends Component {
	render() {
		return (
			<div>
				<div
					className={
						this.props.sideNavState ? "side-nav" : "side-nav show-side-nav"
					}
				>
					<Link to="/" className="closebtn" onClick={this.props.toggleFun}>
						X
					</Link>
					<Link to="/">Home</Link>
					<Link to="/">Programs</Link>
					<Link to="/">Membership</Link>
					<Link to="/">Blogs</Link>
					<Link to="/">About Us</Link>
					<Link to="/">Contact Us</Link>
					<button className="loginTrialBtn">Free Trial</button>
					<button className="loginTrialBtn">Login</button>
				</div>
			</div>
		);
	}
}

export default SideNav;
