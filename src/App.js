import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./Components/Carousel/Carousel";
import "./App.css";
import img1 from "./Images/Carousel/img1.jpg";
import img2 from "./Images/Carousel/img2.jpg";
import img3 from "./Images/Carousel/img3.jpg";
import Navbar from "./Components/Navbar/Navbar";
import CardGroup from "./Components/CardGroup/CardGroup";
import Services from "./Components/Services/Services";

const images = [img1, img2, img3];

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<Carousel images={images} width={100} heightToWidthRatio={0.43} />
				<Services />
				<CardGroup />
			</Router>
		);
	}
}

export default App;
