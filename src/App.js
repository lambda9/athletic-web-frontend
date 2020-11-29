import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Programs from "./Components/Programs/ProgramsPage";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import FAQ from "./Components/FAQ/FAQ";
import Gallery from "./Components/Gallery/Gallery";
import Membership from "./Components/Membership/Membership";
import Error from "./Components/Pages/Error";
import JoinNow from "./Components/Pages/JoinNow";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/GlobalComponents/ScrollToTop";
import FreeTrialPage from "./Components/FreeTrial/FreeTrialPage";
import FranchisePage from "./Components/Franchise/FranchisePage";
import BlogPage from "./Components/NewsBlog/BlogPage";
import FullBlogPage from "./Components/NewsBlog/FullBlogPage";
import AdvertisePage from "./Components/Advertise/AdvertisePage";
import PTPage from "./Components/PersonalTraining/PTPage";
import Login from "./Components/Login/Login";
import { UserProvider } from "./Components/GlobalComponents/UserContext";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      rememberMe: false,
      showPassword: false,
      user: null,
    };
  }

  componentDidUpdate() {
    const loggedInuser = window.localStorage.getItem("user");
    if (loggedInuser !== null) {
      const uss = JSON.parse(loggedInuser);
      console.log(localStorage, loggedInuser, "Hey im in logged in user");
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value =
      name == "rememberMe" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleShowPassword = (event) => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleLogin = async (event) => {
    console.log("Hey login Data", this.state);
    const { userName, password } = this.state;

    let item = {
      email: userName,
      password: password,
    };

    const response = await axios
      .post("http://127.0.0.1:8000/memberapi/user/", item)
      .then((res) =>
        this.setState({
          user: res.data,
        })
      )
      .catch((err) => console.log(err, "error in posting"));

    if (this.state.user) {
      window.localStorage.setItem("user", JSON.stringify(this.state.user));
    }
  };

  render() {
    return (
      <Router>
        <UserProvider
          value={{
            loginDt: this.state,
            handleChange: this.handleChange,
            showPassword: this.showPassword,
            handleLogin: this.handleLogin,
          }}
        >
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
              <Route exact path="/freetrial/" component={FreeTrialPage} />
              <Route exact path="/franchise/" component={FranchisePage} />
              <Route exact path="/blog/" component={BlogPage} />
              <Route exact path="/fullblog/" component={FullBlogPage} />
              <Route exact path="/advertise/" component={AdvertisePage} />
              <Route exact path="/pt" component={PTPage} />
              <Route exact path="/login" component={Login} />
              <Route component={Error} />
            </Switch>
          </div>

          <Footer />
        </UserProvider>
      </Router>
    );
  }
}

export default App;
