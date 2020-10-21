import React from 'react'
import "./Membership.css";
import tshirt from "../../Images/Merchandise/img1.jpg"
import Slider from "../GlobalComponents/Slider/Slider";
import MerchandiseCard from "./MerchandiseCard";
import Title from "../GlobalComponents/Title/Title";

function Merchandise() {
    const products=[
        {
            img:tshirt,
            title:"T-shirt",
            desc:"Unisex round-neck t-shirt",
            price:"900",
            info:"We provide a great range of t-shirts in various colors with good fabric quality.",
            tag:"New"
        },
        {
            img:tshirt,
            title:"T-shirt",
            desc:"Unisex round-neck t-shirt",
            price:"900",
            info:"We provide a great range of t-shirts in various colors with good fabric quality.",
            tag:"Best-Seller"
        },
        {
            img:tshirt,
            title:"T-shirt",
            desc:"Unisex round-neck t-shirt",
            price:"900",
            info:"We provide a great range of t-shirts in various colors with good fabric quality.",
            tag:"New"
        },
    ]
    return (
        <div className="merchandise-container">
                <Title>Our Merchandise</Title>
                <h5>Checkout our exclusive merchandise designed especially for all the fitness enthusiasts.</h5>
			<Slider smallScreen={1} mediumScreen={1} largeScreen={1}>
                
                    {products.map((items,index)=>{
                        return(
                    <MerchandiseCard
                    key={items.index}
                    img={items.img}
                    title={items.title}
                    desc={items.desc}
                    price={items.price}
                    info={items.info}
                    tag={items.tag}
                    />
                    );
                })}
                </Slider>
                
        </div>
    )
}

export default Merchandise
