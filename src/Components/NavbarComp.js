import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCSS.css'
import {Button} from 'reactstrap'
import logo from './logo.png'


class NavbarComp extends Component {

    render() {
        return (
            <nav className="navbar">

                <div className="nav-header">
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
                </div>

                <div className='nav-links-container'>
                    <Link href="/">Home</Link>
                    <Link href="/">Programs</Link>
                    <Link href="/">Membership</Link>
                    <Link href="/">Blogs</Link>
                    <Link href="/">Contact Us</Link>
                    <Link href="/">Contact Us</Link>
                    
                    <div className='nav-links-container-btn'>
                        <button >Free Trial</button> 
                        <button >Login</button> 
                    </div>        
                </div>

                <div className="nav-btn" onClick={this.props.toggleFun}>
                    <div class={this.props.sideNavState ? 'bar1 change1' : 'bar1'}></div>
                    <div class={this.props.sideNavState ? 'bar2 change2' : 'bar2'}></div>
                    <div class={this.props.sideNavState ? 'bar3 change3' : 'bar3'}></div>
                 </div>

            </nav>
        )
    }
}

export default NavbarComp
