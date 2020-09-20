import React from 'react'

function Circle(props) {
    
    let style={
        position: "absolute",
        top: `${props.top}rem`,
        left: `${props.left}rem`,
        width: `${props.r1}px`,
        height: `${props.r2}px`,
        backgroundColor: `${props.color}`,
        borderRadius: "50%"
    }

    return (
        <div style={style}/>
    )
}

export default Circle
