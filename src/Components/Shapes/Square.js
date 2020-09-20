import React from 'react'

function Square(props) {

    let style={
        position: "absolute",
        top: `${props.top}rem`,
        left: `${props.left}rem`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        backgroundColor: `${props.color}`,
        transform: `rotate(${props.angle}deg)`,
    }

    return (
        <div style={style}/>
    )
}

export default Square
