import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Carousel from "./Components/Carousel/Carousel";
import "./App.css";
import img1 from "./Homepage/Images/img1.jpg";
import img2 from "./Homepage/Images/img2.jpg";
import img3 from "./Homepage/Images/img3.jpg";
import NavMain from "./Components/Navbar/NavMain";

const images = [img1, img2, img3];

class App extends Component {
	render() {
		return (
			<Router>
				<NavMain />
				{/* <img src={images[0]} /> */}

				<Carousel images={images} width={100} heightToWidthRatio={0.6} />
			</Router>
		);
	}
}

export default App;
