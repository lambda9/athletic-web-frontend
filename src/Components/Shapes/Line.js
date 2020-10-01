import React from 'react'

function Line(props) {
    let style = {
        position: "absolute",
        top: `${props.top}px`,
        left: `${props.left}px`,
        width: `${props.width}px`,
        height: `${props.length}px`,
        backgroundColor: `${props.color}`,
        transform: `rotate(${props.angle}deg)`,
    }
    return (
        <div style={style} />
    )
}

export default Line
