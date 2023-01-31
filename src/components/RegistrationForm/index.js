// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstRequired: '',
    lastRequired: '',
    firstName: '',
    lastName: '',
    formSubmitted: false,
  }

  onSuccessSubmit = () => {
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({firstRequired: 'Required', lastRequired: 'Required'})
    } else if (lastName === '') {
      this.setState({lastRequired: 'Required'})
    } else if (firstName === '') {
      this.setState({firstRequired: 'Required'})
    }
  }

  submitAnotherResponse = () => {
    this.setState({formSubmitted: false, firstName: '', lastName: ''})
  }

  renderSuccessfullyLogin = () => (
    <div>
      <div>
        <img
          alt="success"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <p>Submitted Successfully</p>
        <button type="button" onClick={this.submitAnotherResponse}>
          Submit Another Response
        </button>
      </div>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    this.onSuccessSubmit()
  }

  firstNameEventHandler = event => {
    if (event.target.value === '') {
      this.setState({firstRequired: 'Required'})
    } else {
      this.setState({firstRequired: ''})
    }
  }

  lastNameEventHandler = event => {
    if (event.target.value === '') {
      this.setState({lastRequired: 'Required'})
    } else {
      this.setState({lastRequired: ''})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLoginForm = () => {
    const {firstRequired, lastRequired, firstName, lastName} = this.state

    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label htmlFor="first-name">FIRST NAME</label>
            <br />
            <input
              id="first-name"
              value={firstName}
              onBlur={this.firstNameEventHandler}
              onChange={this.onChangeFirstName}
            />
            <p>{firstRequired}</p>
          </div>
          <div>
            <label htmlFor="last-name">LAST NAME</label>
            <br />
            <input
              id="last-name"
              value={lastName}
              onBlur={this.lastNameEventHandler}
              onChange={this.onChangeLastName}
            />
            <p>{lastRequired}</p>
          </div>
          <button type="button" onClick={this.onSuccessSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {formSubmitted} = this.state
    return (
      <div>
        {formSubmitted
          ? this.renderSuccessfullyLogin()
          : this.renderLoginForm()}
      </div>
    )
  }
}

export default RegistrationForm
