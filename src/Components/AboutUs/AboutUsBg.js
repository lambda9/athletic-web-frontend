import React from 'react'
import Triangle from "../Shapes/Triangle";
import Square from "../Shapes/Square";
import Circle from "../Shapes/Circle";
import Line from '../Shapes/Line';
import Dots from '../Shapes/Dots'


function AboutUsBg() {
    return (
        <div>
        <Triangle top={180} left={120} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={15} />
        <Circle top={300} left={60} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={309} left={70} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={309} left={240} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={420} left={230} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        
        <Triangle top={410} left={595} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        <Circle top={500} left={660} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={509} left={670} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={530} left={580} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={630} left={620} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        
        <Triangle top={40} left={1100} w1={300} w2={300} w3={600} color={"rgb(220,222,231)"} angle={180} />
        <Dots top={850} left={0} width={400} height={440} spacing={25} r={7} color={"#dcf1e7"} angle={0}/>

        </div>
    )
}

export default AboutUsBg
