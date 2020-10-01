import React, { Component } from 'react'
import Hero from '../Hero'
import Banner from '../Banner'
import bgImg from '../../Images/im8.jpg'
import ProgramCarousel from './ProgramCarousel'
class OurPrograms extends Component {
    render() {
        return (
            <div>
                <Hero bgImg={bgImg} title='Our programs' description='keep your energy up and burn calories'>
                </Hero>

                <ProgramCarousel />
            </div>
        )
    }
}

export default OurPrograms
