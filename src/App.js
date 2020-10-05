import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Programs from "./Components/Programs/ProgramsPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import FAQ from "./Components/FAQ/FAQ";
import Gallery from "./Components/Pages/Gallery";
import Membership from "./Components/Membership/Membership";
import Error from "./Components/Pages/Error";
import JoinNow from "./Components/Pages/JoinNow";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import FreeTrialPage from './Components/FreeTrial/FreeTrialPage'
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="main-content">
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/programs/" component={Programs} />
            <Route exact path="/contactUs/" component={ContactUs} />
            <Route exact path="/aboutUs/" component={AboutUs} />
            <Route exact path="/faq/" component={FAQ} />
            <Route exact path="/gallery/" component={Gallery} />
            <Route exact path="/membership/" component={Membership} />
            <Route exact path="/joinNow/:slug" component={JoinNow} />
            <Route exact path='/freetrial/' component={FreeTrialPage} />
            <Route component={Error} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
