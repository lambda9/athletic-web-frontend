
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavbarComp from './Components/NavbarComp';
import SideNav from './Components/SideNav';


import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            sideNavState: false,
            classnameProp: 'side-nav'
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



