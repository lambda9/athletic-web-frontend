import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home'
import OurPrograms from './Components/Pages/OurPrograms'
import ContactUs from './Components/Pages/ContactUs'
import AboutUs from './Components/Pages/AboutUs'
import FAQ from './Components/Pages/FAQ'
import Gallery from './Components/Pages/Gallery'
import Membership from './Components/Pages/Membership'
import Error from './Components/Pages/Error'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/programs/" component={OurPrograms} />
		  <Route exact path="/contactUs/" component={ContactUs} />
		  <Route exact path="/aboutUs/" component={AboutUs} />
		  <Route exact path="/faq/" component={FAQ} />
		  <Route exact path="/gallery/" component={Gallery} />
		  <Route exact path="/membership/" component={Membership} />
          <Route component={Error} />
        </Switch>
        
      </Router>
    );
  }
}

export default App;
