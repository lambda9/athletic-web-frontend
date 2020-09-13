import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarComp from './Components/NavbarComp';


function App() {
    return (
        <Router>
            <div className="App">
                <NavbarComp />
            </div>
        </Router>
  );
}

export default App;
