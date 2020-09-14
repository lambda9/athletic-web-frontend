import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarComp from './Components/NavbarComp';
import SideNav from './Components/SideNav';
import Carousel1 from './Homepage/Carousel1';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sideNavState: false,
        }
    }
    
   
    toggle = () => {
        this.setState({
            sideNavState: !this.state.sideNavState
        })
    }
    
    render() {
        return (
            
            <Router>

            <NavbarComp sideNavState={this.state.sideNavState} toggleFun={this.toggle} />
            <SideNav sideNavState={this.state.sideNavState} toggleFun = {this.toggle}/>
            
            </Router>
            
        )
    }
}

export default App



