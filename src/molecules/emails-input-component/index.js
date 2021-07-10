import React, { useState } from 'react'
import EmailChips from '../../atoms/email-chips'
import './emails-input.scss'

const blockName = 'emailsInput'
export default function EmailsInput (props) {

    // Using React Hooks to add default state to Input Value
    const [value, setValue] = useState('');

    //Renders the Email Chips if there is a list available
    let renderEmails = () => {
        return (
            props.emailsToRender && props.emailsToRender.map((email, i) => <EmailChips key={i} email={email} removeEmail={props.removeEmail} />)
        )
    }

    // Focus the invisible input field on clicking anywhere on the component
    let focusInput = () => {
        document.getElementById(`${blockName}__emai-input`).focus();
    }

    // Handles KeyDown and checks for Enter, Tab, Comma to execute the logic
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
            setValue('')
        }
    }

    // Handles the paste on input box using ctrl + v , right click + paste
    let handlePasteEmails = e => {
        let pastedEmails = e.clipboardData.getData('text').match(/[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g);
        pastedEmails && props.updatePastedEmails(pastedEmails.map(email => ({'emailId': email})));
        window.setTimeout(function() {
            setValue('')
          }, 0);
    }

    // Listens to input change and updates the value
    let handleChange = e => {
        setValue(e.target.value)
    }

        return (
            <div onClick={focusInput} id={blockName} className={blockName}>
                {renderEmails()}
                <input 
                    className={`${blockName}__input`} 
                    onKeyDown={handleKeyPressDown} 
                    autoComplete='off' 
                    type='email'
                    value={value}
                    id={`${blockName}__emai-input`} 
                    name='email'
                    onChange={handleChange}
                    onPaste={handlePasteEmails}
                    placeholder="Add people..." 
                />
            </div>
        )
}
