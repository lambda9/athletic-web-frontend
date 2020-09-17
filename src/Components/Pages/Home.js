import React from 'react'
import Carousel from '../Carousel/Carousel'
import Services from '../Services/Services'
import CardGroup from '../CardGroup/CardGroup'
import Navbar from '../Navbar/Navbar'
import img1 from '../../Images/Carousel/img1.jpg'
import img2 from '../../Images/Carousel/img2.jpg'
import img3 from '../../Images/Carousel/img3.jpg'


function Home() {

const images = [img1, img2, img3];

    return (
        <div>
        <Navbar />
        <Carousel images={images} width={100} heightToWidthRatio={0.43} />
        <Services />
        <CardGroup />
        </div>
    )
}

export default Home
