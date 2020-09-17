import React, { Component } from 'react'
import Hero from '../Hero'
import Banner from '../Banner'
class OurPrograms extends Component {
    render() {
        return (
            <div>
                <Hero tempClass='ourPrograms-bg'>
                    <Banner title='Our programs' description='keep your energy up and burn calories'></Banner>
                </Hero>
            </div>
        )
    }
}

export default OurPrograms
