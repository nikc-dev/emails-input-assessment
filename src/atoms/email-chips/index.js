import React from 'react'
import './email-chips.scss'

const blockName = 'emailChips'

export default function EmailChips(props) {
    let removeEmail = () => {
        props.removeEmail(props.email.emailId);
    }
    return (
        <span className={props.email.isInValid ? `${blockName}__invalid-email` : blockName}>
            {props.email.emailId}
            <span onClick={removeEmail} id={`${blockName}__remove-btn`} className={`${blockName}__remove-btn`} >X</span>
        </span>
    )
}
