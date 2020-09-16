import React from 'react'
import './TitleCSS.css'

function Title(props) {
    return (
        <div className='title'>
            <h4>{props.children}</h4>
            <div />
        </div>
    )
}

export default Title
