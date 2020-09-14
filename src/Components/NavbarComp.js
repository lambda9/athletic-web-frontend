import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCSS.css'
import {Button} from 'reactstrap'



class NavbarComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
            c1: 'bar1',
            c2: 'bar2',
            c3: 'bar3'
        }
    }

    handleToggle = () => {
        if(this.state.c1 === 'bar1') {

            this.setState({
                c1: 'bar1 change1',
                c2: 'bar2 change2',
                c3: 'bar3 change3'
            })
            return;
        }
        this.setState({
           c1: 'bar1',
            c2: 'bar2',
            c3: 'bar3' 
        })
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
                    <a href="/">Contact Us</a>
                    
                    <div className='nav-links-container-btn'>
                        <Button color='primary' outline>Login</Button> 
                        <Button color='primary' outline>Login</Button> 
                    </div>
                
                                   
                </div>

                <div className="nav-btn" onClick={this.handleToggle}>
                    <div class={this.state.c1}></div>
                    <div class={this.state.c2}></div>
                    <div class={this.state.c3}></div>
                 </div>

            </nav>
        )
    }
}

export default NavbarComp
