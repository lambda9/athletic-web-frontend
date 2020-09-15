import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Carousel1 from './Homepage/Carousel1';
import NavMain from './Navbar/NavMain';

class App extends Component {
    
    render() {
        return (
            
            <Router>
            <NavMain />
            </Router>
            
        )
    }
}

export default App



