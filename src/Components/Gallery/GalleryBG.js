import React from 'react'
import Circle from '../Shapes/Circle'
import Square from '../Shapes/Square'
import Triangle from '../Shapes/Triangle'
import Line from '../Shapes/Line'
import './Gallery.css'

function GalleryBG() {
    return (
        <div >
        <Triangle top={410} left={595} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        
        <Circle top={130} left={300} r1={30} r2={30} color={"#edfffe"}/>
        <Circle top={130} left={220} r1={50} r2={50} color={"#edfffe"}/>

        <Triangle top={720} left={-95} w1={140} w2={140} w3={140} color={"rgb(255, 231, 231)"} angle={-35} />

        <Triangle top={420} left={185} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        <Circle top={500} left={240} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={509} left={250} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={530} left={170} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={630} left={210} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
    
        <Circle top={930} left={300} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        <Circle top={930} left={220} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        
        <Triangle top={220} left={485} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        <Circle top={300} left={540} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={309} left={550} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={330} left={470} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={430} left={510} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
    
        <Square top={1900} left={250} width={150} height={600} color={"#459fb6"} angle={0}/>

        <Triangle top={2710} left={195} w1={100} w2={150} w3={200} color={"rgb(253,238,238)"} angle={-35} />

        <Circle top={-100} left={820} r1={1200} r2={1800} color={"rgb(220,222,231)"}/>
        </div>
    )
}

export default GalleryBG
