import React, { Component } from 'react'
import TopNav from './TopNav'
import SideNav from './SideNav'

class NavMain extends Component {
    
    constructor(props) {
		super(props);

		this.state = {
			sideNavState: false,
		};
	}

	toggle = () => {
		this.setState({
			sideNavState: !this.state.sideNavState,
		});
	};

    render() {
        return (
            <div>
            <TopNav
            sideNavState={this.state.sideNavState}
            toggleFun={this.toggle}
        />
        <SideNav
            sideNavState={this.state.sideNavState}
            toggleFun={this.toggle}
        />
            </div>
        )
    }
}

export default NavMain

