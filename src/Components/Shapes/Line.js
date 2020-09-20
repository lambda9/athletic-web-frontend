import React from 'react'

function Line(props) {
    let style = {
        position: "absolute",
        top: `${props.top}rem`,
        left: `${props.left}rem`,
        width: `${props.width}px`,
        height: `${props.length}px`,
        backgroundColor: `${props.color}`,
        transform: `${props.angle}`
    }
    return (
        <div style={style} />
    )
}

export default Line
