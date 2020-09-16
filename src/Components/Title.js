import React from 'react'
import './TitleCSS.css'

function Title(props) {
    return (
        <div className='section-title'>
            <h4>{props.children}</h4>
            <div />
        </div>
    )
}

export default Title
