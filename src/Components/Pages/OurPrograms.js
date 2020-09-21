import React, { Component } from 'react'
import Hero from '../Hero'
import Banner from '../Banner'
import bgImg from '../../Images/im8.jpg'
class OurPrograms extends Component {
    render() {
        return (
            <div>
                <Hero bgImg={bgImg}>
                    <Banner title='Our programs' description='keep your energy up and burn calories'></Banner>
                </Hero>
            </div>
        )
    }
}

export default OurPrograms
