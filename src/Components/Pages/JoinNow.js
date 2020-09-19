import React, { Component } from 'react'

class JoinNow extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
                slug: this.props.match.params.slug,
                
              
        }
    }
    
    render() {
        return (
            <div>
                <h1>Im from join now page with plan id: {this.state.slug}</h1>
            </div>
        )
    }
}

export default JoinNow
