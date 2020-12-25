import React, { Component, lazy, Suspense } from "react";
// import { Loadable } from "react-loadable";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Loader from "./Components/GlobalComponents/Loader";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";

import axios from "axios";
import LoadingSpinner from "./Components/GlobalComponents/LoadingSpinner";
// import LoadingSpinner from "./Components/GlobalComponents/LoadingSpinner";

axios.defaults.baseURL = "http://localhost:8000/";

const Home = lazy(() => import("./Components/Home/Home"));

const Programs = lazy(() => import("./Components/Programs/ProgramsPage"));

const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const FAQ = lazy(() => import("./Components/FAQ/FAQ"));
const Gallery = lazy(() => import("./Components/Gallery/Gallery"));
const Membership = lazy(() => import("./Components/Membership/Membership"));
const JoinNow = lazy(() => import("./Components/Pages/JoinNow"));
const FreeTrialPage = lazy(() =>
	import("./Components/FreeTrial/FreeTrialPage")
);
const FranchisePage = lazy(() =>
	import("./Components/Franchise/FranchisePage")
);
const BlogPage = lazy(() => import("./Components/NewsBlog/BlogPage"));
const FullBlogPage = lazy(() => import("./Components/NewsBlog/FullBlogPage"));
const AdvertisePage = lazy(() =>
	import("./Components/Advertise/AdvertisePage")
);
const PTPage = lazy(() => import("./Components/PersonalTraining/PTPage"));
const Login = lazy(() => import("./Components/Pages/Login"));

const FreeTrial = () => {
	return Loader("free-trials/settings/", FreeTrialPage);
};

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div className="main-content">
					<Suspense fallback={LoadingSpinner}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/programs/" component={Programs} />
							<Route exact path="/contactUs/" component={ContactUs} />
							<Route exact path="/aboutUs/" component={AboutUs} />
							<Route exact path="/faq/" component={FAQ} />
							<Route exact path="/gallery/" component={Gallery} />
							<Route exact path="/membership/" component={Membership} />
							<Route exact path="/joinNow/:slug" component={JoinNow} />
							<Route exact path="/freetrial/" component={FreeTrial} />
							<Route exact path="/franchise/" component={FranchisePage} />
							<Route exact path="/blog/" component={BlogPage} />
							<Route exact path="/fullblog/" component={FullBlogPage} />
							<Route exact path="/advertise/" component={AdvertisePage} />
							<Route exact path="/pt" component={PTPage} />
							<Route exact path="/login" component={Login} />
							<Route component={Error} />
						</Switch>
					</Suspense>
				</div>

				{/* <Footer /> */}
			</Router>
		);
	}
}

export default App;
