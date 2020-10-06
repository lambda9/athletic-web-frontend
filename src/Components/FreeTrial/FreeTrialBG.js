import React from 'react'
import Circle from '../Shapes/Circle'
import Triangle from '../Shapes/Triangle'
import TextBG from '../Shapes/TextBG'
import './FreeTrial.css'

function FreeTrialBG() {
    return (
        <div >

        <Triangle top={410} left={595} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        
        <Circle top={130} left={300} r1={30} r2={30} color={"#edfffe"}/>
        <Circle top={130} left={220} r1={50} r2={50} color={"#edfffe"}/>

        <Triangle top={420} left={485} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        <Circle top={500} left={340} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={509} left={450} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={530} left={470} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={630} left={310} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
    
        <Circle top={930} left={500} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        <Circle top={930} left={420} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>

        <Circle top={509} left={250} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={530} left={170} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={630} left={210} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
    
        <Circle top={930} left={300} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        <Circle top={930} left={220} r1={50} r2={50} color={"rgb(238, 238, 239)"} />
        <Triangle top={220} left={485} w1={40} w2={40} w3={80} color={"rgb(253,238,238)"} angle={-35} />
        <Circle top={100} left={540} r1={140} r2={140} color={"rgb(238,238,239)"}/>
        <Circle top={250} left={740} r1={100} r2={100} color={"rgb(238,238,239)"}/>
        <Circle top={309} left={550} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={330} left={470} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={130} left={510} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        <Circle top={309} left={1050} r1={120} r2={120} color={"rgb(255, 255, 255)"}/>
        <Circle top={330} left={1070} r1={50} r2={50} color={"rgb(238, 238, 239)"}/>
        <Circle top={430} left={1010} r1={30} r2={30} color={"rgb(238, 238, 239)"}/>
        
        <TextBG top={220} left={-135} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={270}>it never</TextBG>
        <TextBG top={230} left={-130} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={270}>gets easier</TextBG>
        <TextBG top={80} left={1210} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={90}>you</TextBG>
        <TextBG top={260} left={1210} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={90}>just</TextBG>
        <TextBG top={440} left={1210} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={90}>get</TextBG>
        <TextBG top={250} left={1000} fontSize={80} spacing={4} fontWeight={"normal"} color={"rgb(153, 255,251)"} capitalise={true} angle={90}>stronger</TextBG>

        </div>
    )
}

export default FreeTrialBG;
