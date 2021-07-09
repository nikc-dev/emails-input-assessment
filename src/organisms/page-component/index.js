import React, { Component } from 'react'
import EmailsInput from '../../molecules/emails-input-component'
import Button from '../../atoms/button'
import './page.scss'

const blockName = 'page'

export default class Page extends Component {

    state = {
        emailsList: []
    }

    // Randomly adds an email to the list of email in
    addRandomEmail = () =>  {
        this.setState({emailsList: [...this.state.emailsList, {emailId: `${Math.random().toString(36).substring(7)}@random.com`}]})
    }

    // Update the emails list in state from the entered email in input
    updateEmailsList = (email) => {
        this.setState({emailsList:[...this.state.emailsList, email]});
    }

    // Removes the email from the list in State Object
    removeEmail = (emailId) => {
        console.log(this.state.emailsList.filter(email => email !== emailId))
        this.setState({emailsList: this.state.emailsList.filter(email => email.emailId !== emailId)})
    }

    // Shows an alert box with the total valid emails count
    showAlert = () => {
        alert(`Number of Valid Emails in the List : ${this.state.emailsList.filter(email => email.isInValid !== true).length}`)
    }

    render() {
        return (
            <div className={blockName}>
                <div className={`${blockName}__grey-container`}>
                    <p className={`${blockName}__heading-text`}>Share <span className={`${blockName}__heading-text__bold`}>Project name </span>with others</p>
                    <EmailsInput emailsToRender={this.state.emailsList} updateEmailsList={this.updateEmailsList} removeEmail={this.removeEmail} />
                </div>
                <div className={`${blockName}__btn-container`}>
                    <Button handleClick={this.addRandomEmail} title={'Add Email'} />
                    <Button handleClick={this.showAlert} title={'Get emails count'}/>
                </div>
            </div>
        )
    }
}
