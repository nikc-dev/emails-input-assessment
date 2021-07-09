import React from 'react'
import './button.scss'

const blockName = 'button'
export default function Button(props) {
    return (
        <button onClick={props.handleClick} className={`${blockName} ${props.extraClass}_${blockName}`}>
            {props.title}
        </button>
    )
}
