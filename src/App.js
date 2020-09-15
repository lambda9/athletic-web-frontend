import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavMain from "./Navbar/NavMain";
import ServicesLogo from "./Services/ServicesLogo";

class App extends Component {
	render() {
		return (
			<Router>
				<NavMain />
				<ServicesLogo />
			</Router>
		);
	}
}

export default App;
