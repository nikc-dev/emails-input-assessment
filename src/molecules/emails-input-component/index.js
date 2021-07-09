import React from 'react'
import EmailChips from '../../atoms/email-chips'
import './emails-input.scss'

const blockName = 'emailsInput'
export default function EmailsInput (props) {

    //Renders the Email Chips if there is a list available
    let renderEmails = () => {
        return (
            props.emailsToRender && props.emailsToRender.map((email, i) => <EmailChips key={i} email={email} removeEmail={props.removeEmail} />)
        )
    }

    // Focus the invisible input field on clicking the component
    let focusInput = () => {
        document.getElementById(`${blockName}__emai-input`).focus();
    }

    let handleKeyPressDown = e => {
        if (e.target.value && ['Enter', 'Tab', ','].includes(e.key)) {
            const { value } = e.target
            let email;
            if (/[\w\d.-]+@[\w\d\.-]+\.[\w\d.-]+/.test(value.trim())) {
                email = {emailId: value.trim()}
            } else {
                email = {emailId: value.trim(), isInValid: true}
            }
            props.updateEmailsList(email);
            document.getElementById(`${blockName}__emai-input`).value=''
        }
    }

        return (
            <div onClick={focusInput} id={blockName} className={blockName}>
                {renderEmails()}
                <input 
                    className={`${blockName}__input`} 
                    onKeyDown={handleKeyPressDown} 
                    autoComplete='off' 
                    type="email" 
                    id={`${blockName}__emai-input`} 
                    name="email" 
                    placeholder="Add people..." 
                />
            </div>
        )
}
