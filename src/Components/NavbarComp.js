import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCSS.css'
import {Button} from 'reactstrap'



class NavbarComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className="navbar">

                <div className="nav-header">
                    <Link to="/">
                        <label>Logo</label>
                    </Link>
                </div>

                <div className='nav-links-container'>
                    <a href="/">Home</a>
                    <a href="/">Programs</a>
                    <a href="/">Membership</a>
                    <a href="/">Blogs</a>
                    <a href="/">Contact Us</a>
                    <div className='nav-links-container-btn'>
                        <Button color='primary' outline>Login</Button> 
                        <Button color='primary' outline>Sign Up</Button> 
                    </div>
                </div>

                <a className="nav-btn" onClick={this.handleToggle}> Button </a>
            </nav>
        )
    }
}

export default NavbarComp
