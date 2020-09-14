import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";
import SideNav from "./Components/SideNav";
import Carousel1 from "./Homepage/Carousel1";
import Carousel from "./Components/Carousel/Carousel";

import img1 from "./Homepage/Images/img1.jpg";
import img2 from "./Homepage/Images/img2.jpg";
import img3 from "./Homepage/Images/img3.jpg";

const images = [img1, img2, img3];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sideNavState: false,
		};
	}

	toggle = () => {
		this.setState({
			sideNavState: !this.state.sideNavState,
		});
	};

	render() {
		return (
			<Router>
				<NavbarComp
					sideNavState={this.state.sideNavState}
					toggleFun={this.toggle}
				/>
				{/* <img src={images[0]} /> */}
				<SideNav
					sideNavState={this.state.sideNavState}
					toggleFun={this.toggle}
				/>
				<Carousel images={images} width={100} heightToWidthRatio={0.6} />
			</Router>
		);
	}
}

export default App;
