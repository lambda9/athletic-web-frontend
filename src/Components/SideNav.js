import React, { Component } from 'react'
import './ComponentsCSS.css'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'

class SideNav extends Component {
    render() {
        return (
            <div>
                <div className={this.props.sideNavState ? 'side-nav show-side-nav': 'side-nav'}>
                    <Link href="javascript:void(0)" className="closebtn" onClick={this.props.toggleFun}>×</Link>
                    <Link href="/">Home</Link>
                    <Link href="/">Programs</Link>
                    <Link href="/">Membership</Link>
                    <Link href="/">Blogs</Link>
                    <Link href="/">Contact Us</Link>
                    <Link href="/">Contact Us</Link>
                    <Button color='primary' outline>Login</Button>
                    <Button color='primary' outline>Login</Button>
                </div>
            </div>
        )
    }
}

export default SideNav
