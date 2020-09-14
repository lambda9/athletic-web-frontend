import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ComponentsCSS.css'
import {Button} from 'reactstrap'



class NavbarComp extends Component {

    constructor(props) {
        super(props)


    }

    render() {
        return (
            <nav className="navbar">

                <div className="nav-header">
                    <Link to="/">
                        <label>Logo</label>
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
                        <Button color='primary' outline>Login</Button> 
                        <Button color='primary' outline>Login</Button> 
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
